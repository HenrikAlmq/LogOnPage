const userName = "test";
const password = "1234";

let userNameInput = document.getElementById('userName');
let passwordInput = document.getElementById('password');
let logInButton = document.getElementById('logInBtn');

checkCredentials();

logInButton.addEventListener("click", function () {
    let getUserName = userNameInput.value;
    let getPassword = passwordInput.value;

    if (getUserName == userName && getPassword == password) {
        LogInPage();
    } else if (checkUsername != userName && checkPassword != password) {
        errorLogIn();
    }


    localStorage.setItem("username", getUserName);
    localStorage.setItem("password", getPassword);


});

function checkCredentials() {

    checkUsername = localStorage.getItem("username");
    checkPassword = localStorage.getItem("password");

    if (checkUsername == userName && checkPassword == password) {
        LogInPage();
    }


};


function LogInPage() {
    originalPage = document.getElementById('OriginalPage');
    originalPage.style.display = "none";

    div = document.createElement('div');
    div.style.backgroundColor = "gray";
    div.id = "LogInPage";
    document.body.appendChild(div);


    header = document.createElement('h1');
    header.innerText = "Du är nu inloggad";
    div.appendChild(header);

    para = document.createElement('p');
    para.innerText = "Nedan finns ett youtube-klipp att kika på";
    div.appendChild(para);

    youtube = document.createElement('iframe');
    youtube.style.width = "560px";
    youtube.style.height = "315px";
    youtube.src = "https://www.youtube.com/embed/eECwH-9lYnI";
    youtube.style.title = "YouTube video player";
    youtube.style.frameborder = "0";
    youtube.style.allow = "accelerometer";
    div.appendChild(youtube);

    button = document.createElement('BUTTON');
    button.type = "button";
    button.style.border = "1px solid black";
    button.innerText = "logga ut";
    button.id = "logOut";
    div.appendChild(button);

    myLogOut = document.getElementById('logOut');

    myLogOut.addEventListener("click", function () {
        localStorage.removeItem("username");
        localStorage.removeItem("password");

        if (checkUsername != userName && checkPassword != password) {

            standardPage();
        };

    });
};

function standardPage() {

    let standard = document.getElementById('OriginalPage');
    standard.style.display = "initial";
    let standardPage = document.getElementById('LogInPage');
    standardPage.style.display = "none";

}

function errorLogIn() {
    div = document.createElement('div');
    div.id = "ErrorLogIn";
    document.body.appendChild(div);
    

    header = document.createElement('h2');
    header.innerText = "Fel vid inloggning, vänligen kontrollera användarnamn och lösenord";
    div.appendChild(header);

};


