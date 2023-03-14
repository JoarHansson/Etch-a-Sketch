const gridContainer = document.querySelector("#gridContainer");

const numInput = Number(window.prompt("Type a number", ""));

for (i = 0; i < numInput ** 2; i++) {
    const square = document.createElement("div");
    square.classList.add("square")
    gridContainer.appendChild(square)
}

gridContainer.style.gridTemplateColumns = `repeat(${numInput}, 15px [test])`;
gridContainer.style.gridTemplateRows = `repeat(${numInput}, 15px [test])`;
