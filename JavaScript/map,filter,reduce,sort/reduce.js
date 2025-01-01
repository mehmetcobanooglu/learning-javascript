//Bir Dizinin Toplamını Hesaplama

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const total = numbers.reduce((x, y) => {
    return x + y;
}, 0);

console.log(total);

//Dizideki yalnızca çift sayıların toplamını hesaplayalım.

const totalCift = numbers.reduce((a, b) => {
    if (b % 2 === 0) {
        return a + b;
    }
    return a;
}, 0);

console.log(totalCift);


//En Büyük Sayıyı Bulma

const sayilar = [47, 23, 523, 151, 7645, 1231, 76];

const big = sayilar.reduce((max, num) => {
    return num > max ? num : max;
}, numbers[0]);
console.log(big);
//En küçük Sayiyi Bulma
const sayilar1 = [7, 3, 10, 61, 5];

const xs = sayilar1.reduce((x, y) => {
    if (x > y) {
        return y;
    } else {
        return x;
    }
}, sayilar1[0]);

console.log(xs);


const kelimeler = ["elma", "armut", "çilek", "karpuz", "portakal", "muz"];

const enUzunKelime = kelimeler.reduce((birikim, suAnki) => {
    if (suAnki.length > birikim.length) {
        return suAnki;
    }
    else {
        return birikim;
    }
});
console.log(enUzunKelime);


//Toplam Sayiyi Bulma
const sayilarr = [3, 5, 7, 9, 12];

const toplam = sayilarr.reduce((birikim, suAnkiSayi) => {
    return birikim + suAnkiSayi;
}, 0);

console.log(toplam);

//Dizideki isimlerin baş harflerini alıp birleştirme

const isimler = ['Hasan', 'Elif', 'Leyla', 'İrem', 'Nail'];

const basHarfler = isimler.reduce((birikim, suAnkiIsim) => {
    return birikim + suAnkiIsim[0];
}, '');

console.log(basHarfler);

//Sayilarin Karelerinin Toplamı 
const x = [1, 2, 3, 4, 5];

const kare = x.reduce((birikim, şuan) => {
    return birikim + (şuan * şuan);
}, 0);

console.log(kare);

//Dizideki Pozitif Sayilarin Toplamı 

const q = [1, -3, 5, -2, 8, -7];

const Q = q.reduce((birikim, şuan) => {
    if (şuan < 0) {
        return birikim + şuan;
    }
    else { return birikim };
}, 0)
console.log(Q);

const t = [1, -3, 5, -2, 8, -7, 4, 6];

const gruplanmisToplamlar = t.reduce((gruplar, sayi) => {
    if (sayi > 0) {
        gruplar.pozitif = (gruplar.pozitif || 0) + sayi * 2;
    }
    else {
        gruplar.negatif = (gruplar.negatif || 0) + sayi * 2;
    }
    return gruplar;

}, {});

console.log(gruplanmisToplamlar);


