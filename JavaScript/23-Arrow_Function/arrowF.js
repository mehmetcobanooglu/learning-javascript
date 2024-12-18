// // const karealani = kenar => kenar**2


// // const sonuc = karealani(4);
// // console.log("Bulunan Sonuc : " + sonuc);


// // const can = () => 'can';

// // const sonuc1 = can();
// // console.log(sonuc1);


// // const fatura = function(urunler, vergi)
// // {
// //     let toplam =0;

// //     for(let i =0; i<urunler.length; i++){
// //         toplam += urunler[i] + urunler[i]*vergi;
// //     }
// //     return toplam;
// // }

// // console.log(fatura([10,20,30],0.25));

// const fatura = (urunler, vergi) => {
//     let toplam = 0; for (let i = 0; i < urunler.length; i++) {
//         toplam += urunler[i] + urunler[i] * vergi;
//     }
//     return toplam;
// }
// console.log(fatura([10,20,30],0.25));

// const double = num => num*2;
// console.log("5x2 = "+double(5));


// const sum = (a,b) => a+b;
// console.log(sum(4,96));

// const numbers = [1,2,3,4,5,6];
// const oddNumbers = numbers.filter(num=>num%2!==0);
// console.log(oddNumbers);

// const createPerson = (name,age) => ({name : name, age:age });

// console.log(createPerson("Mehmet",23));

const numbers = [1,2,3,4];
const doubled = numbers.map(num=>num*2);
console.log(doubled);