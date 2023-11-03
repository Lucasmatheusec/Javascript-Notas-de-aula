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