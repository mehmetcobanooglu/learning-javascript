/*
Async/Await Nedir?
Async/Await, JavaScript'te Promise tabanlı işlemleri daha sade ve anlaşılır şekilde yazmamızı sağlar.

async: Bir fonksiyonu asenkron hale getirir.
await: Asenkron bir işlemin sonucunu bekler.
 */
// function casper() {
//     return "casper fonksiyon çalişti"
// };

// console.log(casper());



// document.querySelector('#button').addEventListener("click", () => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((response) => response.json())
//         .then
//         ((post) => {
//             console.log(post)
//             fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//                 .then((response) => response.json())
//                 .then((comments) => {
//                     console.log(comments);
//                 })
//         })
// })
//Async await ile yapılışı
// document.querySelector('#button').addEventListener("click", async () => {
//     const responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     const post = await responsePost.json();
//     console.log(responsePost);


//     const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
//     const comments = await responseComments.json();
//     console.log(comments);
// })



// async function fetchData() {
//     console.log("veri aliniyor...");
//     //2 sn bekleyen bir işlem (asenkron)
//     let data = await new Promise
//         (resolve => setTimeout(() => resolve("veri alindi"), 2000))
//     console.log(data);
// }

// fetchData();
// console.log("asenkron işlem tamamlandi")


// async function getUserData() {
//     let userData = await new Promise(resolve => setTimeout(() => resolve("kullanici verisi alindi"), 2000));
//     return userData;
// }

// async function getUserPost() {
//     let userPost = await new Promise(resolve => setTimeout(() => resolve("post alindi"), 3000));
//     return userPost;
// }

// async function getir() {
//     console.log("veriler alindi");
//     let user = await getUserData();
//     let post = await getUserPost();
//     console.log(user);
//     console.log(post);
// };

// getir();
// console.log("diğer işler yapiliyor....");


//3. Birden Fazla Asenkron İşlem (Paralel Çalışma)
// Şimdi ise iki işlemi paralel olarak başlatmayı gösterelim. Promise.all() kullanarak her iki işlemi aynı anda çalıştırabiliriz.

async function task1() {
    return new Promise(resolve => setTimeout(() => resolve("ilk görev tamamlandi"), 3000));
}
async function task2() {
    return new Promise(resolve => setTimeout(() => resolve("ikinci görev tamamlandi"), 1000));
}

async function run() {
    console.log("başlangiç");
    const [result1, result2] = await Promise.all([task1(), task2()]);
    console.log(result1);
    console.log(result2);
    console.log("bütün görevler tamamlandi");
}

run();