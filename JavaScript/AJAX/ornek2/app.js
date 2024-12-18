document.getElementById('veriAlBtn').addEventListener('click', kullaniciBilgisiAl);

function kullaniciBilgisiAl() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200
                
            ) {
                const kullanici = JSON.parse(xhr.responseText);
                kullaniciBilgileriniGoster(kullanici);

            } else {
                console.error("program hata verdi", xhr.status);
            }
        }
    }
    xhr.send(); // İstek gönderildi
}

function kullaniciBilgileriniGoster(kullanici) {
    const container = document.getElementById('kullaniciBilgileri');

    container.innerHTML = `
                 <h2>${kullanici.name}</h2>
                 <p><strong>Kullanıcı Adı:</strong> ${kullanici.username}</p>
                 <p><strong>E-posta:</strong> ${kullanici.email}</p>
                 <p><strong>Şehir:</strong> ${kullanici.address.city}</p>
         `;



}