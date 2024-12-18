function sinavSonucu() {
    return new Promise((resolve, reject) => {
        const puan = Math.floor(Math.random() * 100);
        console.log("Sinav Sonucu " + puan);
        setTimeout(() => {
            if (puan >= 50) {
                resolve("Tebrikler Geçtiniz");
            }
            else {
                reject("Kaldiniz.")
            }
        }, 2000);
    })
}


sinavSonucu()
    .then((mesaj) => {
        console.log(mesaj);
    })
    .catch((hata) => {
        console.log(hata);
    })
