let imagemTradicional = document.querySelector('#tradicional');
let imagemGergelim = document.querySelector('#gergelim');
let imagemAustraliano = document.querySelector('#australiano');
let imagemCarne = document.querySelector('#carne');
let imagemFrango = document.querySelector('#frango');
let imagemVegetariano = document.querySelector('#vegetariano');
let imagemSalmao = document.querySelector('#salmao');
let imagemMussarela = document.querySelector('#mussarela');
let imagemCheddar = document.querySelector('#cheddar');
let imagemSalada = document.querySelector('#salada');
let imagemBacon = document.querySelector('#bacon');
let imagemMaionese = document.querySelector('#maionese');
let imagemFeijao = document.querySelector('#feijao');

let flagTradicional = 0;
let flagGergelim = 0;
let flagAustraliano = 0;
let flagCarne = 0;
let flagFrango = 0;
let flagVegetariano = 0;
let flagSalmao = 0;
let flagMussarela = 0;
let flagCheddar = 0;
let flagSalada = 0;
let flagBacon = 0;
let flagMaionese = 0;
let flagFeijao = 0;

let modal = document.querySelector('.modal');
let somaCompra = document.querySelector('#somaCompra');

let soma = 0;

function selecionarTradicional(){
if (flagTradicional == 0) {
  flagTradicional = 1;
  imagemTradicional.style.opacity = '0.4';
  imagemTradicional.style.border = '2px solid green';
} else {
    flagTradicional = 0
    imagemTradicional.style.opacity = '1';
    imagemTradicional.style.border = '0';
  }
}


function selecionarGergelim(){
if (flagGergelim == 0) {
  flagGergelim = 1;
  imagemGergelim.style.opacity = '0.4';
  imagemGergelim.style.border = '2px solid green';
} else {
  flagGergelim = 0
  imagemGergelim.style.opacity = '1';
  imagemGergelim.style.border = '0';
}
}


function selecionarAustraliano(){
if (flagAustraliano == 0) {
  flagAustraliano = 1;
  imagemAustraliano.style.opacity = '0.4';
  imagemAustraliano.style.border = '2px solid green';
} else {
  flagAustraliano = 0
  imagemAustraliano.style.opacity = '1';
  imagemAustraliano.style.border = '0';
}
}

function selecionarCarne(){
if (flagCarne == 0) {
  flagCarne = 1;
  imagemCarne.style.opacity = '0.4';
  imagemCarne.style.border = '2px solid green';
  soma = soma + 20;
} else {
  flagCarne = 0
  imagemCarne.style.opacity = '1';
  imagemCarne.style.border = '0';
  soma = soma - 20;
}
}

function selecionarFrango(){
if (flagFrango == 0) {
  flagFrango = 1;
  imagemFrango.style.opacity = '0.4';
  imagemFrango.style.border = '2px solid green';
  soma = soma + 15;
} else {
  flagFrango = 0
  imagemFrango.style.opacity = '1';
  imagemFrango.style.border = '0';
  soma = soma - 15;
}
}

function selecionarVegetariano(){
if (flagVegetariano == 0) {
  flagVegetariano = 1;
  imagemVegetariano.style.opacity = '0.4';
  imagemVegetariano.style.border = '2px solid green';
  soma = soma + 18;
} else {
  flagVegetariano = 0
  imagemVegetariano.style.opacity = '1';
  imagemVegetariano.style.border = '0';
  soma = soma - 18;
}
}

function selecionarSalmao(){
if (flagSalmao == 0) {
  flagSalmao = 1;
  imagemSalmao.style.opacity = '0.4';
  imagemSalmao.style.border = '2px solid green';
  soma = soma + 35;
} else {
  flagSalmao = 0
  imagemSalmao.style.opacity = '1';
  imagemSalmao.style.border = '0';
  soma = soma - 35;
}
}

function selecionarMussarela(){
if (flagMussarela == 0) {
  flagMussarela = 1;
  imagemMussarela.style.opacity = '0.4';
  imagemMussarela.style.border = '2px solid green';
  soma = soma + 3;
} else {
  flagMussarela = 0
  imagemMussarela.style.opacity = '1';
  imagemMussarela.style.border = '0';
  soma = soma - 3;
}
}

function selecionarCheddar(){
if (flagCheddar == 0) {
  flagCheddar = 1;
  imagemCheddar.style.opacity = '0.4';
  imagemCheddar.style.border = '2px solid green';
  soma = soma + 5;
} else {
  flagCheddar = 0
  imagemCheddar.style.opacity = '1';
  imagemCheddar.style.border = '0';
  soma = soma - 5;
}
}

function selecionarSalada(){
if (flagSalada == 0) {
  flagSalada = 1;
  imagemSalada.style.opacity = '0.4';
  imagemSalada.style.border = '2px solid green';
  soma = soma + 2;
} else {
  flagSalada = 0
  imagemSalada.style.opacity = '1';
  imagemSalada.style.border = '0';
  soma = soma - 2;
}
}

function selecionarBacon(){
if (flagBacon == 0) {
  flagBacon = 1;
  imagemBacon.style.opacity = '0.4';
  imagemBacon.style.border = '2px solid green';
  soma = soma + 4;
} else {
  flagBacon = 0
  imagemBacon.style.opacity = '1';
  imagemBacon.style.border = '0';
  soma = soma - 4;
}
}

function selecionarMaionese(){
if (flagMaionese == 0) {
  flagMaionese = 1;
  imagemMaionese.style.opacity = '0.4';
  imagemMaionese.style.border = '2px solid green';
  soma = soma + 3;
} else {
  flagMaionese = 0
  imagemMaionese.style.opacity = '1';
  imagemMaionese.style.border = '0';
  soma = soma - 3;
}
}

function selecionarFeijao(){
if (flagFeijao == 0) {
  flagFeijao = 1;
  imagemFeijao.style.opacity = '0.4';
  imagemFeijao.style.border = '2px solid green';
  soma = soma + 7;
} else {
  flagFeijao = 0
  imagemFeijao.style.opacity = '1';
  imagemFeijao.style.border = '0';
  soma = soma - 7;
}
}

function abrirModal(){
  modal.style.display = 'block';
  somaCompra.innerHTML = "Valor total do pedido: R$ " + soma;
}

function ocultarModal(){
  modal.style.display = 'none';
}
