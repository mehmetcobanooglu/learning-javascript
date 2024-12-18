const filmler = [
    {
        id:1,
        filmName:"Savasçi",
        yonetmenID:1
    },
    {
        id:2,
        filmName:"Akasya Duraği",
        yonetmenID:3
    },
    {
        id:3,
        filmName:"Mentalist",
        yonetmenID:2
    }
];

const yazarlar = [
    {
        yonetmenID :1,
        yonetmenNAME:"Acun İlicali"
    },
    {
         yonetmenID:2,
         yonetmenNAME:"Mehmet Çobanoğlu"
    },
    {
        yonetmenID:3,
        yonetmenNAME:"Helin Ay"
    }
];

function getFilmById(FilmID,callback){
    setTimeout(()=>{
        const filmBul =  filmler.find(a=>a.id===FilmID);
    
        if(filmBul){
            
            console.log(`Film Adi : ${filmBul.filmName}`);
            callback(filmBul.yonetmenID);
        }
        else{
            console.log("Film Bulunamadi");
        }
    },1000)
}
function getFilmByYazar(yonetmen){
    setTimeout(()=>{
        const yazarBul = yazarlar.find(b=>b.yonetmenID===yonetmen);
        if(yazarBul){
            console.log(`Yönetmen : ${yazarBul.yonetmenNAME}`);
        }
        else{
            console.log("Yönetmen Bulunamadi");
        }
    },500)
}

getFilmById(1,getFilmByYazar);