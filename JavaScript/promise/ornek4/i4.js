const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, "Birinci işlem bitti"));
const promise2 = new Promise((resolve)=>setTimeout(resolve,2000,"ikinci işlem bitti"));
const promesi3 = new Promise((resolve)=>setTimeout(resolve,500,"üçüncü işlem bitti"));



Promise.all([promise1,promise2,promesi3])
.then((mesaj)=>{
    console.log(mesaj);
})
.catch((hata)=>{
    console.log(hata);
});