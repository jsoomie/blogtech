document.addEventListener("DOMContentLoaded", () => {
    const select = (x) => document.querySelector(x);
    const submitLogin = select("#login-button");

    submitLogin.addEventListener("click", async (e) => {
        e.preventDefault();
        const name = select("#username-login").value.trim();
        const password = select("#password-login").value.trim();

        const body = JSON.stringify({ name, password });

        const res = await fetch("/api/user/login", {
            method: "POST",
            body,
            headers: { "Content-Type": "application/json" },
        });
    });
});
