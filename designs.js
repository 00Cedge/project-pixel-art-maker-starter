// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
// makeGrid()

// function makeGrid() {

// }

const sizePicker = document.getElementById('sizePicker');
const displaySize = document.getElementById('displaySize');

function submitSize(event) {
    event.preventDefault();

    var y = document.getElementById("inputHeight").value;
    var x = document.getElementById("inputWidth").value;

    displaySize.textContent = `Canvas size = ${y} high x ${x} wide`;
}



sizePicker.addEventListener('submit', submitSize);
