let principalMenuButton = document.getElementById("show-menu-button");
let coffeesButton = document.getElementById("button-option-one");
let saltyDessertsButton = document.getElementById("button-option-two");
let sweetDessertsButton = document.getElementById("button-option-three");

let principalMenuPage = document.getElementById("pre-menu");
let coffeeMenuPage = document.getElementById("page-one");
let saltyDessertsMenuPage = document.getElementById("page-two");
let sweetDessertsMenuPage = document.getElementById("page-three");
let buttons = document.getElementById("options");

function changePage(pageToShow, pagesToHide){

    for(let index = 0; index < pagesToHide.length; index++){

        if (pagesToHide[index].className.search("show") != -1){
            pagesToHide[index].classList.remove("show");

            // revisar las clases que se agregan y se eliminan.
        
        }
        pagesToHide[index].classList.add("hide");
    }

    pageToShow.classList.add("show");
    buttons.classList.add("show-panel");

}

principalMenuButton.addEventListener('click', function(){
    let pagesToHide = [principalMenuPage, saltyDessertsMenuPage, sweetDessertsMenuPage]
    changePage(coffeeMenuPage, pagesToHide);
});

saltyDessertsButton.addEventListener('click', function(){
    let pagesToHide = [principalMenuPage, coffeeMenuPage, sweetDessertsMenuPage];
    changePage(saltyDessertsMenuPage, pagesToHide);
});

sweetDessertsButton.addEventListener('click', function(){
    let pagesToHide = [principalMenuPage, coffeeMenuPage, saltyDessertsMenuPage];
    changePage(sweetDessertsMenuPage, pagesToHide);
});

coffeesButton.addEventListener('click', function(){
    let pagesToHide = [principalMenuPage, saltyDessertsMenuPage, sweetDessertsMenuPage]
    changePage(coffeeMenuPage, pagesToHide);
});


