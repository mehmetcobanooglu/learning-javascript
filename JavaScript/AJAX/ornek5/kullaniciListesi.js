document.getElementById('veriAl').addEventListener('click', kullaniciListeAl);
function kullaniciListeAl() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const kullanicilar = JSON.parse(xhr.responseText);
                kullaniciBilgileriGoster(kullanicilar)
            }
            else {
                console.error("HATA", xhr.status);
            }
        }
    }
    xhr.send();
}

function kullaniciBilgileriGoster(kullanicilar){
       const container = document.getElementById('kullaniciListesi');

       container.innerHTML = ``;
       kullanicilar.forEach(kullanici => {
          const kullaniciDİV = document.createElement('div');
          kullaniciDİV.className = 'kullanici'; 
          kullaniciDİV.innerHTML = `
            <h3>${kullanici.name}</h3>
            <p><strong>Email:</strong> ${kullanici.email}</p>
            <p><strong>Şehir:</strong> ${kullanici.address.city}</p>
        `;
        container.appendChild(kullaniciDİV);
       });
}