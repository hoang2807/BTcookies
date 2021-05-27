const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

function setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + 5 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie += cname + "=" + cvalue + ";" + expires + ";path=/";
}
document.getElementById("change").addEventListener("click", function(e) {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;
    fetch("/auth/change", {
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
            setCookie("token", data.token);
            console.log(data.token);
            if (!data.token)
                window.location.href =
                "http://localhost:3000/static/login.html";
            else {
                fetch("/auth/change", {
                        method: "PUT",
                        headers: {
                            "Content-type": "application/json",
                        },
                        body: JSON.stringify({
                            username,
                            password,
                        }),
                    })
                    .then((data) => data.json())
                    .then((data) => console.log(data))
                    .catch((error) => console.log(error));
            }
        })
        .catch((err) => console.log(err));
});