let adSoyad = "Mehmet Can Cobanoglu";


let son = adSoyad.lastIndexOf("g");
console.log(son);

let bastanSona = adSoyad.slice(0, 6);
console.log(bastanSona);

let bastansonaSubstr = adSoyad.substring(0, 3);
console.log(bastansonaSubstr);

let yerDegistir = adSoyad.replace("M","x");
console.log(yerDegistir);