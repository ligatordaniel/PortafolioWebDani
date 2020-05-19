const btnSwitch1 = document.getElementById('customSwitch1');
const navbar = document.getElementById('miNavbar');
const masterhead = document.getElementById('masterhead');
const textoBienvenido = document.getElementById('textoBienvenido');
const btnIdioma = document.getElementById('btnIdioma');
const sobreMi = document.getElementById('sobreMi');
const habilidades = document.getElementById('habilidades');
const proyectos = document.getElementById('proyectos');
const contacto = document.getElementById('contacto');
const footer = document.getElementById('myFooter');
const cajaProyectos1 = document.getElementById('cajaProyectos1');
const cajaProyectos2 = document.getElementById('cajaProyectos2');
const cajaProyectos3 = document.getElementById('cajaProyectos3');
const cajaProyectos4 = document.getElementById('cajaProyectos4');
const cajaProyectos5 = document.getElementById('cajaProyectos5');
const cajaProyectos6 = document.getElementById('cajaProyectos6');


btnSwitch1.addEventListener('click', () => {
  navbar.classList.toggle('modoNocheNegro')
  cambiarImgBienvenido()
  textoBienvenido.classList.toggle('modoNocheTextoGris')
  btnIdioma.classList.toggle('btn-outline-dark')
  sobreMi.classList.toggle('modoNocheNegro')
  habilidades.classList.toggle('modoNocheGris')
  proyectos.classList.toggle('modoNocheGris')
  contacto.classList.toggle('modoNocheGris')
  footer.classList.toggle('modoNocheNegro')
  cajaProyectos1.classList.toggle('modoNocheNegro')
  cajaProyectos2.classList.toggle('modoNocheNegro')
  cajaProyectos3.classList.toggle('modoNocheNegro')
  cajaProyectos4.classList.toggle('modoNocheNegro')
  cajaProyectos5.classList.toggle('modoNocheNegro')
  cajaProyectos6.classList.toggle('modoNocheNegro')

});

const cambiarImgBienvenido = () => {
  if (masterhead.classList.contains('wallpaperDia')){
    masterhead.classList.remove('wallpaperDia');
    masterhead.classList.add('wallpaperNoche');
  }
  else if (masterhead.classList.contains('wallpaperNoche')){
    masterhead.classList.remove('wallpaperNoche');
    masterhead.classList.add('wallpaperDia');
  }
};




/*
  for (let i = 0; i<el.length; i++) {
    el[i].classList.remove("modoDiaPurpura");
    el[i].classList.add("modoNocheNegro");
  }
*/






/*
const switch1 = document.getElementsById('customSwitch1');

switch1.addEventListener('click', () => {

  el.forEach(element => {
    element.classList.replace('modoDiaPurpura', 'modoNocheNegro');
  });

})

*/










/*
const switch1 = document.getElementById('customSwitch1');
const presetacion = document.getElementById('sobreMi');


switch1.addEventListener('click', () => {
  if (presetacion.classList.contains('modoDiaPurpura')){
    presetacion.classList.remove('modoDiaPurpura');
    presetacion.classList.add('modoNocheNegro');
  }
  else if (presetacion.classList.contains('modoNocheNegro')){
    presetacion.classList.remove('modoNocheNegro');
    presetacion.classList.add('modoDiaPurpura');
  }
  else if (navbar1.classList.contains('modoNocheDia')){
    navbar1.classList.remove('modoNocheNegro');
    navbar1.classList.add('modoDiaPurpura');
  }
  else if (presetacion.classList.contains('modoNocheNegro')){
    navbar1.classList.remove('modoNocheNegro');
    navbar1.classList.add('modoDiaPurpura');
  }

})
*/
/*

const switch1 = document.getElementById('customSwitch1');
const presetacion = document.getElementById('sobreMi');


switch1.addEventListener('click', () => {
  if (presetacion.classList.contains('modoDiaPurpura')){
    presetacion.classList.remove('modoDiaPurpura');
    presetacion.classList.add('modoNocheNegro');
  }
  else{
    presetacion.classList.remove('modoNocheNegro');
    presetacion.classList.add('modoDiaPurpura');
  }
})


document.getElementById("MyElement").className += " MyClass";



next_btn.addEventListener('click', () => {

    if (sibling == null) {
        sibling = first_slide;
    }
}

  if (sibling.classList.contains('slider__slide')) {
      active_slide.classList.remove('active');
      sibling.classList.add('active');
  }
});
prev_btn.addEventListener('click', () => {
  const active_slide = document.querySelector('.slider__slide.active');
  let sibling = active_slide.previousElementSibling;
  if (sibling == null || !sibling.classList.contains('slider__slide')) {
      sibling = last_slide;
      console.log(sibling);
      
  }
  

  if (sibling.classList.contains('slider__slide')) {
      active_slide.classList.remove('active');
      sibling.classList.add('active');
  }
});

*/