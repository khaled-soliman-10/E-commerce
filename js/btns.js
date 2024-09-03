let order = document.querySelector('.num-of-orders input');
let increment = document.querySelector('.num-of-orders .increment');
let decrement = document.querySelector('.num-of-orders .decrement');

console.log(order.value)

increment.addEventListener("click",()=>{
    order.value = +(order.value) + 1
})

decrement.addEventListener("click",()=>{
    if (+(order.value) == 1) {
        order.value = +(order.value)
    } else {
        order.value = +(order.value) - 1
    }
})

order.addEventListener("blur",()=>{
    if (+(order.value) < 1) {
        order.value = 1
    }
})