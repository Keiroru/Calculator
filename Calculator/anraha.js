var calcOn = false
var second = false

var numberArray = [];
var current;

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
        numberArray += numberInput;
        if (second)
        {
            document.getElementById('mainScreen').innerHTML = "";
        }
        current = numberInput
        document.getElementById('mainScreen').innerHTML += numberInput;
        second = false
};

function getOperator(operatoInput) {
    numberArray += operatoInput;
    document.getElementById('secondaryScreen').innerHTML = numberArray;
    second = true
}

function calculate() {   
    let value = eval(numberArray);
    numberArray = [value];

    document.getElementById('mainScreen').innerHTML = value;
    document.getElementById('secondaryScreen').innerHTML = value;

    value = [];
};

function clearCalculator() {
    document.getElementById('mainScreen').innerHTML = "0";
    document.getElementById('secondaryScreen').innerHTML = ""
    value = [];
    numberArray = [];
}

function ceClearCalculator() {
    document.getElementById('mainScreen').innerHTML = "0";
    value = [];
    numberArray = [];
}

function square() {
    let value = current * current;
    
    document.getElementById('mainScreen').innerHTML = value;
    
    value = [];
}