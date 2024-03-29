document.querySelector('.slide1').addEventListener('click', () => count = 1)
document.querySelector('.slide2').addEventListener('click', () => count = 2)
document.querySelector('.slide3').addEventListener('click', () => count = 3)
document.querySelector('.slide4').addEventListener('click', () => count = 4)
let count = 1
document.getElementById('radio1').checked = true

setInterval( function(){
    nextImage();
}, 9000)

function nextImage(){
    count ++
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}