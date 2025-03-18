const welcomeScreen = document.getElementById("welcomeScreen");
const quizArea = document.getElementById("quizArea");

function startGame() {
    const username = document.getElementById("username").value;
    const error = document.getElementById("usernameError");

    if(username.trim() === ""){
        error.innerHTML = "Please enter username";
        return;
    }
    error.innerHTML="";
    welcomeScreen.classList.add("hide"); 
    quizArea.classList.remove("hide");
}    