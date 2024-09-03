let search = document.querySelector('.search');
let searchInput = document.querySelector('.search input');

searchInput.onfocus = () =>{
    search.style.boxShadow = "0px 0px 4px 2px var(--main-color)"
}

searchInput.onblur = () =>{
    if(searchInput.value !== "") {
        search.style.boxShadow = "0px 0px 4px 2px var(--main-color)"
    }else {
        search.style.boxShadow = ""
    }
}

let filterOpen = document.querySelector('.latest-content > .view');
let hidden = document.querySelector('.hidden')
let filterClose = document.querySelector('.hidden form .close');
let range = document.getElementById('price');
let value = document.querySelector('.hidden .filters .filter span');

value.innerHTML = range.value;

range.addEventListener('input',()=>{
    value.innerHTML = range.value;
})

filterOpen.addEventListener('click',()=>{
    hidden.style.display = "flex"
})

filterClose.addEventListener('click',()=>{
    hidden.style.display = "none"
})
