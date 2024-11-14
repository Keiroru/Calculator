var calcOn = false
var second = false
var first = true

var numberArray = [];
const keyArray = ["0","1","2","3","4","5","6","7","8","9"];
const operatorArray = ["+","-","*","/"];
const otherArray = ["Backspace","Enter","Delete"];

document.addEventListener("keydown", function(pressedKey) {
    console.log(pressedKey)
    keyArray.forEach(item => {
        if (pressedKey.key == keyArray[item]) {
            getNumber(keyArray[item]);
        }
        else if (pressedKey.key == operatorArray[item]) {
            getOperator(operatorArray[item]);
        }
        else if (pressedKey.key == otherArray[item]) {
            if (pressedKey.key == "Backspace") {
                ceClearCalculator();
            }
            else if (pressedKey.key == "Enter") {
                calculate();
            }
            else if (pressedKey.key == "Delete") {
                clearCalculator();
            }
        }
    });
  });

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

function plusMinus() {

    if (first == false) {
        let asd = numberArray.splice(0, 1)
        let dsa = eval(numberArray * (-1))
        document.getElementById('mainScreen').innerHTML = dsa;
        numberArray.push(asd,dsa)
    }
    else if (first == true) {
        let stringArray = numberArray.join('')
        let dsa = eval(stringArray * (-1))
        document.getElementById('mainScreen').innerHTML = dsa;
        numberArray.push(dsa)
    }

}
