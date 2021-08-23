const menu = document.getElementById("menu")
const list = document.getElementById("list")
const background = document.querySelector(".background")

const roofs = document.getElementById("roofs")
const contacts = document.getElementById("contacts")
const slider = document.getElementById("slider")

const errorName = document.getElementById("error-input")
const errorPhone = document.getElementById("error-input1")
const inputName = document.getElementById("username")
const inputPhone = document.getElementById("phone")
const buttonSubmit = document.getElementById("submit")

const roofsLink = document.querySelectorAll(".roofsLink")
const contactsLink = document.querySelectorAll(".contactsLink")
const sliderLink = document.querySelectorAll(".sliderLink")

const formButton = document.querySelector(".form1__button")
const introButton = document.querySelector(".intro__button")
const scroll = document.querySelector(".scroll")

window.onscroll = () => {
    if (window.pageYOffset > 600) {
    scroll.classList.remove("hidden")
    } else {
    scroll.classList.add("hidden")
    }
}

function handleMenu() {
    list.classList.toggle("hidden")
    background.classList.toggle("hidden")
}

menu.addEventListener('click', handleMenu)
background.addEventListener('click', handleMenu)

roofsLink[0].addEventListener('click', toRoofs)
roofsLink[1].addEventListener('click', toRoofs)
contactsLink[0].addEventListener('click', toContacts)
contactsLink[1].addEventListener('click', toContacts)
sliderLink[0].addEventListener('click', toSlider)
sliderLink[1].addEventListener('click', toSlider)

function toRoofs () {
    window.scrollTo({
        top: roofs.offsetTop,
        behavior: 'smooth'
    })
}

function toContacts () {
    window.scrollTo({
        top: contacts.offsetTop,
        behavior: 'smooth'
    })
}

function toSlider () {
    window.scrollTo({
        top: slider.offsetTop,
        behavior: 'smooth'
    })
}

function scrollToTop () {
    window.scrollBy({
        top: -document.documentElement.scrollHeight,
        behavior: 'smooth'
    })
}

function checkName(){
    const isNameValid = inputName.value.length > 3 && inputName.value.length < 25 && inputName.value.trim() !== '';

    if (!isNameValid) {
        errorName.classList.remove('hidden')
    } else {
        errorName.classList.add('hidden')
    }
}

function checkPhone(){
    const phoneRegEx = /([0-9_.-]{10,19})/g

    const isPhoneValid = inputPhone.value.length > 10 && phoneRegEx.test(inputPhone.value) && inputPhone.value.trim() !== '';

    if (!isPhoneValid) {
        errorPhone.classList.remove('hidden')
    } else {
        errorPhone.classList.add('hidden')
    }
    
}

inputName.addEventListener('blur', checkName)
inputPhone.addEventListener('blur', checkPhone)

function submitForm(evt){
    const isNameValid = inputName.value.length > 3 && inputName.value.length < 25 && inputName.value.trim() !== '';

    const phoneRegEx = /([0-9_.-]{10,19})/g

    const isPhoneValid = inputPhone.value.length > 10 && phoneRegEx.test(inputPhone.value) && inputPhone.value.trim() !== '';

    const isFormValid = isNameValid && isPhoneValid;

    if (!isFormValid) {
        evt.preventDefault()
        checkName()
        checkPhone()
    }

}

buttonSubmit.addEventListener('click', submitForm)


scroll.addEventListener('click', scrollToTop)
introButton.addEventListener('click', toContacts)
formButton.addEventListener('click', toContacts)

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
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

const reviews = new Swiper('.reviews-cont', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true


});


