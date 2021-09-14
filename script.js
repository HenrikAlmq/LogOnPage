const userName = "test";
const password = "1234";

let userNameInput = document.getElementById('userName');
let passwordInput = document.getElementById('password');
let logInButton = document.getElementById('logInBtn');

checkCredentials();

logInButton.addEventListener("click", function () {
    let getUserName = userNameInput.value;
    let getPassword = passwordInput.value;
    
    if (getUserName === userName && getPassword === password) {
        LogInPage();
    } else if (getUserName !== userName || getPassword !== password) {
        errorPage();

    };


    localStorage.setItem("username", getUserName);
    localStorage.setItem("password", getPassword);


});

function checkCredentials() {

    checkUsername = localStorage.getItem("username");
    checkPassword = localStorage.getItem("password");

    if (checkUsername === userName && checkPassword === password) {
        LogInPage();
    } 


};


function LogInPage() {
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

    let myLogOut = document.getElementById('logOut');

    myLogOut.addEventListener("click", function () {


        localStorage.removeItem("username");
        localStorage.removeItem("password");
        let checkUsername = localStorage.getItem("username");
        let checkPassword = localStorage.getItem("password");

        if (checkUsername !== userName && checkPassword !== password) {

            standardPage();
        };

    });
};


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




