const kitaplar = [
    {
        id: 1,
        kitapAdi: "Sefiller",
        yazarId: 1
    },
    {
        id: 2,
        kitapAdi: "1984",
        yazarId: 2
    },
    {
        id: 3,
        kitapAdi: "Simyaci",
        yazarId: 3
    }
];

const yazarlar = [
    {
        yazarId: 1,
        yazarAdi: "Victor Hugo"
    },
    {
        yazarId: 2,
        yazarAdi: "George Orwell"
    },
    {
        yazarId: 3,
        yazarAdi: "Paulo Coelho"
    }
];


function getKitapById(id, callback){
    setTimeout(()=>{
        const kitap = kitaplar.find(k=>k.id);
        if(kitap){
            console.log(`Kitap Adi : ${kitap.kitapAdi}`);
            callback(kitap.yazarId);
        }
        else{
            console.log("Kitap Bulunamadi");
        }
    },1000)
};

function getYazarById(yazarId){
    setTimeout(()=>{
        const yazarBul = yazarlar.find(y=>y.yazarId);

        if(yazarBul){
            console.log(`Yazar Adi : ${yazarBul.yazarAdi}`);
        }
        else{
            console.log("Yazar Bulunamadi");
        }
    },500)
  
};

getKitapById(1,getYazarById);