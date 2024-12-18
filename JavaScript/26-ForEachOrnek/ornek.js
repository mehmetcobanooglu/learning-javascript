const gonderilen = document.querySelector('.main');
let ogrencilerim = ['can','hakan','elif','tuba'];

let html =``;

ogrencilerim.forEach(ogrenci=>{
    html = html + `<li>${ogrenci}</li>`
})

console.log(html);

gonderilen.innerHTML=html;