document.addEventListener("DOMContentLoaded", () => {
    const select = (x) => document.querySelector(x);

    // Grabs id of post to use in fetch
    const id = select("#singlepost-container").getAttribute("data-id");

    // Edits the post
    select("#confirm-edit").addEventListener("click", async function (e) {
        e.preventDefault();

        // Default title and post to use when not being sent in edit
        const defaultTitle = select("#singlepost-title").getAttribute(
            "placeholder"
        );
        const defaultPost = select("#singlepost-body").getAttribute(
            "placeholder"
        );

        // grabbing values and setting default
        const title = select("#singlepost-title").value.trim() || defaultTitle;
        const post = select("#singlepost-body").value.trim() || defaultPost;
        const body = JSON.stringify({ title, body: post });

        // checks to see if title and post exist. Should not reach else
        if (title && post) {
            // updates
            const res = await fetch(`/api/post/details/${id}`, {
                method: "PUT",
                body,
                headers: { "Content-Type": "application/json" },
            });

            // if all goood, go to dashboard
            if (res.ok) {
                document.location.replace("/dashboard");
            } else {
                alert("Something went wrong updating the post");
            }
        } else {
            alert("Please check all fields below!");
        }
    });

    // deletes post
    select("#confirm-delete").addEventListener("click", function (e) {
        e.preventDefault();

        fetch(`/api/post/details/${id}`, {
            method: "DELETE",
        });

        document.location.replace("/dashboard");
    });
});
