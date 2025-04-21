
let number1 = "";
let number2 = "";
let operation = "";
let result = "";

//To print the numbers in input field
function getNumber(value) {

    if (number1 == "" && operation == "")
        number1 = value;
    else if (number1 != "" && operation == "")
        number1 = number1 + value;
    else if (number2 == "" && operation != "")
        number2 = value;
    else if (number2 != "" && operation != "")
        number2 = number2 + value;

    document.getElementById("display").value = number1 + operation + number2;
}

//To print the operation in input field
function getOperation(expression) {

    operation = expression;
    if (expression == "x²" || expression == "x³") {

        findResult();
        operation = "";
    }
    else {

        document.getElementById("display").value = number1 + operation + number2;
    }
}

//To reset input field
function resetAll() {

    number1 = number2 = result = operation = "";
    document.getElementById("display").value = "";
}

//To perform the backspace operation
function removeNumber() {

    document.getElementById("display").value = document.getElementById("display").value.slice(0, -1);

    if (operation == "x²" || operation == "x³")
        number1 = number1.slice(0, -1);
    else if (number1 != "" && operation == "")
        number1 = number1.slice(0, -1);
    else if (number2 != "" && operation != "")
        number2 = number2.slice(0, -1);
}

//To get the result
function findResult() {

    switch (operation) {
        case '+':
            result = Number(number1) + Number(number2);
            break;
        case '-':
            result = Number(number1) - Number(number2);
            break;
        case '×':
            result = Number(number1) * Number(number2);
            break;
        case '÷':
            result = Number(number1) / Number(number2);
            break;
        case 'x²':
            result = Number(number1) * Number(number1);
            break;
        case 'x³':
            result = Number(number1) * Number(number1) * Number(number1);
            break;
    }

    document.getElementById("display").value = result;
    number1 = result;
    number2 = "";

}
