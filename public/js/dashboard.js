document.addEventListener("DOMContentLoaded", () => {
    const select = (x) => document.querySelector(x);

    select("#submit-post").addEventListener("click", async function (e) {
        e.preventDefault();

        const title = select("#new-post-title").value.trim();
        const post = select("#new-post-body").value.trim();

        const body = JSON.stringify({ title, body: post });

        if (title && post) {
            const res = await fetch("/api/post/create", {
                method: "POST",
                body,
                headers: { "Content-Type": "application/json" },
            });

            if (res.ok) {
                document.location.replace("/dashboard");
            } else {
                alert("Something went wrong!");
            }
        } else {
            alert("Please check all fields below!");
        }
    });
});
