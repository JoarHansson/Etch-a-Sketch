const gridContainer = document.getElementById("gridContainer");

// create grid items (squares) and append as children to gridContainer
function createSquares(numSquares) {
    // Remove existing squares
    gridContainer.innerHTML = "";
    
    // Create new squares
    for (let i = 0; i < numSquares ** 2; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      gridContainer.appendChild(square);
    }
  
    // Update grid template
    const containerWidth = 600;
    gridContainer.style.width = `${containerWidth}px`;
    gridContainer.style.gridTemplateColumns = 
    `repeat(${numSquares}, ${containerWidth/numSquares}px [col])`;
    gridContainer.style.gridTemplateRows = 
    `repeat(${numSquares}, ${containerWidth/numSquares}px [row])`;
}


const numberSlider = document.getElementById("numberSlider");
const btnSlider = document.getElementById("btnSlider");
const sliderText = document.getElementById("sliderText");

// Call createSquares initially with the slider's initial value
createSquares(numberSlider.value);

// Call createSquares if the user changes the value with the slider
btnSlider.addEventListener("click", () => {
    createSquares(numberSlider.value);
});

numberSlider.addEventListener("input", () => {
    // Update the displayed grid size value
    sliderText.innerHTML = `${numberSlider.value} x ${numberSlider.value}`;
});


const buttons = [
    { id: "btnBlack", class: "btnActive" },
    { id: "btnRandom", class: "btnActive" },
    { id: "btnDarken", class: "btnActive" },
    { id: "btnErase", class: "btnActive" },
];
  
let clickedButtonId = "";

// add and remove class "active" to buttons
buttonContainer.addEventListener("click", (event) => {

    if (event.target.id === "btnBlack" ||
    event.target.id === "btnRandom" ||
    event.target.id === "btnDarken" ||
    event.target.id === "btnErase" ) {

        clickedButtonId = event.target.id;

        buttons.forEach((button) => {
            const btn = document.getElementById(button.id);

            if (event.target.id === button.id) {
                btn.classList.add(button.class);
            } else {
                btn.classList.remove(button.class);
            }
        });
    }
});


// "clear" button sets bg color of all squares to initial value 
const squares = document.getElementsByClassName("square");

btnClear.addEventListener("click", () => {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = "rgba(211, 211, 211, 1)";
    }
});


// mouseover event only works if mousedown is also true 
let isMouseDown = false;

gridContainer.addEventListener("mousedown", () => {
  isMouseDown = true;
});

gridContainer.addEventListener("mouseup", () => {
  isMouseDown = false;
});


// depending on which button is clicked (active), color the squares accordingly
gridContainer.addEventListener("mouseover", (event) => {
    if (isMouseDown && event.target.classList.contains("square")) {

        if (clickedButtonId === "btnBlack") {
            event.target.style.backgroundColor = "rgb(44, 44, 44)";

        } else if (clickedButtonId === "btnRandom") {
            let randomNumber1 = Math.floor(Math.random() * 255);
            let randomNumber2 = Math.floor(Math.random() * 255);
            let randomNumber3 = Math.floor(Math.random() * 255);
            event.target.style.backgroundColor = 
            `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;

        } else if (clickedButtonId === "btnDarken") {
            if (event.target.style.backgroundColor !== `rgb(44, 44, 44)`) {
                const currentOpacity = parseFloat(event.target.style.backgroundColor.split(", ")[3]) || 0;
                const newOpacity = Math.min(currentOpacity + 0.1, 0.99);
                event.target.style.backgroundColor = `rgba(44, 44, 44, ${newOpacity})`;
                } 
                
        } else if (clickedButtonId === "btnErase") {
            event.target.style.backgroundColor = "rgba(211, 211, 211, 1)";
        }  
    }
});