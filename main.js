
const container = document.querySelector(".container-div");

let gridSizeNum = 256

function gridGenerator (amount) { 

for ( let i=0; i < amount; i++) { 

const div_child = document.createElement("div"); 
div_child.textContent = " ";
container.appendChild(div_child);
div_child.style.border = "thick solid black"; 
div_child.style.padding = "1.72%";
div_child.style.flex = "1 1 auto min-width: 0;";          
div_child.style.aspectRatio = "1 / 1";      

div_child.addEventListener("mouseover", () => { div_child.style.backgroundColor = "black";})

}
}

gridGenerator(gridSizeNum)

let input = document.querySelector("#amount_input")

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {

    while (container.hasChildNodes()) {
    container.removeChild(container.firstChild); }

    const value = input.value;
    gridGenerator(value*value);

  }
});

