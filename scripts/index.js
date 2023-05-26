const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const tabsBtn = document.querySelectorAll('.how__step-btn');
const tabsItem = document.querySelectorAll('.how__rolblock');

tabsBtn.forEach(element => {
  element.addEventListener('click', e => {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(btn => { btn.classList.remove('how__step-btn--active')});
    e.currentTarget.classList.add('how__step-btn--active');

    tabsItem.forEach(element => { element.classList.remove('how__rolblock--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('how__rolblock--active');
  });
});

new Accordion('.accordion-container');

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(el => {
  el.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })
})

const searchOpen = document.querySelector('.header__search');
const searchClosed = document.querySelector('.header__closed-search');
const searchWind = document.querySelector('.header__search-form');

searchOpen.addEventListener('click', () => {
    searchWind.classList.add('header__search-form--active')
    searchClosed.classList.add('header__closed-search--active')
  }
)

searchClosed.addEventListener('click', () => {
    searchWind.classList.toggle('header__search-form--active')
    searchClosed.classList.toggle('header__closed-search--active')
  }
)
