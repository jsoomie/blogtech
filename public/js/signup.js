document.addEventListener("DOMContentLoaded", () => {
    // shortens querySelector
    const select = (x) => document.querySelector(x);
    // grabs submit button
    const submitButton = select("#signup-button");

    submitButton.addEventListener("click", async (e) => {
        e.preventDefault();

        // Grabs username field
        const username = select("#signup-username").value.trim();
        // Grabs email field
        const email = select("#signup-email").value.trim();
        //Grabs password field
        const password = select("#signup-password").value.trim();
        // Grabs confirmed password
        const confirmPassword = select("#signup-password-confirm").value.trim();

        if (username === "" || email === "" || password === "") {
            alert("A field is missing down below!");
        } else {
            // Stringify the inputs to pass into the fetch
            const body = JSON.stringify({
                name: username,
                password,
                email,
            });

            if (password === confirmPassword) {
                console.log("Password Matches");
                const res = await fetch("/api/user/create", {
                    method: "POST",
                    body,
                    headers: { "Content-Type": "application/json" },
                });

                if (res.ok) {
                    res.redirect("/");
                } else {
                    alert("Sign up failed");
                }
            } else {
                // grabs the element
                const incorrectPassword = select("#wrong-password-container");
                // removes the hide class
                incorrectPassword.classList.remove("hide");
                // re-adds the hide class to remove from page
                setTimeout(() => {
                    incorrectPassword.classList.add("hide");
                }, 2000);
            }
        }
    });
});
