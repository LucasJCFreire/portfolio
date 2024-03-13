const html = document.querySelector('html')
const themeBt = document.querySelector('.theme-toggle')
const iconeTema = document.querySelector('.icon-theme')

themeBt.addEventListener('click', () => {
    html.classList.toggle('dark-mode')
    iconeTema.classList.toggle('icon-moon')
    iconeTema.classList.toggle('icon-sun')    
})