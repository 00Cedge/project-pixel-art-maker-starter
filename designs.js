const sizePicker = document.getElementById('sizePicker');
var uniquieId = '';

function makeGrid(width,height) {
    //Clear Grid & Event listener       
        const pixelCanvas = document.querySelector('#pixelCanvas');
        const pixelCanvasRows = pixelCanvas.childElementCount;
        if (pixelCanvasRows > 0) {
            for (let y = 0; y < pixelCanvasRows; y++) {
                pixelCanvas.firstElementChild.remove();
            }
        }
        document.removeEventListener('click', pixelCanvasListening);
    //Create grid
    for (let y = 0; y < height; y++) {
        const oneRow = document.createElement('tr');
        pixelCanvas.appendChild(oneRow);
        for (let x = 0; x < width; x++) {
            const onePixel = document.createElement('td');
            oneRow.appendChild(onePixel);
            //create unique ID for each pixel
            uniquieId = (y+"-"+x);
            onePixel.setAttribute('id', uniquieId);
        }
    }
    pixelCanvas.addEventListener('mousedown', pixelCanvasListening);
 }

// Listening event for pixel Canvas
function pixelCanvasListening (event) {
    uniquieId = event.target.id;
    addColorByClick(uniquieId);
}

// Apply color to clicked pixel
function addColorByClick() {
    if (uniquieId !== "pixelCanvas") {
        const colorPicker = document.getElementById("colorPicker").value;
        let clickedPixel = document.getElementById(uniquieId);
        clickedPixel.style.backgroundColor = colorPicker;
        console.log(document.getElementById("pixelCanvas").id);
    }
}

function submitSize(event) {
    event.preventDefault();
    let height = document.getElementById("inputHeight").value;
    let width = document.getElementById("inputWidth").value;
    makeGrid(width,height);
}

sizePicker.addEventListener('submit', submitSize);
