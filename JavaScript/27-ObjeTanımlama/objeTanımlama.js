let ogrenci = {
    ad:'Mehmet',
    yas:22,
    email:'mehmetcobanoglu658@gmail.com',
    sinif:2,
    dersler:['matematik','kimya','Yazilim']
};

console.log(ogrenci);
console.log(ogrenci.yas);

ogrenci.yas = 25;

console.log(ogrenci.yas);
console.log(ogrenci['ad']);
ogrenci['ad'] = 'Mikail';
console.log(ogrenci['ad']);
console.log(typeof ogrenci);