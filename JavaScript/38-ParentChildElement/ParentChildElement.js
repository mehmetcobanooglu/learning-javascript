const bul = document.querySelector('section');
console.log(bul.children);
console.log(Array.from(bul.children));

Array.from(bul.children).forEach(child=>{
    child.classList.add('section-element');
})

const baslik = document.querySelector('h2');
console.log(baslik.parentElement)
console.log(baslik.parentElement.parentElement);
console.log(baslik.nextElementSibling); //bir sonrakini basar
console.log(baslik.previousElementSibling);//bir öncekini basar