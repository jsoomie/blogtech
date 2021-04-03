document.addEventListener("DOMContentLoaded", () => {
    const select = (x) => document.querySelector(x);

    select("#add-post").addEventListener("click", function (e) {
        e.preventDefault();
        const target = e.target;
        console.log(target);
    });
});
