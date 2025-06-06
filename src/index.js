function generatePoem(event) {
    event.preventDefault();
    

new Typewriter('#test', {
  strings: "If your hope is strong, you can do anything.",
  autoStart: true,
  delay: 1,
  cursor: "",

});


}
let poemFormElement = document.querySelector("#tets");
poemFormElement.addEventListener("submit", generatePoem);




