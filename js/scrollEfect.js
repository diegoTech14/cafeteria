// recolecta todos los elementos que tienen clase .animated-element
let animatedElements = document.querySelectorAll(".menu-text");

function showScroll(){
    // detecta el valor de la cantidad de Scroll que ha bajado
    let scrollTopValue = document.documentElement.scrollTop;

    for (var element = 0; element < animatedElements.length; element++) {
        let heightAnimatedElement = animatedElements[element].offsetTop;
        
        if(heightAnimatedElement - 100 < scrollTopValue) {
            //probar añadiendole una clase
            animatedElements[element].style.opacity = 1;
            animatedElements[element].style.top = 0;
        }
    }

}

window.addEventListener('scroll', showScroll);