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