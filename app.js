let toggled = false;



function  mobileMenuClicked() {
    
    if (!toggled) {
        document.getElementById("mobile-open-close").innerHTML = '<i class="fa-solid fa-xmark fontos"></i>';
        
        document.getElementById('main-nav').classList.add('mobile');
        
        toggled = true;

    } else {
        document.getElementById("mobile-open-close").innerHTML = '<i class="fa-solid fa-bars"></i>';
        document.getElementById('main-nav').classList.remove('mobile');

        toggled = false;
        
    }
    
}

let query = window.matchMedia("(min-width: 800px)");



function removeMobileClass(query) {
    if (query.matches & toggled) {
        mobileMenuClicked()
    }
}

query.addListener(removeMobileClass)
removeMobileClass(query);


const liElements = document.querySelectorAll('ul > li > a');

liElements.forEach((link) => {
    link.addEventListener('click', (done) => {
        document.querySelector('[style]').removeAttribute("style")
        done.target.style = "color: red"
    })
})

let arrayCurrents = [`<img src="images/shoeslide4.svg" class="shoe-images" alt="Shoe Image 4">`
, `<img src="images/shoeslide2.svg" class="shoe-images" alt="Shoe Image 4">`,
`<img src="images/shoeslide3.svg" class="shoe-images" alt="Shoe Image 4">`]


let count = 0;


function counting () {
    count++;
    if (count == 3) {
        count = 0;
    }
    
    document.getElementById('current-img').innerHTML = arrayCurrents[count];
    document.querySelector('.slider-current').classList.remove("slider-current")
    
    document.getElementById(String(count)).classList.add("slider-current")

}

let countLeft = 2

function countingLeft () {
    countLeft--;
    if (countLeft == -1) {
        countLeft = 2;
    }


    document.getElementById('current-img').innerHTML = arrayCurrents[countLeft];
    document.querySelector('.slider-current').classList.remove("slider-current")
    
    document.getElementById(String(countLeft)).classList.add("slider-current")
}