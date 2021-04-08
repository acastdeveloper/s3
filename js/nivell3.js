// HTML OBJECTS
const keyNumH = document.getElementsByClassName("coln");
const keyOpeH = document.getElementsByClassName("ope");
const keyDecH = document.getElementById("deci");
const extraScreenH = document.getElementById("extrapantalla");
const screenH = document.getElementById("pantalla");
const subScreenH = document.getElementById("subpantalla");
const operH = document.getElementById("oper");
const ecuH = document.getElementById("equ");
const cleanH = document.getElementById("clean");
const backH = document.getElementById("backspace");
const invH = document.getElementById("inv");

// TEMPORARY MEMORY PLACES
let mem1 = 0;
let mem2 = 0;

//write on screenH after process, or not, that
function write(that) {
screenH.innerHTML = that;

    if (that.length <= 10) {
        screenH.innerHTML = that;
    }
    else {
        let mostrar = Number(that).toExponential(10);
        screenH.innerHTML = mostrar;
    }
}

//write on subScreenH after process, or not, that
function write2(that) {
    subScreenH.innerHTML = that;
}

// Annotate function
function annotate(what) {
    let screenVal = mem1;

    if (screenVal == "0") {
        mem1 = what;
    } else {
        mem1 = screenVal + what;
    }
    write(mem1);
}

// Adding dot function
function addDot() {
    let screenVal = mem1;
    /* Avaluates content of screenH when this function is invoked */
    if (screenVal.indexOf(".") == -1) {
        /* Only if it doesn't exist a dot inside the string ... */
        mem1 = screenVal + ".";
        /* ... will add a dot at the end */
    }
    write(mem1);
}

// Preserve 1st annotation inside subScreenH
function preservOpe(opP) {
    let screenVal = mem1;
    /* Avaluates content of screenH when this function is invoked */
    mem2 = mem1;
    mem1 = "0";
    write2(mem2);
    write(mem1);

    /* Reset screenH content */
    operH.innerHTML = opP;
    /* Annotates also operator inside operH */
}

// CALCULATOR
function calculadora(operacio, a, b) {
    let r = 0;

    switch (operacio) {
        case "+":
            r = Number(a) + Number(b);
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
    let a = mem2;
    let b = mem1;
    /* It avaluates all the content keeped inside tags and asign to these variables */

    screenH.innerHTML = calculadora(o, a, b);
    /* Invokes to calculadora function and it writes inside screenH */
    subScreenH.innerHTML = "0";
    operH.innerHTML = "";
    /* It resets content of subScreenH and operH */
}

function reset() {
    screenH.innerHTML = "0";
    subScreenH.innerHTML = "0";
    mem1 = 0;
    mem2 = 0;
    operH.innerHTML = "";
    /* It resets everything to default values  */
}

function invSign() {
    mem1=(-1*mem1-0).toString().replace(",",".");
    write(mem1);
    /* It toggles sign of screenH annotation */
}

function backdel() {
    /* It deletes last character inside screenH unless it rests only one. In that case it resets to 0 */
    if (mem1.length <= 1) {
        mem1="0";
    } else {
        mem1 = mem1.substring(0, mem1.length - 1);
    }
    write(mem1);
}

/*
 * *************************************************************
 * ADDEVENT LISTENERS, TO AVOID INTRUSIVE Javascript inside HTML
 * *************************************************************
 */


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

/* To invert sign */
invH.addEventListener("click", function () {
    invSign();
});

/* To delete last character */
backH.addEventListener("click", function () {
    backdel();
});
