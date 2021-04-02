$(document).ready(() => {
    console.log("HELLO FROM INDEX");

    $(".post-display").click(function (e) {
        e.preventDefault();

        const postID = $(this).data("checkit");

        $(".details", this).slideToggle();
    });

    // Opens comments section when add comments is clicked
    $(".inputStuff").click(function () {
        const commentlist = $(this)
            .closest(".add-comments")
            .siblings(".post-display")
            .find(".details:first");

        commentlist.slideDown();
    });
});
