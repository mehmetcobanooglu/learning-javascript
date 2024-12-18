// let check = true;
// //callback lerin alternatifi

// function createPromise() {
//     return new Promise((resolve, reject) => {
//         if (check) {
//             resolve("Promiste Herhangi bir sikinti yok ")
//         } else {
//             reject("sikinti XL")
//         }
//     })
// }
// createPromise()
//     .then((response) => {
//         console.log(response);
//     })

//     .catch((error) => {
//         console.log("error")
//     })
//     .finally(()=>{
//         console.log("her zaman çalişir")
//     })






//------------------------

//? promise + xmlhttprequest
function readStudents(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            });
        } catch (error) {
           reject(error);
        }
        xhr.open('GET',url);
        xhr.send();

    })
}
readStudents("students.json")
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error);
})