const menuOpen = document.querySelector("#menu-icon");

menuOpen.addEventListener("click", () =>{
    document.body.classList.toggle("show-mobile-menu");
})

const closeConsentement = document.querySelector("#consentement-button");

closeConsentement.addEventListener("click", () =>{
    document.body.classList.add("close-consentement");
    document.body.classList.remove("open-consentement");
})

const openConsentement = document.querySelector("#parametre-de-cookies");

openConsentement.addEventListener("click", (event) =>{
    event.preventDefault();
    document.body.classList.add("open-consentement");
    document.body.classList.remove("close-consentement");
})

const refuserConsentement = document.querySelector("#consentement-preference");

refuserConsentement.addEventListener("click", () =>{
    event.preventDefault();
    closeConsentement.click();
})