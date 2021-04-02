// Numeric keys
const keyNum = document.getElementsByClassName("coln");
// Operator keys
const keyOpe = document.getElementsByClassName("ope");
// Decimal key
const keyDec = document.getElementById("deci");
// Screen html object
let screenObj = document.getElementById("pantalla");
let subScreenObj = document.getElementById("subpantalla");
let operObj = document.getElementById("oper");
let ecuObj = document.getElementById("equ");
let cleanObj = document.getElementById("clean");
let backObj = document.getElementById("backspace");
let invObj = document.getElementById("inv");
// Annotate function
function annotate(what) {
    let screenVal = screenObj.innerHTML;

    if (screenVal === "0") {
        screenObj.innerHTML = what;
    } else {
        screenObj.innerHTML = screenVal + what;
    }
}

// Adding dot
function addDot() {
    let screenVal = screenObj.innerHTML;
    if (screenVal.indexOf(".") == -1) {
        console.log("No hi ha .");
        screenObj.innerHTML = screenVal + ".";
    }
}

// Preserve 1st annotation
function preservAnot(opP) {
    console.log("hooo");
    let screenVal = screenObj.innerHTML;
    subScreenObj.innerHTML = screenVal;
    screenObj.innerHTML = 0;
    operObj.innerHTML = opP;
}


// CALCULADORA

function calculadora(operacio, a, b) {
    let r = 0;

    switch (operacio) {
        case "+":
            r = parseInt(a + b);
            break;
        case "-":
            r = a - b;
            break;
        case "*":
            r = a * b;
            break;
        case "/":
            r = a / b;
            break;

        default:
            break;
    }

    return r;
}

function resultat() {
    let o = operObj.innerHTML;
    let a = Number(subScreenObj.innerHTML);
    let b = Number(screenObj.innerHTML);

    screenObj.innerHTML = calculadora(o, a, b);
    subScreenObj.innerHTML = "";
    operObj.innerHTML = "";
}

function reset() {
    screenObj.innerHTML = "0";
    subScreenObj.innerHTML = "";
    operObj.innerHTML = "";
}

function backdel() {
    if (screenObj.innerHTML.length <= 1) {
        screenObj.innerHTML = "0";
    } else {
        screenObj.innerHTML = screenObj.innerHTML.substring(0, screenObj.innerHTML.length - 1);
    }
}


function invSign() {
    screenObj.innerHTML=-1*screenObj.innerHTML;
}



// ADDEVENT LISTENERS

for (let i = 0; i < keyNum.length; i++) {
    keyNum[i].addEventListener("click", function () {
        annotate(keyNum[i].innerHTML);
    });
}

keyDec.addEventListener("click", function () {
    addDot();
});

for (let i = 0; i < keyOpe.length; i++) {
    keyOpe[i].addEventListener("click", function () {
        preservAnot(keyOpe[i].innerHTML);
    });
}

ecuObj.addEventListener("click", function () {
    resultat();
});

cleanObj.addEventListener("click", function () {
    reset();
});

backObj.addEventListener("click", function () {
    backdel();
});

invObj.addEventListener("click", function () {
    invSign();
});
