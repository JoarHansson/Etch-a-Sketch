const gridContainer = document.querySelector("#gridContainer");

// const numInput = Number(window.prompt("Type a number", ""));
const numInput = 50;

for (i = 0; i < numInput ** 2; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
}

const containerWidth = 600;
gridContainer.style.width = `${containerWidth}px`;
gridContainer.style.gridTemplateColumns = `repeat(${numInput}, ${containerWidth/numInput}px [test])`;
gridContainer.style.gridTemplateRows = `repeat(${numInput}, ${containerWidth/numInput}px [test])`;


gridContainer.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("square")) {
        let randomNumber1 = Math.floor(Math.random() * 255);
        let randomNumber2 = Math.floor(Math.random() * 255);
        let randomNumber3 = Math.floor(Math.random() * 255);
        event.target.style.backgroundColor = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;
    }
});


const numberSlider = document.getElementById("numberSlider");
const textForSlider1 = document.getElementById("textForSlider1");
const textForSlider2 = document.getElementById("textForSlider2");
textForSlider1.innerHTML = numberSlider.value;
textForSlider2.innerHTML = numberSlider.value;

numberSlider.oninput = function() {
    textForSlider1.innerHTML = this.value;
    textForSlider2.innerHTML = this.value;
}