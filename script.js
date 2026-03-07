const PASSWORD = "dillybar";

function checkPassword() {

let input = document.getElementById("password").value;
let error = document.getElementById("error");

if (input === PASSWORD) {
window.location.href = "message.html";
}
else {
error.textContent = "Wrong password ❤️";
}

}