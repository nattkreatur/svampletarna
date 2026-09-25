//Inloggningsuppgifter:
const namn = "Kalle";
const lösenord = "qwe123";

//för smidigare referens av html-element
let welcomePage = document.getElementById("welcomePage");
let logInForm = document.getElementById("logInForm");
let error = document.getElementById("error");
let formRef; 

function init(){
    //Hämtar inloggningsformuläret och kör funktionen "event", men bara om användaren trycker på knappen submit.
    formRef = document.querySelector("form");
    formRef.addEventListener("submit", event =>{
        event.preventDefault(); //stoppar htmls vanliga formulärhantering. JS sköter hanteringen istället
        getLoginData();
        checkLogin(); 
    });

    //Logga ut knapp
    document.getElementById("logOut").addEventListener("click", event =>{
    localStorage.clear(); //tömmer localstorage
    checkLogin();
    });
    
    checkLogin(); //kollar om användaren redan är inloggad när sidan laddas/refreshas
}

//Sköter inloggning av användare samt felmeddelande vid misslyckad inloggning
function getLoginData(){
    let user = formRef.elements.user.value;
    let pwd = formRef.elements.pwd.value;
    
    if (user === namn && pwd === lösenord){
        //Uppdaterar status om användaren loggar in.
        localStorage.setItem("loggedIn", "true"); //nyckel och värde("true" är en string, inte en boolean)
        error.style.display = "none"; //tar bort felmeddelande vid inloggning
    } else {
        error.textContent = "Felaktiga inloggningsuppgifter";
        error.style.display = "block"; //visar felmeddelande, detta krävs om man har loggat ut och försöker logga in igen
    }
}

//System för att se om användare är inloggad
function checkLogin(){
    let loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn === "true"){
        logInForm.style.display = "none"; //döljer inloggningsformulär
        welcomePage.style.display = "block"; //Visar välkomstsida

        //Skapar välkomstmeddelande på välkomstsidan som styrs av checkLogin
        document.getElementById("welcomeMessage").textContent = 
        "Välkommen " + namn + ", du är nu inloggad.";
        
    } else {
        logInForm.style.display = "block"; //visa inloggningsformulär
        welcomePage.style.display = "none"; //Döljer välkomstsida
    }
}
init(); //startar initfunktionen