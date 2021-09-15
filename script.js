//Hårdkoda användaruppgifter
const userName = "test";
const password = "1234";

//hämta element från index
let userNameInput = document.getElementById('userName');
let passwordInput = document.getElementById('password');
let logInButton = document.getElementById('logInBtn');

//Kollar ifall användaruppgifter är sparade
checkCredentials();

//hämta input, validera och skicka vidare till korrekt sida.
logInButton.addEventListener("click", function () {
    let getUserName = userNameInput.value;
    let getPassword = passwordInput.value;
    
    if (getUserName === userName && getPassword === password) {
        localStorage.setItem("username", getUserName);
        logInPage();
    } else if (getUserName !== userName || getPassword !== password) {
        errorPage();
    };

});

function checkCredentials() {
    
    let checkUsername = localStorage.getItem("username");
    
    if (checkUsername === userName) {
        logInPage();
    } 

};

//Skapar upp samtliga element till loginsidan och döljer originalsidan.
function logInPage() {
    let getOriginalPage = document.getElementById('OriginalPage');
    getOriginalPage.style.display = "none";

    let div = document.createElement('div');
    div.style.backgroundColor = "gray";
    div.id = "LogInPage";
    document.body.appendChild(div);

    let header = document.createElement('h1');
    header.innerText = "Logged in";
    div.appendChild(header);

    let para = document.createElement('p');
    para.innerText = "Below is a Youtube clip of me playing golf.";
    div.appendChild(para);

    let youtube = document.createElement('iframe');
    youtube.style.width = "560px";
    youtube.style.height = "315px";
    youtube.src = "https://www.youtube.com/embed/eECwH-9lYnI";
    youtube.style.title = "YouTube video player";
    youtube.style.frameborder = "0";
    youtube.style.allow = "accelerometer";
    div.appendChild(youtube);

    let button = document.createElement('BUTTON');
    button.type = "button";
    button.style.border = "1px solid black";
    button.innerText = "Log out";
    button.id = "logOut";
    div.appendChild(button);

    //Tar bort username i LS och validerar ifall det är tomt -> VB till originalsidan.
    let myLogOut = document.getElementById('logOut');
    myLogOut.addEventListener("click", function () {
        
        localStorage.removeItem("username");
        let checkUsername = localStorage.getItem("username");
        
        if (checkUsername !== userName) {
            standardPage();
        };

    });
};

//Skapar upp sidan för fel användaruppgifter och döljer originalsidan.
function errorPage() {
    
    let getOriginalPage = document.getElementById('OriginalPage');
    getOriginalPage.style.display = "none";

    let createErrorPage = document.createElement('div');
    createErrorPage.style.backgroundColor = "gray";
    createErrorPage.id = "errorPage";
    document.body.appendChild(createErrorPage);

    let errorHeader = document.createElement('h1');
    errorHeader.innerText = "Wrong username or password";
    createErrorPage.appendChild(errorHeader);

    let backToOriginal = document.createElement('BUTTON');
    backToOriginal.type = "button";
    backToOriginal.style.border = "1px solid black";
    backToOriginal.innerText = "Back to login page";
    backToOriginal.id = "backToOriginal";
    createErrorPage.appendChild(backToOriginal);

    backToOriginal.addEventListener("click", function() {
        
        standardPage();

    });
}

//Visar originalsidan igen, tar bort login och error -sidan.
function standardPage() {
    
    let getOriginalPage = document.getElementById('OriginalPage');
    getOriginalPage.style.display = "initial";

    let logInPage = document.getElementById('LogInPage');
    let errorPage = document.getElementById('errorPage');

    if(logInPage !== null){
        logInPage.remove();
    }else if(errorPage !== null) {
        errorPage.remove();
    };

};




