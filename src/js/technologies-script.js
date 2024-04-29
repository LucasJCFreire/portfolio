let seletorAcordeon = document.querySelectorAll('.acordeon-fixed-box')
let seletorConteudo = document.querySelectorAll('.acordeon-box-click')

seletorAcordeon.forEach(function (item) {
    item.addEventListener('click', () => {
        let conteudoAcordeon = item.nextElementSibling
        let alturaNecessaria = conteudoAcordeon.scrollHeight * 2

        const conteudoAbertoAtual = document.querySelector('.abaConteudoAberto')
        const abaClicada = item.classList.contains('abaConteudoAberto')

        if (conteudoAbertoAtual) {
            if (abaClicada) { // Se aba clicada já esta aberta, deve fechar.
                conteudoAbertoAtual.classList.remove('abaConteudoAberto')
            } else {
                conteudoAbertoAtual.classList.remove('abaConteudoAberto')
                item.classList.add('abaConteudoAberto')
            }
        } else {
            item.classList.add('abaConteudoAberto')
        }

        seletorConteudo.forEach(function (element) {
            element.style.height = 0 + 'px'
        })

        if (conteudoAcordeon.clientHeight === 0) {
            conteudoAcordeon.style.height = alturaNecessaria + 'px'
        } else {
            conteudoAcordeon.style.height = 0 + 'px'

        }
    })
})

// Soft skills

const sliderTop = document.querySelector('.slider-top')
const sliderBottom = document.querySelector('.slider-bottom')
const leftButton = document.querySelector('.icon-left')
const rightButton = document.querySelector('.icon-right')
const slidesLength = sliderTop.querySelectorAll('div').length
document.querySelector('.slider-main').addEventListener('mouseenter', () => isHovered = true)
document.querySelector('.slider-main').addEventListener('mouseleave', () => isHovered = false)

let activeSlideIndex = 0
sliderTop.style.left = `-${(slidesLength - 1) * 100}%`


leftButton.addEventListener('click', () => changeSlide('left'))
rightButton.addEventListener('click', () => changeSlide('right'))

function changeSlide(direction) {

    switch (direction) {
        case 'left':
            activeSlideIndex++
            if (activeSlideIndex > slidesLength - 1) {
                activeSlideIndex = 0
            }
            break
        case 'right':
            activeSlideIndex--
            if (activeSlideIndex < 0) {
                activeSlideIndex = slidesLength - 1
            }
            break
    }

    sliderTop.style.transform=`translateX(${activeSlideIndex * 100}%)`
    sliderBottom.style.transform=`translateX(-${activeSlideIndex * 100}%)`
}

let isHovered = false

setInterval(function () {
    if (!isHovered) {
        nextImage();
    }
}, 5000)

function nextImage() {
    sliderTop.style.transform=`translateX(${activeSlideIndex * 100}%)`
    sliderBottom.style.transform=`translateX(-${activeSlideIndex * 100}%)`
    activeSlideIndex++
    if (activeSlideIndex > slidesLength - 1) {
        activeSlideIndex = 0;
    }
}