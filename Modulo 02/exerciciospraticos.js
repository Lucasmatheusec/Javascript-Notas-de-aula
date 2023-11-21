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


// === Array ===
let colors = ['Red', 'Green', "Blue"]
console.log(colors)

let ingredientes = [
    'Agua',
    'leite',
    'ovos',
    'trigo',
    'fermento',
];
ingredientes.push('óleo de motor') //Push é um função para adicionar items em um array.
ingredientes.pop(); // Para remover o ultimo item do array
ingredientes.shift(); //Para remover o primeiro item do array.


console.log(ingredientes)

console.log(`Total de ingredientes ${ingredientes.length}`)

 //Exercício de array

let carros = ['BMW', ' Ferrari', ' Mercedes'];
let x = 1;
console.log('1. ' + carros[x])

carros[1] = ' Audi'
console.log('2. Lista com Audi: ' + carros)

carros.push(' Volvo')
console.log('3. Lista com Volvo:' + carros)

console.log('4. Total de itens no array: ' + carros.length)

let personagem = {                      //Objetos tem Propriedade
    nome: 'lucas',
    idade: 25,
    pais: 'Brasil',
    caracteristicas: {
        forca: 5,
        magia: 10,
        stamina: 3,
        belezura: 100,
    },
    olhos: ['Preto', 'Azul'],
}
console.log(personagem.nome);
console.log(`O personagem ${personagem.nome} tem ${personagem.idade} anos e mora no ${personagem.pais}.`);

console.log(personagem.caracteristicas.belezura);
console.log(personagem.olhos[1]);

personagem.caracteristicas.forca += 15;
console.log(personagem.caracteristicas.forca);

personagem.olhos.push('verde');
console.log(personagem.olhos);


let avatar = {
    nome: 'lucas',
    idade: 25,
    carros: [
        {modelo: 'Porsch', color: 'black'},
        {modelo: 'Ferrari', color: 'DarkGreen'},
    ]
}
avatar.carros[1].modelo
console.log(avatar.carros[0].modelo)

let avatar = {
    name: 'lucas',
    lastName: 'Matheus',
    idade: 25,
    nameComplete: function() {
        return this.name + ' ' + this.lastName + ', ' + this.idade;
        // return `${this.name} ${this.lastName}`;
    }
}
console.log(avatar.name + ' ' + avatar.lastName);
console.log(avatar.nameComplete()); //Chamando a função como se fosse global.
 
//Atenção! nunca usar uma function anônima dentro do objeto porque ela perde o 'this'.
//  () => {}    Função anônima.

//   === loop For === 

 for (let n = 0; n < 10; n++) {
    console.log(n);
 }
*/
let cores = [
    {nome: 'preto', qt: 10},
    {nome:'azul', qt: 5},
    {nome:'vermelho', qt: 25},
];
cores.push('green');


for (let n = 0; n < cores.length; n++) {
    console.log(cores[n]);
}

for (let i in cores) {
    cores[i].nome = cores[i].nome.toUpperCase();
    console.log(cores)
}

for (let cor of cores) {
    console.log(`Nome: ${cor.nome} - ${cor.qt}`) // Assim que acesso o nome do objeto
                          // Dentro do Array
}