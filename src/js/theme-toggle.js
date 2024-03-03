const html = document.querySelector('html')
const themeBt = document.querySelector('.theme-toggle')
const iconeTema = document.querySelector('.icon-theme')

themeBt.addEventListener('click', () => {
    html.classList.toggle('dark-mode')
    iconeTema.classList.toggle('fa-moon')
    iconeTema.classList.toggle('fa-sun')    
})