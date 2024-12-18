const icerik = document.querySelector('p');
console.log(icerik.classList);
icerik.classList.add('can1')
icerik.classList.remove('error');

const pDegeri = document.querySelectorAll('p');
pDegeri.forEach(deger=>{
    if(deger.textContent.includes('error')){
        deger.classList.add('error');
    }
    if(deger.textContent.includes('success')){
        deger.classList.add('success');
    }

})