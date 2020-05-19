window.addEventListener('scroll' , function(){

    animacioneBienvenido();
    animacioneLatia();
    animacioneLatio();
    animacioneFotoPerfil();
    animacioneCurriculum();
    
})

const animacioneBienvenido = () => {
    //console.log(window.pageYOffset);
    let ubicacionY = window.pageYOffset;
    let el = document.getElementById('bienvenidoFlotante');
    if(ubicacionY > 300){
        el.classList.remove('@keyframes','efectoFlotar')
    }else{
        el.classList.add('@keyframes','efectoFlotar')
    }
}

const animacioneLatia = () => {
    //console.log(window.pageYOffset);
    let ubicacionY = window.pageYOffset;
    let el = document.getElementById('latiaPokemon');
    if(ubicacionY > 500){
        el.classList.remove('@keyframes','animacionLatia')
    }else{
        el.classList.add('@keyframes','animacionLatia')
    }
}
const animacioneLatio = () => {
    //console.log(window.pageYOffset);
    let ubicacionY = window.pageYOffset;
    let el = document.getElementById('latioPokemon');
    if(ubicacionY > 500){
        el.classList.remove('@keyframes','animacionLatio')
    }else{
        el.classList.add('@keyframes','animacionLatio')
    }
}

const animacioneFotoPerfil = () => {
    //console.log(window.pageYOffset);
    let ubicacionY = window.pageYOffset;
    let el = document.getElementById('fotoPerfil');
    if(ubicacionY > 220 && ubicacionY < 1200){
        el.classList.add('@keyframes','mostrarDerecha')
        el.classList.remove('animadoDerecha')
    }else{
        el.classList.remove('@keyframes','mostrarDerecha')
    }
}

const animacioneCurriculum = () => {
    //console.log(window.pageYOffset);
    let ubicacionY = window.pageYOffset;
    let el = document.getElementById('curriculum');
    if(ubicacionY > 2500){
        el.classList.add('@keyframes','efectoUpDown')
    }else{
        el.classList.remove('@keyframes','efectoUpDown')
    }
}
/*

function animacioneCurriculum() {
    console.log(window.pageYOffset);
    let ubicacionY = window.pageYOffset;
    let el = document.getElementById('curriculum');
    if(ubicacionY > 2500){
        el.classList.add('@keyframes','efectoUpDown')
    }else{
        el.classList.remove('@keyframes','efectoUpDown')
    }
}

*/


/*
function apareceScroll(){
    const html = document.getElementsByTagName('html')[0];
    const elementoAparece = document.getElementsByClassName('animadoDerecha');      

    document.addEventListener('scroll', function(){
        let topVent = html.scrollTop;
        for(let i=0; i < elementoAparece.length; i++){
            let topElementoAparece = elementoAparece[i].offsetTop;
            if(topVent > topElementoAparece -200) {
                elementoAparece[i].classList.add('@keyframes');
                elementoAparece[i].classList.add('mostrarDerecha');
                elementoAparece[i].style.opacity = 1;
            } 
        }
    })
    
}


apareceScroll(); 

*/

/*var intervalID = window.setInterval(miFuncion, 500);

function miFuncion() {
  // Aquí va tu código
}
/*calling the function in window.onload to make sure the HTML is loaded*/
/*
window.onload = () => {
    let latiaPokemon = document.getElementById('latiaPokemon');
    let posX = 90;
    let posY = 70; 
    let t = setInterval(move, 25);
  
    move = () => {
        if(posX <= 0) {
            clearInterval(t);
        }
        else {
            posX -= 1;
            posY -= 1;
            latiaPokemon.style.left = posX+'%';
            latiaPokemon.style.top = posY+'%';
        }
    }
  };
*//*
window.onload = () => {
    let latioPokemon = document.getElementById('latioPokemon');
    let posX = 90;
    let posY = 70; 
    let t = setInterval(move, 25);
  
    move = () => {
        if(posX <= 0) {
            clearInterval(t);
        }
        else {
            posX -= 1;
            posY -= 1;
            latioPokemon.style.left = posX+'%';
            latioPokemon.style.top = posY+'%';
        }
    }
  };
*/

/*
let animado = document.querySelectorAll('.animado');

window.addEventListener('scroll', mostrarScroll);

function mostrarScroll() {
    let scrolltop = document.documentElement.scrollTop;
    for (var i=0; i<animado.length; i++) {
        var alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado > scrolltop){
            animado[i].style.opacity = 1;
            animado[i].classList.add('mostrarArriba');
        }
    }
};
*/