
let ColourTrue = false;

const container = document.querySelector(".container-div");

document.addEventListener("keydown", () => { 
  ColourTrue = false 
});

document.addEventListener("keyup", () => { 
  ColourTrue = true; 
});


const redColour = document.querySelector(".Colour.Red");
redColour.style.color = "red";
const orangeColour = document.querySelector(".Colour.Orange");
orangeColour.style.color = "orange";
const yellowColour = document.querySelector(".Colour.Yellow");
yellowColour.style.color = "yellow";
const greenColour = document.querySelector(".Colour.Green");
greenColour.style.color = "green";
const blueColour = document.querySelector(".Colour.Blue");
blueColour.style.color = "blue";
const indigoColour = document.querySelector(".Colour.Indigo");
indigoColour.style.color = "indigo";
const eraserColour = document.querySelector(".Eraser")

redColour.addEventListener("click", () => {ColourTrue = true, mainColorVar = "red" });
orangeColour.addEventListener("click", () => { ColourTrue = true, mainColorVar = "orange" });
yellowColour.addEventListener("click", () => {  ColourTrue = true, mainColorVar = "yellow" });
greenColour.addEventListener("click", () => { ColourTrue = true ,mainColorVar = "green" });
blueColour.addEventListener("click", () => { ColourTrue = true ,mainColorVar = "blue" });
indigoColour.addEventListener("click", () => { ColourTrue = true ,mainColorVar = "indigo" });
eraserColour.addEventListener("click", () => { ColourTrue = true , mainColorVar = "white" });

let gridSizeNum = 256

function gridGenerator(amount){ 

for ( let i=0; i < amount; i++) { 
 
const div_child = document.createElement("div"); 
div_child.textContent = " ";
container.appendChild(div_child);

div_child.style.border = "thick solid black";
div_child.style.borderWidth = "2.5px" 
div_child.style.flex = "1 0 auto min-width: 0;";
div_child.style.padding = "1%"

div_child.addEventListener("mouseover", () => { if (ColourTrue === true) { div_child.style.backgroundColor = mainColorVar };})

}}

gridGenerator(gridSizeNum)

let input = document.querySelector("#amount_input")

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && input.value < 1001) {

    while (container.hasChildNodes()) {
    container.removeChild(container.firstChild); }

    const value = input.value;

    gridGenerator(value*value);

  }
});

