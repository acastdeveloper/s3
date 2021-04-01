function calculadora( operacio, a, b) {
    let r=0;

    switch (operacio) {
        case "suma":
            r= Number(a + b);
            break;
        case "resta":
            r= a - b;
            break;
        case "multiplica":
            r= a * b;
            break;
        case "divideix":
            r= a / b;
            break;

        default:
            break;
    }

    return r;
}




window.addEventListener("load",function(){

    var resultat=calculadora("suma", 40, 50);
    console.log(resultat);
    document.getElementById("res").innerHTML=resultat;
});
