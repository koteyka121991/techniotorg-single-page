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



const tabsBtn = document.querySelectorAll('.tab-description'),
    tabsItem = document.querySelectorAll('.tab-item');

tabsBtn.forEach(oneTabClick);


function oneTabClick(item) {
    item.addEventListener('click', () => {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);
        if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach((item) => {
                item.classList.remove('active');
            })
            tabsItem.forEach((item) => {
                item.classList.remove('active');
            })
        }
        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    });
}
document.querySelector('.tab-description').click();

// header menu scroll



const headerListScroll = document.querySelector('.header__list'),
item = document.querySelector ('.header__contacts-block');

window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    if (scrollPos > 0) {
        headerListScroll.classList.add('active');
        if(window.innerWidth <= 800) {
            headerListScroll.classList.remove('active');
            item.insertBefore(item,headerListScroll.children[2])
        }
    } else {
        headerListScroll.classList.remove('active');
    }
});
