function generatePoem(event) {
    event.eventDefalt();
    

    let poemElement = document.querySelector("#poem")


    new Typewriter('#poem', 
        string , "If your hope is strong",
        autoStart , true,
        cursor , "",
        delay , 1,
      )

        


    poemElement.innerHTML = "If your hope is strong";



}
let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);




