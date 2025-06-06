function generatePoem(event) {
    event.eventDefalt();
    

    let poemElement = document.querySelector("#poem")

    poemElement.innerHTML = "If your hope is strong";



}
let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);




