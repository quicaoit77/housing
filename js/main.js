// handle slider
document.addEventListener('DOMContentLoaded', e => {
    $(document).ready(function(){
        $('.home__slider').slick({
            autoplay: true,
            autoplaySpeed: 2500,
            dots: true,
            arrows: true,
            slidesToScroll: 1,
            slidesToShow: 1,
            fade: true,
        });
    });
})        


const homeTextHeadings = [
    'LOREM IPSUM AMET', 
    'DOLOR SIT HATANT MORBI', 
    'QUIS AUTEM VE EUM IURE', 
    'VOLUPTATE VELIT ESSE'
];

const homeTextSubHeadings = [
    'Lorem ipsum dolor sit, consectetur adiping elit.',
    'Quis autem vel eum iure reprehenderit quivol.',
    'Excepteur sint ocecat cupid proident, deserunt.',
    'Quis autem velreprehenderit qui ea eumiure'
]

const homeTextH1 = document.querySelector('.home__text h1')
const homeTextP = document.querySelector('.home__text p')
const homeImgs = document.querySelectorAll('#home img')
var homeIndex


setInterval(() => {
    homeImgs.forEach(homeImg => {
        if (homeImg.classList.contains('slick-current')) {
            homeIndex = homeImg.getAttribute("data-slick-index")
            homeTextH1.innerHTML = homeTextHeadings[homeIndex]
            homeTextP.innerHTML = homeTextSubHeadings[homeIndex]
        }
    })
}, 100);



// auto counter
$('.number').counterUp()




// handle navigation on click
const navs = document.querySelectorAll('header ul li a')
navs.forEach(nav => {
    nav.addEventListener('click', e => {
        for (var i = 0; i < navs.length; ++i) {
            if (navs[i].classList.contains('active')) {
                navs[i].classList.remove('active')
            }
        }
        nav.classList.add('active')
    })
})



// handle showing picture modal
const modal = document.querySelector('.modal')
const closes = document.querySelectorAll('.close')
const videoModal = document.querySelector('.videoModal')
const blurScreen = document.querySelector('.blur-screen')


function showPicture() {
    modal.classList.add('active')
    blurScreen.classList.add('active')

}


closes.forEach(close => {
    close.addEventListener('click', e => {
        modal.classList.remove('active')
        videoModal.classList.remove('active')
        blurScreen.classList.remove('active')
    })
})



// handle play video modal
function playVideo() {
    videoModal.classList.add('active')
    blurScreen.classList.add('active')
}



// .arrowUp - scroll to top
const arrowUp = document.querySelector('.arrowUp')
const showArrow = 500
document.addEventListener('scroll', e => {
    window.scrollY > showArrow ? arrowUp.classList.add('active') : arrowUp.classList.remove('active')
})

arrowUp.addEventListener('click', e => {
    window.scrollTo({top: 0})
})



// handle vertical box
const verticalBoxNext = document.querySelector('#vertical-box .next')
const verticalBox = document.querySelector('#vertical-box')
const hiddenBox =  document.querySelector('#vertical-box .hidden')
const hideContent =  document.querySelector('.hide-content')
const showContent =  document.querySelector('.show-content')



showContent.addEventListener('click', e => {
    verticalBox.classList.add('active')
    hiddenBox.classList.add('active')
    showContent.classList.add('unactive')
    hideContent.classList.add('active')
})

hideContent.addEventListener('click', e => {
    verticalBox.classList.remove('active')
    hiddenBox.classList.remove('active')
    showContent.classList.remove('unactive')
    hideContent.classList.remove('active')
})



// handle hamburger
const hamburger = document.querySelector('.hamburger')
const line1 = document.querySelector('.line-1')
const line2 = document.querySelector('.line-2')
const line3 = document.querySelector('.line-3')
const lis = document.querySelectorAll('header ul li')


const nav = document.querySelector('header nav')
const ul = document.querySelector('header nav ul')
hamburger.addEventListener('click', e => {
    nav.classList.toggle('active')
    ul.classList.toggle('active')
    line1.classList.toggle('close')
    line2.classList.toggle('close')
    line3.classList.toggle('close')
})

lis.forEach(li => {
    li.addEventListener('click', e => {
    nav.classList.remove('active')
    ul.classList.remove('active')
    line1.classList.remove('close')
    line2.classList.remove('close')
    line3.classList.remove('close')
    navs.forEach(nav => {
        nav.classList.remove('active')
    })
    })
})