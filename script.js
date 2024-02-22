$(document).ready(function(){

   const baseImagens = {
      todas:['cidade.jpg', 'animal.jpg', 'natureza.jpg'],
      animais:['animal.jpg', 'animal2.jpg', 'animal3.jpg'],
      natureza:['natureza.jpg', 'natureza2.jpg', 'natureza3.jpg'],
      cidade:['cidade.jpg', 'cidade2.jpg', 'cidade3.jpg'],
   }
    
function carregaImagens(categoria){
   const imagens = baseImagens[categoria];
   const boxImegens = $('body').find('.box-imagens');
   boxImegens.empty();
   imagens.forEach(img => {
      console.log(img);
      boxImegens.append('<div class="imagem-item"><img src="imagens/'+img+'" /></div>')

   });
   
}

   $('.botao-categoria').on('click', function(){
      $('body').find('.botao-categoria').removeClass('active');
      $(this).addClass('active');
      const categoria = $(this).data('categoria');
      carregaImagens(categoria);
});

});