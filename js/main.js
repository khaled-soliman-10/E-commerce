let header = document.querySelector("header");
let btnX = document.querySelector('.btn-x');
let spans = document.querySelectorAll('.btn-x span');
let nav = document.querySelector('.mobile .nav-links');

window.onscroll = ()=>{
    if (window.scrollY >= 100) {
        header.style.overflow = 'hidden'
        header.style.height = "0"
        header.style.padding = "0"
        header.style.position = 'fixed'
    }else {
        header.style.transition = ''
        header.style.height = ""
        header.style.padding = ""
        header.style.position = ''
        header.style.overflow = ''
    }
    if (window.scrollY >= 500) {
        header.classList.add('height')
        header.style.backgroundColor = '#9595958a'
        header.style.transition = '.3s'
        header.style.overflow = ''
    }else {
        header.style.backgroundColor = ""
        header.classList.remove('height')
        // header.style.overflow = 'hidden'
    }
}

btnX.addEventListener("click",()=>{
    nav.classList.toggle('nav-height')
    if (nav.classList.contains('nav-height')) {
        spans[1].style.display = 'none';
        btnX.style.justifyContent = 'center'
        btnX.style.position = 'relative'
        spans[0].style.transform = 'rotate(45deg)'
        spans[0].style.position = 'absolute'
        spans[0].style.top = '50%'
        spans[2].style.transform = 'rotate(-45deg)'
        spans[2].style.position = 'absolute'
        spans[2].style.top = '50%'
    }else {
        spans[1].style.display = '';
        btnX.style.justifyContent = ''
        btnX.style.position = ''
        spans[0].style.transform = ''
        spans[0].style.position = ''
        spans[0].style.top = ''
        spans[2].style.transform = ''
        spans[2].style.position = ''
        spans[2].style.top = ''
    }
})