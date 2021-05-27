const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

document.getElementById("login").addEventListener("click", function(e) {
    e.preventDefault;
    const username = usernameInput.value;
    const password = passwordInput.value;
    fetch("/auth/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        })
        .then((data) => data.json())
        .then((data) => {
            console.log(data);
            if (data)
                window.location.href =
                "http://localhost:3000/static/index.html";
        });
});