//$(document).ready(function () {
    
     

$('#customSwitch1').on('click',function(){
    $('body').toggleClass('nocheGris');
    $('nav').toggleClass('nocheNegra');
    $('.presentacion').toggleClass('bg-dark');  //cambiar imagen este esta malo           // reparar
    //$('#presentacion').toggleClass('bg-dark');
    $('footer').toggleClass('nocheNegra');
    CambiarEstilo()                              //llama la funcion de anoche
    
});

function CambiarEstilo() {                     //crea el cambio de imagen nocturno
    if ($('#masterhead').hasClass('pixelDia')){
      $('#masterhead').addClass('pixelNoche');
      $('#masterhead').removeClass('pixelDia');
    }else {
      $('#masterhead').removeClass('pixelNoche');
      $('#masterhead').addClass('pixelDia');
    }
}


//$('#customSwitch1').on('click',function(){
  //  $('#masterhead').removeClass('pixelDia');
    //$('#masterhead').addClass('pixelNoche');

//$('#masterhead').toggleClass('pixelNoche'); // tiene clase css y manda por sobre el JS :/ reparar

//});


 
//});