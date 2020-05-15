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