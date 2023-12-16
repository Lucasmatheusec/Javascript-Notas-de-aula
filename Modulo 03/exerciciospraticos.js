// === DOM === Document Object Model
/*function clicou() {
    const input = document.querySelector('input');
    if (input.getAttribute('type') == 'text'){
        input.setAttribute('type', 'password');
    } else {
        input.setAttribute('type', 'text');
    }
}


function clicou(){
    const button = document.querySelector('button');
    console.log(button.classList)
    button.classList.remove('azul');
    button.classList.add('nomeDaClasse')
}
*/


function apertou() {
    console.log('Apertou!');
}
function segurou() {
    console.log('Segurou!');
}
function soltou() {
    console.log('Soltou!');
}

const input = document.querySelector('input');
input.addEventListener('keyup', soltou)