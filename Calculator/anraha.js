var calcOn = false
var second = false

var numberArray = [];
var current;
var currentLen;
var clen;

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
        console.log(numberArray)
        console.log(numberArray)
        if (second)
        {
            document.getElementById('mainScreen').innerHTML = "";
        }
        current = numberInput
        document.getElementById('mainScreen').innerHTML += numberInput;
        second = false
        currentLen += 1;
};

function getOperator(operatorInput) {
    numberArray.push(operatorInput);
    document.getElementById('secondaryScreen').innerHTML = numberArray;
    second = true
    clen = currentLen;
    currentLen = 0;
}

function calculate() {   
    let stringArray = numberArray.join('');
    let value = eval(stringArray);;

    numberArray = [];
    numberArray.push(value);

    console.log(numberArray)

    document.getElementById('mainScreen').innerHTML = value;
    document.getElementById('secondaryScreen').innerHTML = value;

};

function clearCalculator() {
    document.getElementById('mainScreen').innerHTML = "";
    document.getElementById('secondaryScreen').innerHTML = ""
    numberArray = [];
}

function ceClearCalculator() {
    document.getElementById('mainScreen').innerHTML = "";
    console.log(numberArray)
    for (let i = 0; i < clen; i++) {
        numberArray.splice(numberArray.length - 1)
    }
    console.log(numberArray)

}
