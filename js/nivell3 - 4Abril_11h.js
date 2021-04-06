// HTML OBJECTS
const keyNumH = document.getElementsByClassName("coln");
const keyOpeH = document.getElementsByClassName("ope");
const keyDecH = document.getElementById("deci");
const screenH = document.getElementById("pantalla");
const subScreenH = document.getElementById("subpantalla");
const operH = document.getElementById("oper");
const ecuH = document.getElementById("equ");
const cleanH = document.getElementById("clean");
const backH = document.getElementById("backspace");
const invH = document.getElementById("inv");

// Temporary numeric annotation, as a number
let memScreen = 0;

// Function write()
function write(that) {
    screenH.innerHTML = that;
}




// Annotate function
function annotate(what) {
    /*Avaluates HTML content of screenH when is invoked*/
    let screenVal = screenH.innerHTML;

    if (screenVal === "0") {
        memScreen = what;
        /* To avoid that a non decimal number starts with 0,
        content is replaced by what */
    } else {
        memScreen = screenVal + what;
        /* otherwise "what" parameter is chained at the end */
    }
    write(memScreen);
}

// Adding dot function
function addDot() {
    let screenVal = screenH.innerHTML;
    /* Avaluates content of screenH when this function is invoked */
    if (screenVal.indexOf(".") == -1) {
        /* Only if it doesn't exist a dot inside the string ... */
        memScreen = screenVal + ".";
        screenH.innerHTML = memScreen;
        // screenH.innerHTML = screenVal + ".";
        /* ... will add a dot at the end */
    }
}

// Preserve 1st annotation inside subScreenH
function preservOpe(opP) {
    let screenVal = screenH.innerHTML;
    /* Avaluates content of screenH when this function is invoked */
    subScreenH.innerHTML = screenVal;
    /* Makes a copy inside subScreenH */
    screenH.innerHTML = 0;
    /* Reset screenH content */
    operH.innerHTML = opP;
    /* Annotates also operator inside operH */
}

// CALCULATOR
function calculadora(operacio, a, b) {
    let r = 0;

    switch (operacio) {
        case "+":
            r = a + b;
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

// It reads all the annotations and invoke to calculadora()
function resultat() {
    let o = operH.innerHTML;
    let a = Number(subScreenH.innerHTML);
    let b = Number(screenH.innerHTML);
    /* It avaluates all the content keeped inside tags and asign to these variables */

    screenH.innerHTML = calculadora(o, a, b);
    /* Invokes to calculadora function and it writes inside screenH */
    subScreenH.innerHTML = "";
    operH.innerHTML = "";
    /* It resets content of subScreenH and operH */
}

function reset() {
    screenH.innerHTML = "0";
    subScreenH.innerHTML = "";
    operH.innerHTML = "";
    /* It resets everything to default values  */
}

function backdel() {
    /* It deletes last character inside screenH unless it rests only one. In that case it resets to 0 */
    if (screenH.innerHTML.length <= 1) {
        screenH.innerHTML = "0";
    } else {
        screenH.innerHTML = screenH.innerHTML.substring(0, screenH.innerHTML.length - 1);
    }
}

function invSign() {
    screenH.innerHTML = -1 * screenH.innerHTML;
    /* It toggles sign of screenH annotation */
}

// ADDEVENT LISTENERS, TO AVOID INTRUSIVE Javascript inside HTML

/* Iterates all numbers' keys to invoke its own specifical annotation */
for (let i = 0; i < keyNumH.length; i++) {
    keyNumH[i].addEventListener("click", function () {
        annotate(keyNumH[i].innerHTML);
    });
}

/* Add a decimal dot at the end of annotation */
keyDecH.addEventListener("click", function () {
    addDot();
});

/* Iterates by all operators keys and asigns its own
eventlistener with its own invocation to preservOpe to annotate operation
*/
for (let i = 0; i < keyOpeH.length; i++) {
    keyOpeH[i].addEventListener("click", function () {
        preservOpe(keyOpeH[i].innerHTML);
    });
}

/* To get the result */
ecuH.addEventListener("click", function () {
    resultat();
});

/* To reset everything  */
cleanH.addEventListener("click", function () {
    reset();
});

/* To delete last character */
backH.addEventListener("click", function () {
    backdel();
});

/* To invert sign */
invH.addEventListener("click", function () {
    invSign();
});
