/*
function gravidade() {              //Criando a function.
    console.log("A gravidade do planeta é:");
    console.log(9.8);
}

gravidade();        //  Para chamar a function.


// Varáveis dentro das funções.
function somar(n1, n2) {            //Variáveis só existem aqui dentro 
    let resultado = n1 + n2;
    console.log('Resultado:' + resultado);
    return `${n1} ${n2}`;
}

let completo = somar(10, 15);
console.log('Soma completa: ' + completo)
*/

// == Exercício ==
function calcPct(x,y) {
    return((y / x) * 100);
}
let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);