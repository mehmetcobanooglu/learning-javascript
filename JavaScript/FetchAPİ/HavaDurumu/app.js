function havaDurumuGetir(){
    const sehir = document.getElementById('sehir').value;
    const apiKey = '1464fe69228bb0beda13dbd04ef25c37';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${sehir}&appid=${apiKey}&units=metric&lang=tr`;


    fetch(url)
    .then(response=>{
        if(!response){
            throw new Error("Şehir Bulunamadi veya başka bir hata oluştu");
        }
        return response.json();
    })
   .then(data=>{
    const sonucDiv = document.getElementById('sonuc');
    const sicaklik = data.main.temp;
    const hava = data.weather[0].description;

    sonucDiv.innerHTML = `
    <h2>${sehir} için Hava Durumu </h2>
    <p>Sicaklik: ${sicaklik} °C</p>
    <p>Hava: ${hava} </p>
    `
   })
   .catch(error => {
    document.getElementById('sonuc').innerHTML = `
      <p style="color: red;">Hata: ${error.message}</p>
    `;
  });

}