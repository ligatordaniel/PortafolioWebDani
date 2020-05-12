/*modoDiaPurpura {background-color: rgb(106, 107, 201);}
modoDiaBlanco {background-color: rgb(255, 255, 255);}
modoNocheNegro {background-color: rgb(31, 31, 31);}
nocheGris {background-color: rgb(207, 207, 207);}
pixelNoche {background-image: url('https://raw.githubusercontent.com/ligatordaniel/PortafolioWebDani/master/assets/img/wallpaperNoche.png'); //16bit noche}
pixelDia {background-image: url('https://raw.githubusercontent.com/ligatordaniel/PortafolioWebDani/master/assets/img/wallpaper1.png'); //16 bit soleado}
*/


const btnSwitch1 = document.getElementById('customSwitch1');
const navbar = document.getElementById('miNavbar');
const masterhead = document.getElementById('masterhead');
const sobreMi = document.getElementById('sobreMi');
const habilidades = document.getElementById('habilidades');
const proyectos = document.getElementById('proyectos');
const contacto = document.getElementById('contacto');
const footer= document.getElementById('myFooter');


btnSwitch1.addEventListener('click', () => {
  navbar.classList.toggle('modoNocheNegro')
  sobreMi.classList.toggle('modoNocheNegro')
  habilidades.classList.toggle('nocheGris')
  proyectos.classList.toggle('modoNocheNegro')
  contacto.classList.toggle('nocheGris')
  footer.classList.toggle('modoNocheNegro')
  cambiarImagen()

});

let cambiarImagen = () => {
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