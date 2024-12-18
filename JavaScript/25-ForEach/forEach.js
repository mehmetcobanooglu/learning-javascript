let ogrencilerim = ['can','hakan','elif','Tugba'];
ogrencilerim.forEach(function(){
    console.log("MEHMET");
})

ogrencilerim.forEach(function(kisi,index){
    console.log(kisi,index);
})

const ogrenci = (kisi,index)=>{
    console.log(`${index}-${kisi}`)
}
ogrencilerim.forEach(ogrenci);