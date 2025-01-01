const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    mesaj: "Doğru id ulaşildi",
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
//Destrcucturing
const books = getBook(2);
// const title = books.title;
// title;

// const reviews = books.reviews;
// reviews;

// const author = books.author;
const { title, author } = books;

console.log("Kitap Adi : " + title + " " + "Yazari : " + author)


const book4 = getBook(1);

const { mesaj } = book4;

console.log(mesaj);
//1. Rest Operator (...)

function toplama(a, b, ...digerSayilar) {
  console.log(a); // 1
  console.log(b); // 2
  console.log(digerSayilar); // [3, 4, 5]
}

toplama(1, 2, 3, 4, 5);

//2. Spread Operator (...)
const sayilar = [1, 2, 3];
const yeniSayilar = [...sayilar, 4, 5];
console.log(yeniSayilar); // [1, 2, 3, 4, 5]

/*Template Literals'in Özellikleri
Değişken ve İfade Yerleştirme
Çok Satırlı Metin Yazımı
İç İçe Yazımlar (Nesting)
Tagged Template Literals */

//1. Değişken ve İfade Yerleştirme

const isim = "mehmet";
const ülke = "Türkiye";
const yas = 29;
console.log(`Onun İsmi : ${isim} , YAŞİ : ${yas} Memleketi:${ülke}`,);
//2- Çok Satırlı Metin Yazımı

const mesaj1 = `Bu birinci satır.
Bu ikinci satır.
Bu üçüncü satır.`;

console.log(mesaj1);

//3-İç İçe Yazımlar (Nesting)

const kisi = {
  isim: "Yasin",
  yas: 20,
  meslek: "mühendis"
};

const kisiBilgileri = `Kişinin Adi : ${kisi.isim} Kişinin Yaşi : ${kisi.yas} Kişinin Mesleği : ${kisi.meslek}`;

console.log(kisiBilgileri);

//4-Tagged Template Literals


function etiketliMetin(literals, ...degiskenler) {
  console.log("Metin parçaları:", literals);
  console.log("Değişkenler:", degiskenler);
  return `${literals[0]}${degiskenler[0]}${literals[1]}${degiskenler[1]}`;
}


const isim1 = "Mehmet";
const yas1 = 30;

const sonuc = etiketliMetin`Merhaba Benim Adim ${isim1}, Yaşım ${yas1}`;

console.log(sonuc)

//Arrow Function

function topla(a, b) {
  return a + b;
}

const toplama1 = topla(2, 4);
console.log(toplama1);


const sum = (a, b) => a + b;
console.log(sum(2, 5));

const extraction = (x, y) => x - y;

console.log(extraction(20, 2));
console.log(sum(1300, 299));
console.log(extraction(0, 1));

const multiply = (x, y) => (x + y) * (x - y);

console.log(multiply(6, 4));

const merhaba3 = () => "merhaba";
console.log(merhaba3());

const welcome = () => "Siteye Hoşgeldiniz";

console.log(welcome());

const deger = (a, b) => (a = "Mehmet", b = "yasin", a + " " + b);
console.log(deger());


const ee = () => 2 + 3;

console.log(ee());

function kedi(name) {
  this.name = name;
  setTimeout(function () {
    console.log(this.name)
  }.bind(this), 1000);
}
new kedi("minnoş");
console.log(new kedi);


function cat(name1) {
  this.name1 = name1;
  setTimeout(() => {
    console.log(name1);
  }, 1000);
}
new cat("minnoş");


function deneme() {
  this.name3 = "Melisa";
  setTimeout(function () {
    console.log(this.name3);
  }, 1000);
}
new deneme();


function deneme() {
  this.name4 = "melisa";
  const self = this;
  setTimeout(function () {
    console.log(self.name4);
  });
}

// Short-Circuiting And Logical Operators: &&, ||, ??
//&& (VE)
let xz = true;
let yz = "Merhaba";

console.log(xz && yz);


let xy = false;
let zy = "Merhaba"

console.log(xy && zy);

let num = 0;
let text = "Metin";

console.log(num && text);

//Mantıksal VEYA || 

let e = false;
let r = "Merhaba";

console.log(e || r);

let eq = true;
let qe = "Merhaba";

console.log(eq || qe);

let ss = 0;
let textt = "metin yazildi";

console.log(ss || textt);

//Nullish Coalescing (??)

let p = null;
let o = "hi";

console.log(p ?? o);

let f = undefined;
let g = "mm";

console.log(f ?? g);

let t = 0;
let po = "metin";

console.log(t ?? po);

let value = null;

let result = value ?? "varsayilan deger";

console.log(result);
/*

Kısa Devre Yapma ile İlgili Önemli Noktalar:
&&:(ve) İlk yanlış değeri bulur ve döndürür, diğer koşulları kontrol etmez.
||: (veya)İlk doğru değeri bulur ve döndürür, diğer koşulları kontrol etmez.
??: Yalnızca null veya undefined değerini kontrol eder, diğer falsy değerler (örneğin, 0, false, NaN) geçerlidir.*/

// false : 0,'',null,undefined

console.log(value && 'some String');

let abc = null;
let cba = 52;

if (abc > 0 && cba > 0) {
  console.log('ikisi pozitiftir');
}
else {
  console.log('ikisi pozitif değildir')
}

if (abc > 0 || cba > 0) {
  console.log("çalişir.")
}

let result23 = abc || cba;
console.log(result23);

let result24 = abc ?? cba;
console.log(result24);


let name = null;
let greeting = `Merhaba, ${name ?? 'Misafir'}!`;
console.log(greeting);

let user = { name: 'Ahmet', address: 'ipek mahallesi' };
let city = user?.address ?? 'bilinmiyor';

console.log(city);

//user değeri var mı? varsa adress değeri var mı varsa city var mı varsa city döndür eğer bunlardan herhangi biri yoksa null döner. döngü kırılır

console.log(true || 2 ** 4);
console.log(false || 2 ** 4);


const spanishTranslation = book4.translations.spanish || "NOT TRANSLATED"
console.log(spanishTranslation);

function getTotalReviewCount(book4) {
  const goodreads = book4.reviews.goodreads.reviewsCount;
  const librarything = book4.reviews.librarything.reviewsCount;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book4));

//Opsiyonel Zincirleme (Optional Chaining)

const kkullanici = {
  name: 'Ahmet',
  address: {
    city: 'İstanbul',
    street: 'Bağcılar',
    apartment: {
      number: 123
    }
  }
};



const access = kkullanici?.address?.city;

console.log(access);

const colors = ['red', 'green', 'blue'];

const secondColor = colors?.[32];

console.log(secondColor);

function getUSERData(userID) {
  return {
    name: 'Ayşe',
    email: 'ayse@example.com'
  };
}

const userData = getUSERData(7)?.email;
console.log(userData);

const config = {
  features: {
    darkMode: true
  }
};


const isDarkModeEnabled = config?.features?.darkMode;
if (isDarkModeEnabled) {
  //DARK MODE AKTİF EDİLİR.
};


//The Array Map Method


