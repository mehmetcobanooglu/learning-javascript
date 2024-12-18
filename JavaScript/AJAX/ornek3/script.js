document.getElementById('veriAlBtn').addEventListener('click', rastgeleKullaniciAl);


function rastgeleKullaniciAl() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://randomuser.me/api/', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {

                const kullanici = JSON.parse(xhr.responseText).results[0];
                kullaniciBilgileriniGoster(kullanici);
            }
            else {
                console.error("veri alirken hata oluştu", xhr.status);
            }

        }

       
    } 
       xhr.send();
}

function kullaniciBilgileriniGoster(kullanici) {
    const container = document.getElementById("kullaniciBilgileri");

    container.innerHTML = `
     <h2>${kullanici.name.title} ${kullanici.name.first} ${kullanici.name.last}</h2>
     <p><strong>E Mail:</strong>${kullanici.email}</p>
     <p><strong>Telefon: </strong>${kullanici.phone}</p>
     <p><strong>Şehir:  </strong>${kullanici.location.city}</p>   `
};
