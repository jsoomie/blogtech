$(document).ready(() => {
    $(".comment-button").click(async function (e) {
        e.preventDefault();

        const target = $(e.target);

        const post_id = $(target).data("id");
        const body = $(target).siblings("input.inputStuff").val();

        if (body) {
            const res = await fetch("/api/comment/create", {
                method: "POST",
                body: JSON.stringify({
                    post_id,
                    body,
                }),
                headers: { "Content-Type": "application/json" },
            });

            if (res.ok) {
                document.location.reload();
            } else {
                alert("Something went wrong!");
            }
        } else {
            alert("Please check fields!");
        }
    });
});
