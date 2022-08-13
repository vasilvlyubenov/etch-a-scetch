const range = document.getElementById('range');
const container = document.querySelector('.container');

function createGrid(number) {
    
    for(let i = 1; i <= number * number; i++) {
        console.log(range);
        
        const grid = document.createElement('div');    
        grid.classList.add('grid');
        container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
        container.insertAdjacentElement('beforeend', grid);
}   
}


function pixelSize() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    createGrid(range.value);
}

range.addEventListener('mouseup', pixelSize);