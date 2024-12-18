//CalBack : bir fonk bir fonksiyona parametre geçerek 
// asenkron yapıyı senkrona çeviririz.


function getName(callback) {
    setTimeout(() => {
        // console.log("enes");
        let name = "enes";  //web servisten geldi
        callback(name);
    }, 1000);
}

function getSurname(name, callback) {
    setTimeout(() => {
        //  console.log("bayram");
        let surname = "bayram"; //web servisten geldi
        callback(surname)
    }, 500);
}

//getName(getSurname);

function getAge(name, surname, callback) {
    setTimeout(() => {

        let age = 20;
        callback(age);
    }, 300);
}

getName((name) => {
    getSurname(name, (surname) => {
        getAge(name, surname, (age) => {
            console.log(name, surname, age);
        })
    })



})
