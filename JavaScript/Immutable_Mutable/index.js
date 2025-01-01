//Mutable (Değiştirilebilir): Veri üzerinde değişiklik yapılırsa, orijinal veri değişir.

//Mutable(Doğrudan Erişim):

const arr = [1, 2, 3];

arr.push(4); //orijinal dizi değişecek
console.log(arr);

//Immutable (Yeni Dizi Oluşacak)

const arr1 = [1, 2, 3];
const newArr = [...arr1, 4];

console.log(newArr);
console.log(arr1);

//Spread Operatörü(...): bir diziyi genişleterek yeni bir dizi oluşturmanı sağlar


const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; // Yeni eleman ekleme
console.log(newNumbers); // [1, 2, 3, 4]
console.log(numbers);    // [1, 2, 3] (orijinal değişmez)

//map() : Her bir elemanı dönüştürerek yeni bir dizi oluşturur.

const s = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled);
console.log(s);

//filter() : Belirli bir koşula uyan elemanları seçerek yeni bir dizi oluşturur.

const ss = [1, 2, 3, 4, 5];
const even = ss.filter(num => num % 2 === 0);
console.log(even);
console.log(ss);

//reduce(): Bir diziyi tek bir değere indirger.

const a = [1, 2, 3, 4];
const sum = a.reduce((total, num) => total + num, 0);
console.log(sum);
console.log(a);

//concat : iki diziyi birleştirerek yeni bir dizi oluşturur

const b = [34, 35];
const z = [47, 64];

const mm = b.concat(z);
console.log(mm);

//Immutable Dizilerle Örnekler

//1. Eleman Ekleme
const fruit = ["elma", "muz"];

const newFruits = [...fruit, "portakal"];
console.log(fruit);
console.log(newFruits);

//2. Eleman Silme

const fruit1 = ["elma", "muz", "portakal"];
const filteredFruits = fruit1.filter(fruit => fruit !== "muz");
console.log(filteredFruits);
console.log(fruit1);

//3. Eleman Güncelleme

const meyve = ['muz', 'elma', 'portakal'];

const meyveleriGuncelle = meyve.map(meyve => {
    if (meyve === 'muz') {
        return 'kivi';
    }
    return meyve;
});

console.log(meyveleriGuncelle);

// 4. Ters Çevirme (Immutable)

const sayilarrr = [1, 2, 3];
const reversed = [...numbers].reverse();
console.log(reversed);

// 5.Sıralama (Immutable)

const nmbr = [3, 1, 4, 2];
const sorted = [...nmbr].sort((a, b) => a - b);
console.log(sorted);

//NOT

// Geriye Dönülebilirlik: Verilerin eski hâline kolayca dönebilirsiniz.


// const oldState = [...currentState]; // Eski hâli sakla
// Hata Ayıklama Kolaylığı: Orijinal veri değişmediği için kod daha tahmin edilebilir olur.

// State Yönetimi: React ve Redux gibi kütüphanelerde state yönetimi için idealdir.
