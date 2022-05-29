const slides = document.querySelectorAll('.galery-items .item '),
    dots = document.querySelectorAll('.galery-row img'),
    galeryRow = document.querySelector('.galery-row'),
    arrowPrew = document.querySelector('.arrow-prew'),
    arrowNext = document.querySelector('.arrow-next');
let index = 0,
    position = 0;

// функция которая ставит активный слайд, n принимает параметр номер слайда которы станет активный  

const activeSlide = n => {
    for (let slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}
const activeDot = n => {

    for (let dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = (ind) => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
        nextGaleryRow(position);


    } else {
        index++;
        prepareCurrentSlide(index);

    }

}

const prewSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
        prewGaleryRow(position);
    } else {
        index--;
        prepareCurrentSlide(index);

    }

}

const nextGaleryRow = () => {
    if (position < (slides.length - 4) * 200) {
        position += 210
    } else {
        position = 0
    }

    galeryRow.style.right = position + "px"
}

const prewGaleryRow = () => {
    if (position < (slides.length - 4) * 200) {
        position += 210
    } else {
        position = 0
    }

    galeryRow.style.right = position + "px"
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})

arrowNext.addEventListener('click', nextSlide)
arrowPrew.addEventListener('click', prewSlide)


// ______________



// меню бургер 

const menuBurger = document.querySelector('.menu-burger'),
    menuBurgerSpan = document.querySelector('.menu-burger span'),
    menuList = document.querySelector('.header__menu'),
    mobileWrapper = document.querySelector('.mobile-wrapper');

menuBurger.addEventListener('click', () => {
    menuBurgerSpan.classList.toggle('active');
    menuList.classList.toggle('animate');
    mobileWrapper.classList.toggle('animate');
})




// кнопки табов 



const tabTechnicalSpecifications = document.querySelector('.tab-technical-specifications'),
    tabDescription = document.querySelector('.tab-description'),
    specification = document.querySelector('.description'),
    technicalSpecifications = document.querySelector('.technical-specifications');


tabTechnicalSpecifications.addEventListener('click', () => {
    technicalSpecifications.classList.toggle('active');
})

tabDescription.addEventListener('click', () => {
    specification.classList.toggle('active');

})