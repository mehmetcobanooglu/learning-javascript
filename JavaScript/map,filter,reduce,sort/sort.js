const meyveler = ['elma', 'armut', 'muz', 'kiraz'];
meyveler.sort();
console.log(meyveler);

const sayilar = [5, 3, 8, 1, 2];
sayilar.sort();
console.log(sayilar);

sayilar.sort((a, b) => b - a);
console.log(sayilar);


const urunler = [
    { isim: 'T-shirt', fiyat: 100 },
    { isim: 'Pantolon', fiyat: 200 },
    { isim: 'Şapka', fiyat: 50 }
];

// urunler.sort((a, b) => a.fiyat - b.fiyat);
// console.log(urunler);

urunler.sort((a, b) => b.fiyat - a.fiyat);
console.log(urunler);

const urunlerr = [
    { isim: 'Laptop', fiyat: 15000 },
    { isim: 'Telefon', fiyat: 8000 },
    { isim: 'Kulaklık', fiyat: 2000 },
    { isim: 'Tablet', fiyat: 6000 },
    { isim: 'Akıllı Saat', fiyat: 3000 }
];

urunlerr.sort((a, b) => b.fiyat - a.fiyat);
console.log(urunlerr);

const ages = [25, 30, 12, 22, 100, 17];
console.log(
    ages.sort((a, b) => {
        return b - a;
    })
);


const letters = ['z', 'a', 'c', 'm', 'b'];
console.log(letters.sort());

