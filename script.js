//Inloggningsuppgifter:
const namn = "Kalle";
const lösenord = "qwe123";

let welcomePage = document.getElementById("welcomePage");
let logInForm = document.getElementById("logInForm");
let formRef; //referens för smidigare hänvisning till formuläret

//Körs när sidan har laddats
function init(){
    //Hämtar inloggningsformuläret och kör funktionen "event", men bara om användaren trycker på knappen submit.
    formRef = document.querySelector("form");
    formRef.addEventListener("submit", event =>{
        event.preventDefault();
        getLoginData();
        checkLogin(); 
    });
    checkLogin(); //kollar om användaren redan är inloggad när sidan laddas/refreshas
}
window.onload = init; //kör init efter att html har laddats


function getLoginData(){
    let user = formRef.elements.user.value;
    console.log(user);
    let pwd = formRef.elements.pwd.value;
    console.log(pwd);

    //Uppdaterar status om användaren loggar in.
    if (user === namn && pwd === lösenord){
        localStorage.setItem("loggedIn", "true"); //nyckel och värde("true" är en string, inte en boolean)
    } else {
        document.getElementById("error").textContent = "Felaktiga inloggningsuppgifter";
    }
}

//System för att se om användare är inloggad
function checkLogin(){
    let loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn == "true"){
        logInForm.style.display = "none"; //döljer inloggningsformulär
        
        welcomePage.style.display = "block"; //Visar välkomstsida
        document.getElementById("welcomeMessage").textContent = //Skapar välkomstmeddelande
        "Välkommen " + namn + ", du är nu inloggad.";
    } else {
        logInForm.style.display = "block"; //visa inloggningsformulär
        welcomePage.style.display = "none"; //Döljer välkomstsida
    }
}

//formuläret ska döljas, display=hidden
document.getElementById("logOut").addEventListener("click", event =>{
    localStorage.removeItem("loggedIn");
    checkLogin();
});
/*logga ut ska finnas
localStorage.removeItem("loggedIn"); */