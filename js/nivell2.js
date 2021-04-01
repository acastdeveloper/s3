let op = "";
let ia = 0;
let ib = 0;


function calculadora(operacio, a, b) {
    let r = 0;

    switch (operacio) {
        case "suma":
            r = parseInt(a+b);
            break;
        case "resta":
            r = a - b;
            break;
        case "multiplica":
            r = a * b;
            break;
        case "divideix":
            r = a / b;
            break;

        default:
            break;
    }

    return r;
}

document.getElementById("operacio").addEventListener("change", function () {
    document.getElementById("inputa").style.display = "block";
});

document.getElementById("a").addEventListener("change", function () {
    document.getElementById("inputb").style.display = "block";
});

document.getElementById("b").addEventListener("change", function () {
    op = document.getElementById("operacio").value;
    console.log(op);
    ia = Number(document.getElementById("a").value);
    console.log(ia);
    ib = Number(document.getElementById("b").value);
    console.log(ib);

    if(op=="divideix" && ib==0){

        document.getElementById("output").innerHTML="<strong>Resultat:</strong> INFINIT (No es pot dividir per zero)";
    }
    else {
        document.getElementById("output").innerHTML="<strong>Resultat:</strong>"+calculadora(op,ia,ib);
    }

});
