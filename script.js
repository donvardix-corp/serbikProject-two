/*console.log('hello')

let qwe=document.getElementById('first-element')
qwe.innerHTML='text'
console.log(qwe)*/

let offset = 0; //смещение от левого края
const sliderLine= document.querySelector('.slider-line')
document.querySelector('.button-two').addEventListener('click', function(){
    offset = offset + 220;
    if (offset > 660) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
})

document.querySelector('.button').addEventListener('click', function(){
    offset = offset - 220;
    if (offset < 0) {
        offset = 660;
    }
    sliderLine.style.left = -offset + 'px';
})