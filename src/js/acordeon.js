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





