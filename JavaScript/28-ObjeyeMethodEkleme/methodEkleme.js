let ogrenci = {
    ad:'Mehmet',
    yas:22,
    email:'mehmetcobanoglu658@gmail.com',
    sinif:2,
    dersler:['matematik','kimya','Yazilim'],
    login(){
        console.log("Öğrenci Giriş Yapti");
    },
    logout(){
        console.log("Öğrenci Çikiş Yapti");
    }
};


ogrenci.login();
ogrenci.logout();