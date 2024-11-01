const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value = display.value + input;
}

function simplify() {
    display.value = eval(display.value);
}

function clearDisplay() {
    display.value = "";
}

function square() {
    simplify();
    display.value = eval(display.value + '*' + display.value);
}

function cube() {
    simplify();
    display.value = eval(display.value + '*' + display.value + '*' + display.value);
}

function backspace() {
    display.value = display.value.slice(0, -1)
}

document.addEventListener('keydown', function(event) {
    if (event.key == "0") { appendToDisplay(event.key); }
    if (event.key == "1") { appendToDisplay(event.key); }
    if (event.key == "2") { appendToDisplay(event.key); }
    if (event.key == "3") { appendToDisplay(event.key); }
    if (event.key == "4") { appendToDisplay(event.key); }
    if (event.key == "5") { appendToDisplay(event.key); }
    if (event.key == "6") { appendToDisplay(event.key); }
    if (event.key == "7") { appendToDisplay(event.key); }
    if (event.key == "8") { appendToDisplay(event.key); }
    if (event.key == "9") { appendToDisplay(event.key); }
    if (event.key == "*") { appendToDisplay(event.key); }
    if (event.key == "x") { appendToDisplay("*"); }
    if (event.key == "/") { appendToDisplay(event.key); }
    if (event.key == ".") { appendToDisplay("."); }
    if (event.key == "+") { appendToDisplay(event.key); }
    if (event.key == "-") { appendToDisplay(event.key); }
    if (event.key == "Enter") { simplify(); }
    if (event.key == "Backspace") { backspace(); }
    if (event.key == "c") { clearDisplay(); }
});