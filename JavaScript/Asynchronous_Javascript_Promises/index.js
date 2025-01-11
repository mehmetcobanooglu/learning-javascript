/* Promise Nedir?
Bir Promise üç durumda olabilir:

Pending (Bekleme): İşlem henüz tamamlanmadı (başarılı veya hatalı bir sonuç yok).
Fulfilled (Tamamlandı): İşlem başarıyla tamamlandı ve bir sonuç döndürdü.
Rejected (Reddedildi): İşlem başarısız oldu ve bir hata döndürdü. */



const myPromise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("işlem başarili");
    }
    else {
        reject("işlem başarisiz");
    }
});


//PROMİSE KULLANIMI
/*Promise kullanımı için then, catch ve finally metotları kullanılır:

then: Promise başarılı olursa çalışır ve sonucu döner.
catch: Promise bir hata dönerse çalışır.
finally: Promise durumu ne olursa olsun (başarılı veya hatalı), çalışır. 
*/


myPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
}).finally(() => {
    console.log("işlem tamamlandi");
})

/************************************************** */

const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const dataFetched = true;

        if (dataFetched) {
            resolve("Veri başariyla getirildi!");
        } else {
            reject("veri alinamadi");
        }
    }, 2000);
});

fetchData
    .then((data) => {
        console.log("veri başariyla alindi");
    })
    .catch((error) => {
        console.error("veri almakta sikinti yaşandi");
    }).finally(() => {
        console.log("promise aktif");
    })


//Promise.all, Promise.race ve Promise.any (Birden fazla Promise'i aynı anda yönetmek için kullanılır.)

//Promise.all - tüm promisler tamamlandığında çalışır


const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);
Promise.all([promise1, promise2, promise3])
    .then((values) => {
        {
            console.log(values);
        }
    });

//Promise.race

//İlk tamamlanan promise döner.

const promise11 = new Promise((resolve) => setTimeout(resolve, 1000, "birinci"));
const promise22 = new Promise((resolve) => setTimeout(resolve, 500, "ikinci"));

Promise.race([promise11, promise22])
    .then((value) => {
        console.log(value);

    });

//Promise.any

// İlk başarili promise döner (hata olanları görmezden gelir);

const promise111 = Promise.reject("hata");
const promise222 = Promise.resolve("başarili2");
const promise333 = Promise.resolve("başka başari");

Promise.any([promise111, promise222, promise333])
    .then((value) => {
        console.log(value);
    })


//ÖRNEK

//Birden fazla veri çağrısı yapalım ve sonucu konsola yazdıralım.

function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Kullanici ${id} getirildi`);
        }, 1000);
    })
}
Promise.all([fetchUser(1), fetchUser(2), fetchUser(3)])
    .then((users) => {
        console.log(users);
    })
    .catch((error) => {
        console.error("Hata : ", error);
    });


//Pratik 

const veriAl = new Promise((resolve, reject) => {
    const veriAll = false;

    if (veriAll) {
        resolve("veri almak basit");
    }
    else {
        reject("veri almada başarisiz");
    }
});


veriAl
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("Promise veri almada başarili işlem gerçekleştirdi.")
    });

//Pratik 2 

const islem = new Promise((resolve, reject) => {
    const x = Math.random;
    if (x > 0.5) {
        resolve("işlem başarili");
    }
    else {
        reject("işlem başarisiz");
    }
});


islem
    .then((data1) => {
        console.log(data1);
    }).catch((error) => {
        console.error(error);
    }).finally(() => {
        console.log("işlemler BAŞARİLİ");
    });

//Birden Fazla Promise Yarışı(Promise.race)
//Bu örnekte birkaç işlem arasında hangisi önce tamamlarsa sonucu döndüreceğiz.

const a = new Promise((resolve) => {
    setTimeout(resolve, 1000, "a tamamlandi")
});
const b = new Promise((resolve) => {
    setTimeout(resolve, 500, "işlem b tamamlandi");
});
const c = new Promise((resolve) => {
    setTimeout(resolve, 2000, "işlem c tamamlandi");
});

Promise.race([a, b, c])
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("başarisiz", error);
    })
    .finally(() => {
        console.log("Önce Tamamlanan Konsolda Görüldü.")
    })

//Bir Kullanıcı Girişi Simülasyonu

//Bir kullanıcı adı ve şifre kontrolü yapalım. Yanlış giriş yapılırsa hata döndürelim.

function kullaniciGirisi(kullaniciAdi, sifre) {
    return new Promise((resolve, reject) => {
        console.log("Giriş Kontrol Ediliyor...");
        setTimeout(() => {
            if (kullaniciAdi === "admin" && sifre === "1234") {
                resolve("giriş başarili");
            }
            else {
                reject("giriş başarisiz");
            }
        }, 2000);
    });
}

kullaniciGirisi("admin", "12h34")
    .then((data) => {
        console.log("başarrili");
    })
    .catch((error) => {
        console.error(error);
    })




