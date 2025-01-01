//Amaç: Bir sayı dizisinden yalnızca 10'dan büyük olanları filtreleyelim.

const numbers = [10, 12, 14, 16, 18, 20];

const great = numbers.filter(num => num > 16);
console.log(great);

//Kullanıcıların yaş bilgisine göre yalnızca 18 yaşından büyük olanları filtreleyelim.

const users = [
    { name: "Ali", age: 17 },
    { name: "Ayşe", age: 22 },
    { name: "Mehmet", age: 15 },
    { name: "Elif", age: 19 }
];

const yetiskinler = users.filter(user => user.age >= 20);
console.log(yetiskinler);


//Bir kelime dizisinden yalnızca 5 harfli kelimeleri filtreleyelim

const words = ["apple", "banana", "pear", "grape"];


const ff = words.filter(word => word.length === 5);
console.log(ff);

//çift sayilari sadece al 

const ciftNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const cc = ciftNumber.filter(c1 => c1 % 2 == 0);
console.log(cc);

const data = [true, false, true, false, true];
const dd = data.filter(value => !value);
console.log(dd);

//HTML yapıları filtreleme (örneğin "div" olanları bul):

const elements = [
    { tag: "div", content: "Hello" },
    { tag: "p", content: "World" },
    { tag: "div", content: "How are you?" },
    { tag: "p", content: "Goodbye" }
];

const divElement = elements.filter(dv => dv.tag === "p");

console.log(divElement);
