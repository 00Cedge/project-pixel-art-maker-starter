const sizePicker = document.getElementById('sizePicker');
const colorPicker = document.getElementById("colorPicker");
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
// makeGrid()

function makeGrid(width,height) {
    clearGrid()

    for (y = 0; y < height; y++) {
        const oneRow = document.createElement('tr');
        pixelCanvas.appendChild(oneRow);
        for (x = 0; x < width; x++) {
            const onePixel = document.createElement('td');
            const pixelCanvas = document.querySelector('#pixelCanvas');
            oneRow.appendChild(onePixel);
            //create unique ID for each pixel
            uniquieId = (y+"-"+x);
            onePixel.setAttribute('id', uniquieId)
        }
    }
    
 }

function submitSize(event) {
    event.preventDefault();
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;
    makeGrid(width,height);
}

function clearGrid() {
    const pixelCanvas = document.querySelector('#pixelCanvas');
    const pixelCanvasRows = pixelCanvas.childElementCount
    if (pixelCanvasRows > 0) {
        for (y = 0; y < pixelCanvasRows; y++) {

            pixelCanvas.firstElementChild.remove();
        }
    }
}


function setPixelColor() {
    console.log(colorPicker.value);
}


sizePicker.addEventListener('submit', submitSize);
colorPicker.addEventListener('input', setPixelColor);
