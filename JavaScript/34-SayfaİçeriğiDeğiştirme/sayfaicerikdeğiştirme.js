// const pDegeri = document.querySelector('p');
// console.log(pDegeri.innerText);

// pDegeri.innerText ="Can Boz Full Stack Developer";

// const pDegeri = document.querySelectorAll('p');

// pDegeri.forEach(a=>{
//     console.log(a.innerText);
//     a.innerText = a.innerText+ "  Yeni Alan";
// })


const icerik = document.querySelector('.icerik');
console.log(icerik.innerHTML);

// icerik.innerHTML = "<h2>Vue JS, React JS , Angular JS</h2>"
icerik.innerHTML += "<h2>Vue JS, React JS , Angular JS</h2>"

const ogrenciler =['can','tuba','elif'];
ogrenciler.forEach(ogrenci=>{
    icerik.innerHTML += `<p>${ogrenci}</p>`
})