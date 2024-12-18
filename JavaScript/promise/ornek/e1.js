document.getElementById('veriAl').addEventListener('click',veriyiAl);

function apiVeriAl(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const basarili = Math.random()>10;
            if(basarili){
                resolve("Veri Başariyla Alindi");
            }
            else{
                reject("Veri Alinirken Hata Oluştu");
            }
        },2000);
    });
}

function veriyiAl(){
    const sonucDiv = document.getElementById('sonuc');
    sonucDiv.textContent = "Veri Aliniyor...";

    apiVeriAl()
    .then((mesaj)=>{
        sonucDiv.textContent = mesaj;
        console.log("Başarili: ", mesaj);
    })
    .catch((hata)=>{
        sonucDiv.textContent = hata;
    })
}