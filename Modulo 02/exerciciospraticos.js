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


// == Exercício ==
function calcPct(x,y) {
    return((y / x) * 100);
}
let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);


function calcularImovel(metragem, quartos) {
    let m2 = 3000;
    let preco = 0;
    switch(quartos) {
        case 1:
        default:
            preco = metragem * m2;
            break;
        case 2:
            preco = metragem * (m2 * 1.2);
            break;
        case 3:
            preco = metragem * (m2 * 1.5);
            break;
    }
    return preco;
}
let metragem = 10 * 20;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa ${preco}`)


function validar(usuario, senha) {
  if (usuario === 'pedro' && senha === 123) {
    return true;
  } else {
    return false;
  }
}
let usuario = 'pedro';
let senha = 123;
let validacao = validar(usuario, senha);

if (validacao) {
    console.log('Acesso Liberado!')
} else {
    console.log('Acesso Negado!')
}


// Arrow Function

const somar = (x, y) => {
    return x + y;
}
console.log(somar(10, 5))


// função dentro de função
function addsquares(a, b) {
    const square = (x) => x * x;

    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}
console.log(addsquares(3, 4));
*/

// === Array ===
let colors = ['Red', 'Green', "Blue"]
console.log(colors)