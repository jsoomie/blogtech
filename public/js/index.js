$(document).ready(() => {
    console.log("HELLO FROM INDEX");

    $(".post-display").click(function (e) {
        e.preventDefault();

        const postID = $(this).data("checkit");

        $(".details", this).slideToggle();
    });
    $(".inputStuff").click(function () {
        // trying to find the details to open up
        $(this).parents(".post-check");
    });
});
