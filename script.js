//Inloggningsuppgifter:
const namn = "Kalle";
const lösenord = "qwe123";

let formRef; //referens för smidigare hänvisning till formuläret

//Funktion för att hämta formulärdata
function init(){
    formRef = document.querySelector("form");
    console.log(formRef);
    formRef.addEventListener("submit", event =>{
        event.preventDefault();
        getLoginData();
    })
}
window.onload = init;

 //hämta inloggningsinformation
function getLoginData(){
    let user = formRef.elements.user.value;
    console.log(user);
    let pwd = formRef.elements.pwd.value;
    console.log(pwd);

    //ifsats här som sedan uppdaterar localstorage
    if (user === namn || pwd === lösenord){
        localStorage.setItem("loggedIn", "true"); //nyckel och värde("true" är en string, inte en boolean)
    } else {
        alert("Felaktiga inloggningsuppgifter");
    }
}

console.log(localStorage);

//Specifikt välkomstmeddelande ska finnas

//formuläret ska döljas, display=hidden

//logga ut ska finnas