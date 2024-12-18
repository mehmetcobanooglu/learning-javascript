function kullaniciGetir() {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => {
            if (!response.ok) {
                throw new Error("Kullanici Listesi Yüklenemedi")
            }
            return response.json();
        })
        .then(data => {
            let kullaniciHTML = '';

            data.results.forEach(kullanici => {

                kullaniciHTML+= `
                <div class="kullanici-karti">
                  <img src="${kullanici.picture.large}" alt="${kullanici.name.first} ${kullanici.name.last}">
              <h3>${kullanici.name.first} ${kullanici.name.last}</h3>
              <p>Ülke: ${kullanici.location.country}</p>
              <p>Email: ${kullanici.email}</p>
                </div>
                `
            })
            document.getElementById("kullanici-listesi").innerHTML = kullaniciHTML;
        })
        .catch(hata => {
            console.error("Hata : " + hata.message);
        });
}
kullaniciGetir();