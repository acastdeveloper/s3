let op = "";
let ia = 0;
let ib = 0;


function calculadora(operacio, a, b) {
    let r = 0;

    switch (operacio) {
        case "+":
            r = a+b;
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

function resoldre() {
    op = document.getElementById("operacio").value;
    console.log(op);
    ia = Number(document.getElementById("a").value);
    console.log(ia);
    ib = Number(document.getElementById("b").value);
    console.log(ib);

    if(op=="/" && ib==0){
        document.getElementById("output").innerHTML="<strong>Resultat:</strong> INFINIT (No es pot dividir per zero)";
    }
    else {
        document.getElementById("output").innerHTML="<strong>Resultat:</strong>"+calculadora(op,ia,ib);
    }
}

function netejar() {
    document.getElementById("operacio").value="";
    document.getElementById("inputa").style.display="none";
    document.getElementById("a").value="";
    document.getElementById("inputb").style.display="none";
    document.getElementById("b").value="";
    document.getElementById("resultbutton").style.display="none";
    document.getElementById("reset").style.display="none";
    document.getElementById("output").innerHTML="";
    // document.getElementById("output").style.display="none";
}



document.getElementById("operacio").addEventListener("change", function () {
    document.getElementById("inputa").style.display = "block";
    document.getElementById("inputb").style.display = "none";
    document.getElementById("inputa").value="";
    document.getElementById("inputb").value="";
});

document.getElementById("a").addEventListener("input", function () {
    document.getElementById("inputb").style.display = "block";
});

document.getElementById("b").addEventListener("input", function () {
    document.getElementById("resultbutton").style.display="block";
    document.getElementById("reset").style.display="block";
});

document.getElementById("resultbutton").addEventListener("click", function () {
    resoldre();
});

document.getElementById("reset").addEventListener("click", function () {
    netejar();
});
