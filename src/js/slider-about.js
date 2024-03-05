let btRadio1 = document.querySelector('#radio-1')
let btRadio2 = document.querySelector("#radio-2")
let btRadio3 = document.querySelector("#radio-3")
let txAbout1 = document.querySelector('.about-text-1')
let txAbout2 = document.querySelector('.about-text-2')
let txAbout3 = document.querySelector('.about-text-3')
let txAbout4 = document.querySelector('.about-text-4')

btRadio1.addEventListener('click', () => {
    txAbout1.classList.add ('toogle-ON')
    txAbout2.classList.remove ('toogle-ON')
    txAbout3.classList.remove ('toogle-ON')
    txAbout4.classList.remove ('toogle-ON')

})

btRadio2.addEventListener('click', () => {
    txAbout1.classList.remove ('toogle-ON')
    txAbout2.classList.add ('toogle-ON')
    txAbout3.classList.remove ('toogle-ON')
    txAbout4.classList.remove ('toogle-ON')

})

btRadio3.addEventListener('click', () => {
    txAbout1.classList.remove ('toogle-ON')
    txAbout2.classList.remove ('toogle-ON')
    txAbout3.classList.add ('toogle-ON')
    txAbout4.classList.add ('toogle-ON')
})