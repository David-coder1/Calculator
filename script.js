const display = document.getElementById("display")

function showOnDisplay(input) {
    display.value += input;

}


function calculate() {
    display.value = eval(display.value)
}