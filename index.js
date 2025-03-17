function startGame() {
    const username = document.getElementById("username").value;
    const error = document.getElementById("usernameError");

    if(username.trim() === ""){
        error.innerHTML = "Please enter username";
        return;
    }
}    