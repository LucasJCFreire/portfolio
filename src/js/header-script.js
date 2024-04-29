/*  ==================== Script Menu hamburger ==================== */
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')

    const expanded = navMenu.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';    
    navMenu.setAttribute('aria-expanded', expanded)
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
    navMenu.setAttribute('aria-expanded', false)
}))

/*  ==================== Script Theme Button ==================== */
const html = document.querySelector('html')
const btnTheme = document.querySelector('.btn-theme')
const iconTheme = document.querySelector('.icon-theme')

btnTheme.addEventListener('click', () => {
    html.classList.toggle('dark-mode')
    iconTheme.classList.toggle('icon-sun')
    iconTheme.classList.toggle('icon-moon')
    iconTheme.classList.add('animated')
    
    setTimeout ( () => {
        iconTheme.classList.remove('animated')
    }, 500)
})

/*  ==================== Script Fixed Menu ==================== */
window.onscroll = function() {
        if (document.documentElement.scrollTop > 100) {
            document.querySelector('header nav').classList.add('fixed')
        } else {
            document.querySelector('header nav').classList.remove('fixed')
        }
    
};