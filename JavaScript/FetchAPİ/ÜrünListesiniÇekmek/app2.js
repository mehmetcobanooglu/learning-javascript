function urunleriGetir(){
    fetch('https://fakestoreapi.com/products')
    .then(response=>{
        if(!response.ok){
            throw new Error('Ürünler yüklenemedi!');
        }
        return response.json();
    })
    .then(data=>{
        let urunHTML = '';

        data.forEach(urun=>{
            urunHTML += `
            <div>
            <h3>${urun.title}</h3>
            <p> Fiyat : ${urun.price} TL</p>
            <img src="${urun.image}" alt="${urun.title}"width="100">
            </div>
            `;
        });
        document.getElementById('urunler').innerHTML = urunHTML;
    })
    .catch(error=>{
        console.error('Hata : ',error.message);
    })
}
urunleriGetir();