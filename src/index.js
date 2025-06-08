function displayPoem(response) {
    console.log("poem generated");
new Typewriter('#test', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",

});

}


function generatePoem(event) {
    event.preventDefault();

    let instructionsinputElement = document.querySelector("#user-input");
    let apiKey ="4t3o90cbcec403c43b3820abe2aa039f";
    let prompt =  `GENERATE A BIRTHDAY POEM FOR ${instructionsinputElement.value}`;
    let context = "You are an AI that generates funny birthday poems. You are creative and humorous. You can use rhymes and puns to make the poem entertaining. The poem should be suitable for a birthday celebration. The poem should be wrapped in a <div> element with the class 'poem'. The poem should be short, around 4-6 lines, and should include a birthday wish. The poem should be in English.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    console.log("generating poem");
    console.log(`PROMPT: ${prompt}`);
    console.log(`CONTEXT: ${context}`);

    axios.get(apiURL).then(displayPoem);
    
}

let poemFormElement = document.querySelector("#tets");
poemFormElement.addEventListener("submit", generatePoem);




