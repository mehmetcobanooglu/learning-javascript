// //Session Storage

// //Değer Ekleme

// sessionStorage.setItem("235501026","Mehmet");
// sessionStorage.setItem("235012344","Yasin");
// sessionStorage.setItem("324234551","Elif");

// //Değer Silme

// // sessionStorage.removeItem("235501026");

// //  let value = sessionStorage.getItem("235012344");
// //  if(value === null){
// //     console.log("Değer Bulunamadi");
// //  }
// //  else{
// //     console.log("değer bulundu : "+value);
// //  }

// // Hepsini silme

// //sessionStorage.clear();

// //Session Storage - Array Yazdirma

// let name = ["Ali", "Enes","Kübra","Ayşenur"];


// sessionStorage.setItem("isimler",JSON.stringify(name));
// let value = JSON.parse(sessionStorage.getItem("isimler"));
// value.forEach(function (name) {
//     console.log(name);
// } )
    

//local Storage KULLANIMI
// //Değer Ekleme
// localStorage.setItem("1","Mehmet");
// localStorage.setItem("3","Yaren");
// localStorage.setItem("47","Mardin");

// //Değer Almak

// let value = localStorage.getItem("1");
// console.log(value);

//Değer Silmek 

// localStorage.removeItem("1");

//Tümünü Temizleme

//ocalStorage.clear();

// let degerler1 = ["Mehmet","Yaren","Mardin"];

// localStorage.setItem("degerler",JSON.stringify(degerler1));
// let aa = JSON.parse(localStorage.getItem("degerler"));
// console.log(aa);

// aa.forEach(function(memo){
//     console.log(memo)

    
// });