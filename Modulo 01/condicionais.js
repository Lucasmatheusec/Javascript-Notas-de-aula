/*
let idade = 60;

if (idade > 17) {
    console.log(`Você tem ${idade} anos, portanto é maior de idade`)
} else {
    console.log(`Você tem apenas ${idade}, ainda é menor de idade`)
}


// === Condição dentro de condição
if (idade < 18) {
    console.log("Você é criança")
} else if (idade >= 18 && idade < 60) {
    console.log('Você é adulto')
}else if (idade >= 60) {
    console.log("Você é idoso")
}

//=== Exercícios ===
let x = 10;
let y = 5;
console.log(x > y)

let w = "10";
let z = 10;
console.log(w === z)

let a = 10;
let b = 5;
console.log(x != y)

let carne = 46;

if (carne < 46) {
    console.log(`Tá barato R$ ${carne}, compra Logo!`)
} else {
    console.log(`Compra não, R$ ${carne} é um roubo!`)
}

// === Condicional Ternário ==

let isMember = true;
let shipping = isMember ? 2 : 10;

console.log("Frete: ", shipping)
console.log(isMember ? "Você é membro" : "Você não é membro")
*/

let profession = "fiscal"

switch(profession) {
    case 'fiscal':
        console.log("Uniforme Verde")
        break;
    case 'policial':
        console.log("Uniforme Azul")
        break;
    case 'bombeiro':
        console.log("Uniforme Vermelho")
        break;
    default: 
        console.log("Uniforme Preto")
        break;
}