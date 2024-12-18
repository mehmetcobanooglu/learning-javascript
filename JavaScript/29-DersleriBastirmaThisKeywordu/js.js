let ogrenci = {
    ad: 'Mehmet',
    yas: 22,
    email: 'mehmetcobanoglu658@gmail.com',
    sinif: 2,
    dersler: ['Matematik', 'Kimya', 'Yazilim'],
    login() {
        console.log("Öğrenci Giriş Yapti");
    },
    logout() {
        console.log("Öğrenci Çikiş Yapti");
    },
    printLessons() {
        //console.log(this.dersler);
        this.dersler.forEach(c => {
            console.log(c);
        })
    }
};

ogrenci.printLessons();
