const range = document.getElementById('range');
const container = document.querySelector('.container');
const colorChoicePallete = document.querySelector("#color-choice");
const colorChoiceButtons = document.querySelectorAll('.color-selector');
const resetButton = document.querySelector('.reset');

const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

function createGrid(number) {
    
    for(let i = 1; i <= number * number; i++) {
        console.log(range);
        
        const grid = document.createElement('div');    
        grid.classList.add('grid');
        container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
        container.insertAdjacentElement('beforeend', grid);
        resetGrid()
}   
var grids = container.querySelectorAll('div');
    grids.forEach(grid => grid.addEventListener('mouseenter', colorChoiceGrid));
}
createGrid(32);

function gridSize() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    createGrid(range.value);
}


function colorChoiceGrid() {
    switch(color) {
        case "black":
            this.style.backgroundColor = '#000000';
        break;
        case "white":
            this.style.backgroundColor = '#ffffff';
            break;
        case "random":
            this.style.backgroundColor = randColor();
            break;
        default:
            this.style.backgroundColor = color;
            break;
    }

}

function changeColor(event) {
    switch (event.target.dataset.color) { 
        case 'random':
            color = 'random';
            break;  
        case 'white':
            color = 'white';
            break;
        default:
            color = 'black';
            break;
    } 
}

function userColorSelection(event) {
    color = event.target.value;
}

function resetGrid() {
    var grids = container.querySelectorAll('.grid');
    grids.forEach(grid => grid.style.backgroundColor = '#ffffff');
}

range.addEventListener('mouseup', gridSize);
colorChoiceButtons.forEach(colorChoiceButton => colorChoiceButton.addEventListener('click', changeColor));
colorChoicePallete.addEventListener('change', userColorSelection, false);
colorChoicePallete.addEventListener('input', userColorSelection, false);
resetButton.addEventListener('click', resetGrid);