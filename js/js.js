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
    if (position < (slides.length - 4) * 210) {
        position += 210
    } else {
        position = 0
    }

    galeryRow.style.right = position + "px"
}

const prewGaleryRow = () => {
    if (position < (slides.length - 4) * 210) {
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
    mobileWrapper = document.querySelector('.mobile-wrapper')
headerInfoBlockItem = document.querySelector('.info-line');


menuBurger.addEventListener('click', () => {
    menuBurgerSpan.classList.toggle('active');
    menuList.classList.toggle('animate');
    mobileWrapper.classList.toggle('animate');
    headerInfoBlockItem.classList.toggle('active')
    parentList.insertAdjacentElement("afterend", headerInfoBlockItem);

});




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
    headerMenuScroll = document.querySelector('.header__menu-mini');
let logoScroll = document.querySelector('.logo-scroll'),
    parentList = document.querySelector('.parent-list'),
    parentHeader = document.querySelector('.parent-header'),
    parenReturnDesctop = document.querySelector('.menu-burger');


window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    if (scrollPos > 0) {
        headerMenuScroll.classList.add('active');
        parentList.insertAdjacentElement("afterend", logoScroll);
        if (window.innerWidth <= 800) {
            headerMenuScroll.classList.remove('active');
            parenReturnDesctop.insertAdjacentElement("afterend", logoScroll);
            // parentHeader.insertAdjacentElement("afterbegin", logoScroll);
            //


        }
    } else {
        headerMenuScroll.classList.remove('active');
        parentHeader.insertAdjacentElement("afterbegin", logoScroll);
        // // parenReturnDesctop.insertAdjacentElement("afterend", logoScroll);

    }
});



window.addEventListener('resize', () => {

    if (window.innerWidth > 800) {
        parentHeader.insertAdjacentElement("beforeend", headerInfoBlockItem);
    }

})


// let parent = document.querySelector('.parent');
// let parentMain = document.querySelector('.header__info-block');
// let before = document.querySelector('.before');
// let after = document.querySelector('.after');


// Вставляем новый элемент перед первым дочерним элементом