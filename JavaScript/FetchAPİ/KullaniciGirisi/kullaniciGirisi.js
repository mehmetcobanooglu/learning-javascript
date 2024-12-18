// app.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun varsayılan davranışını engelle

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const userData = {
        username: username,
        password: password
    };

    // API isteği
    fetch('https://example.com/api/login', { // Gerçek API URL'sini buraya ekleyin
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Giriş başarısız!');
        }
        return response.json();
    })
    .then(data => {
        // Başarılı giriş sonrası işlemler
        document.getElementById('sonuc').innerHTML = `<p>Giriş başarılı! Hoş geldin, ${data.username}.</p>`;
    })
    .catch(error => {
        document.getElementById('sonuc').innerHTML = `<p style="color: red;">Hata: ${error.message}</p>`;
    });
});
