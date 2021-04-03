document.addEventListener("DOMContentLoaded", () => {
    const select = (x) => document.querySelector(x);

    const logout = select("#logout");

    logout.addEventListener("click", async (e) => {
        e.preventDefault();

        const res = await fetch("/api/user/logout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        });

        if (res.ok) {
            document.location.replace("/login");
        } else {
            alert("Something went wrong!");
        }
    });
});
