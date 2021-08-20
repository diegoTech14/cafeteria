let textBoxes = document.querySelectorAll(".cook-information");

function showScrollTargets(){

    let scrollTopValue = document.documentElement.scrollTop;
    
    for (let elementIndex = 0; elementIndex < textBoxes.length; elementIndex++){
        
        let heightAnimatedElement = textBoxes[elementIndex].offsetTop;
        
        console.log(scrollTopValue);
        
        if(heightAnimatedElement - 500 < scrollTopValue){
            textBoxes[elementIndex].style.opacity = 1;
            textBoxes[elementIndex].style.top = 0;
        }
    }
}

window.addEventListener('scroll', showScrollTargets);