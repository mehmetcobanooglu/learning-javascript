const userForm = document.getElementById('userForm');
const message = document.getElementById('message');

userForm.addEventListener("click", function (event) {
    event.preventDefault(); // Varsayılan form gönderimini engelle


    //Formdan Verileri Aldik
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;


    const data = {
        name: name,
        email: email
    };

    const apiURL = 'https://jsonplaceholder.typicode.com/users';

    fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(data)
    })
    .then(response=>{
        if(!response.ok){
            throw new Error("Hata : " +response.status);
        }
      return  response.json();
    })
    .then(data=>{
        message.textContent = 'Kullanıcı başarıyla eklendi: ' + data.name + "Mail : "+ data.email; 
    })
    .catch(hata=>{
        message.textContent = 'Hata: ' + hata.message;
    })

    


})