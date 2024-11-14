var calcOn = false
var second = false
var first = true

var numberArray = [];

function showCalculator() {
    if (calcOn == false) {
        document.getElementById('calc').style.display = "contents";
        calcOn = true;
    }
    else {
        document.getElementById('calc').style.display = "none";
        calcOn = false;
    }
}

function getNumber(numberInput) {
    numberArray.push(numberInput);
    if (second) {
        document.getElementById('mainScreen').innerHTML = "";
    }
    document.getElementById('mainScreen').innerHTML += numberInput;
    second = false
};

function getOperator(operatorInput) {
    numberArray.push(operatorInput);
    let num = numberArray.join('')
    numberArray = []
    numberArray.push(num)
    document.getElementById('secondaryScreen').innerHTML = numberArray;
    second = true
    first = false
}

function calculate() {
    let stringArray = numberArray.join('');
    let value = eval(stringArray);;

    numberArray = [];
    numberArray.push(value);


    document.getElementById('mainScreen').innerHTML = value;
    document.getElementById('secondaryScreen').innerHTML = value;

    first = true;
};

function clearCalculator() {
    document.getElementById('mainScreen').innerHTML = "";
    document.getElementById('secondaryScreen').innerHTML = ""
    numberArray = [];
    first = true;
    second = false;
}

function ceClearCalculator() {
    document.getElementById('mainScreen').innerHTML = "";
    numberArray = numberArray.splice(0, 1)
}

function square() {
    let index = numberArray.length;
    let toBeSquared = []

    if (first == false) {
        while (index != 1) {
            toBeSquared.push(numberArray.splice(1, 1));
            index = numberArray.length
        }
    }
    else if (first == true) {
        while (index != 0) {
            toBeSquared.push(numberArray.splice(0, 1));
            index = numberArray.length
        }
    }

let number = toBeSquared.join('');
let squared = number * number;

toBeSquared = [];
document.getElementById('mainScreen').innerHTML = squared;
numberArray.push(squared)
}
