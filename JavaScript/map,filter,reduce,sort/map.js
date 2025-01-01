/*
array.map(function (currentValue, index, array) {
    // işlemler
}, thisArg);
*/

//currentValue: İşlem yapılan dizideki mevcut öğe.
//index (isteğe bağlı): İşlem yapılan öğenin indeksi.
//array (isteğe bağlı): İşlem yapılan orijinal dizi.
//thisArg (isteğe bağlı): map metoduna geçtiğiniz bu değeri this bağlamı olarak kullanabilirsiniz.




const number = [1, 2, 3, 4, 5];
const doubled = number.map(number => number - 2);

console.log(doubled);


const NAME = ["ali", "mehmet", "casper"];
const buyukYap = NAME.map(NAME => NAME.toUpperCase());

console.log(buyukYap);

const urunler =
    [
        {
            id: 1,
            name: "Mouse",
            price: 34
        },

        {
            id: 2,
            name: "keyboard",
            price: 100
        },

        {
            id: 3,
            name: "monitor",
            price: 300
        }

    ];

const id = urunler.map(x => x.id);
console.log(id);

const name = urunler.map(y => y.name);
console.log(name);

const price = urunler.map(z => z.price);
console.log(price);

const letters = ['a', 'b', 'c'];

const indexedLetters = letters.map((letters, index) => `${index}:${letters}`);
console.log(indexedLetters);




const books = [
    { title: "Harry Potter", author: "J.K. Rowling", price: 30 },
    { title: "Lord of the Rings", author: "J.R.R. Tolkien", price: 45 },
    { title: "Game of Thrones", author: "George R.R. Martin", price: 50 }
];

const dongu = books.map(book => (
    {
        title: book.title,
        author: book.author.toUpperCase(),
        price: book.price
    })
);

console.log(dongu);

//Bir dizi tarih var ve her birini insan okuyabilir formata dönüştürelim:
//year-month-day
const tarih = ['2025-12-01', '2026-04-15', '2023-09-07'];

const TarihDuzenle = tarih.map(duzenle => {
    const [year, month, day] = duzenle.split('-');

    return `${day}-${month}-${year}`;

});

console.log(TarihDuzenle);


//Bir sayı dizisinde hem sayıların karesini alalım hem de pozitif-negatif kontrolü yapalım:

const sayilar = [-1, 4, 5, -43];

const islemYap = sayilar.map(s =>
    [
        {
            sayilar: s,
            square: s * s,
            isPositive: s > 0
        },
        {
            ikiyleCarp: s * 2
        }
    ]
);

console.log(islemYap);


//Bir kullanıcı dizisinden bir HTML şablonu oluşturalım

const users = [
    {
        id: 1,
        isim: "Esra",
        yas: 0
    },
    {
        id: 2,
        isim: "Sena",
        yas: 4
    },
    {
        id: 3,
        isim: "Ahmet Yasin",
        yas: -3
    }
];
const html = users.map(sablon =>


    `<div class="user-card">
    <h2> ${sablon.isim} adli kullanıcı ${sablon.yas} yaşinda</h2>
    <p>${sablon.id}</p>
    </div>`
);

console.log(html.join("\n"));


//Bir kullanıcı şifrelerini "gizli" hale getirelim:

const sifre = ['mehmet', 'usak', 'sofia1980'];

const blokla = sifre.map(pass => "*".repeat(pass.length));
console.log(blokla);


//iç içe dizilerde işlem yapma
const grades = [
    { name: "Ali", scores: [40, 50, 70] },
    { name: "Ayşe", scores: [80, 90, 85] },
    { name: "Mehmet", scores: [30, 45, 55] }
];

const y = grades.map(ogrenci => ({
    name: ogrenci.name,
    puan: ogrenci.scores.filter(s => s > 50)
}));

console.log(y);


// Key-Value Dönüşümü: Bir nesne dizisinden yalnızca belirli alanları alalım ve yeni bir nesne oluşturalım:


const employees = [
    { id: 1, name1: "Ali", department: "IT", salary: 3000 },
    { id: 2, name1: "Ayşe", department: "HR", salary: 3500 },
    { id: 3, name1: "Mehmet", department: "Finance", salary: 4000 }
];


const keyValue = employees.map(({ name1, department }) => ({ name1, department }));


console.log(keyValue);


const key = employees.map(({ name1, department }) => {
    return `${name1} : ${department}`
});

console.log(key);

