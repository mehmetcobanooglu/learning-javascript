// const dersler = [
//     {isim:'Matematik',puan:90},
//     {isim:'Fizik',puan:78},
//     {isim:'Kimya',puan:80},

// ]










let ogrenci = {
    ad: 'Mehmet',
    yas: 22,
    email: 'mehmetcobanoglu658@gmail.com',
    sinif: 2,
    dersler: [
        { isim: 'Matematik', puan: 90 },
        { isim: 'Fizik', puan: 78 },
        { isim: 'Kimya', puan: 80 },

    ],
    login() {
        console.log("Öğrenci Giriş Yapti");
    },
    logout() {
        console.log("Öğrenci Çikiş Yapti");
    },
    printLessons() {
        //console.log(this.dersler);
        this.dersler.forEach(c => {
            console.log("İsim : "+c.isim +" Puan : " +c.puan);
        })
    }
};

ogrenci.printLessons();
