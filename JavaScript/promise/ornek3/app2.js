function KullaniciDogrula(kullaniciAdi) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (kullaniciAdi === "admin") {
                resolve("Tebrikler Kullanici Adiniz Doğru");
            }
            else {
                reject("Maalesef Kullanici Adiniz Yanliş");
            }
        }, 2000);
    })
}
function kullaniciVeriAl(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
           resolve("Kullanici Verileri Alindi.")
        },2000);
    })
    
}

KullaniciDogrula("admin")
    .then((mesaj) => {
        console.log(mesaj);
        return kullaniciVerileriniAl();

    })
    .then((veri)=>{console.log(veri)})
    .catch((hata) => {
        console.log(hata);
    })
    