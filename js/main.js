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

openConsentement.click();

const refuserConsentement = document.querySelector("#consentement-preference");

refuserConsentement.addEventListener("click", () =>{
    event.preventDefault();
    closeConsentement.click();
})

const closeConfidentialityPolicy = document.querySelector("#close-confidentiality-policy-icon");
closeConfidentialityPolicy.addEventListener("click", () =>{
    document.body.classList.add("close-confidentiality-policy-action")
    document.body.classList.remove("open-confidentiality-policy-action");
})

const openConfidentialityPolicy = document.querySelector("#politique-de-confidentialite-link");
openConfidentialityPolicy.addEventListener("click", () =>{
    event.preventDefault();
    document.body.classList.remove("close-confidentiality-policy-action");
    document.body.classList.add("open-confidentiality-policy-action")
})

const consultConfidentialityPolicy = document.querySelector("#consult-confidentiality-policy");
consultConfidentialityPolicy.addEventListener("click", () =>{
    event.preventDefault();
    openConfidentialityPolicy.click();
})

closeConfidentialityPolicy.click();