let calcOn = false
function showCalc(){
    if (calcOn == false){
        document.getElementById('calc').style.display = "contents";
        calcOn = true;
    }
    else {
        document.getElementById('calc').style.display = "none";
        calcOn = false;
    }
}