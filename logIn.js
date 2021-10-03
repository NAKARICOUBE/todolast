const logInModal = document.querySelector(".logInModal");
const logInForm = document.querySelector("#logInForm");
const logInInput = logInForm.querySelector("input");
const Greegting = document.getElementById("Greeting");
const cancleBtn = document.querySelectorAll(".cancle");
const logOutBtn = document.querySelector("#logOut");
const headerLogIn = document.querySelector(".headerLogIn");
const beforeLogIn = document.querySelector(".beforeLogIn");
const afterLogIn = document.querySelector(".afterLogIn");
const USER_KEY = "username";
const HIDDEN_CLASS = "hidden";

const savedUsername = localStorage.getItem(USER_KEY);

function handleSubmit(event){
    event.preventDefault();
    logInModal.classList.add(HIDDEN_CLASS);
    const value = logInInput.value ;
    localStorage.setItem(USER_KEY, value);
    headerLogIn.innerText = value;
    paintUser(value);
}


function paintUser(username){
    Greeting.innerText = `Hello, ${username}`;
}


function CancleLogInModal() {
    logInModal.classList.add(HIDDEN_CLASS);
}

function ShowLogInModal() {
    if(savedUsername === null){
        logInModal.classList.remove(HIDDEN_CLASS);

    } else {
        logInModal.classList.remove(HIDDEN_CLASS);
        beforeLogIn.classList.add(HIDDEN_CLASS);
        afterLogIn.classList.remove(HIDDEN_CLASS);
        paintUser(savedUsername);
    }
}

logInForm.addEventListener("submit", handleSubmit);
cancleBtn[0].addEventListener("click", CancleLogInModal);
cancleBtn[1].addEventListener("click", CancleLogInModal);
headerLogIn.addEventListener("click", ShowLogInModal);
logOutBtn.addEventListener("click", logOut = () => {
   localStorage.removeItem(USER_KEY);
   location.reload();
});

if(savedUsername !== null){
    headerLogIn.innerText = savedUsername;

}