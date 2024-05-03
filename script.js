document.getElementById("display").value = result;

function showOnDisplay(input) {
    display.value += input;

}


function calculate() {
    display.value = eval(display.value)
}