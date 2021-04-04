document.addEventListener("DOMContentLoaded", () => {
    const select = (x) => document.querySelector(x);

    select("#confirm-edit").addEventListener("click", async function (e) {
        e.preventDefault();
        console.log("clicked");

        const id = select("#singlepost-container").getAttribute("data-id");

        const defaultTitle = select("#singlepost-title").getAttribute(
            "placeholder"
        );

        const defaultPost = select("#singlepost-body").getAttribute(
            "placeholder"
        );

        const title = select("#singlepost-title").value.trim() || defaultTitle;
        const post = select("#singlepost-body").value.trim() || defaultPost;
        const body = JSON.stringify({ title, post });

        if (title && post) {
            const res = await fetch(`/api/post/details/${id}`, {
                method: "PUT",
                body,
                headers: { "Content-Type": "application/json" },
            });

            if (res.ok) {
                document.location.replace("/dashboard");
            } else {
                alert("Something went wrong updating the post");
            }
        } else {
            alert("Please check all fields below!");
        }
    });
});
