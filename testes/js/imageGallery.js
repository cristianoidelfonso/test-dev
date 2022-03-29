/**
 * Uma galeria de imagens é um conjunto de imagens com botões de remoção correspondentes.
 * 
 * Este é o código HTML de uma galeria com duas imagens:
 * 
 * <div class="image">
 *  <img src="https://goo.gl/kjzfbE" alt="First">
 *  <button class="remove">X</button>
 * </div>
 * <div class="image">
 *  <img src="https://goo.gl/d2JncW" alt="Second">
 *  <button class="remove">X</button>
 * </div>
 * 
 * 
 * Implemente uma função de configuração que ao receber um evento de click implementa a seguinte lógica:
 *  Quando o botão da classe "remove" é clicado, seu elemento div pai deve ser removido da galeria
 * 
 * 
 * Por exemplo, depois que a primeira imagem da galeria acima foi removida, o código HTML ficaria assim:
 * 
 * <div class="image">
 *  <img src="https://goo.gl/d2JncW" alt="Second">
 *  <button class="remove">X</button>
 * </div>
 * 
 **/  

function setup () {
  // Write your code here.
}

// Example case. 
document.body.innerHTML = `
<div class="image">
  <img src="https://goo.gl/kjzfbE" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://goo.gl/d2JncW" alt="Second">
  <button class="remove">X</button>
</div>`;

setup();

$(".remove").get(0).click();

console.log(document.body.innerHTML);


/**
 * Meu trecho de código para ser incorporado na página da galeria de imagens.
 * 
 **/ 

var buttons = document.getElementsByClassName('remove');

for (var i = 0; i<buttons.length; i++){
  buttons[i].addEventListener('click', removerPai);
}

function removerPai(e){
  e.preventDefault();
  if(confirm("Excluir ?")){
    let btn = this.parentNode;
    btn.parentNode.removeChild(btn);
  }
}