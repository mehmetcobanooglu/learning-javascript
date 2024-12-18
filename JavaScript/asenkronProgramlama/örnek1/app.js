const books = [
    {
        id: 1,
        title: "JavaScript Eğitimi",
        authorId: 1
    },
    {
        id: 2,
        title: "Node.js Kilavuzu",
        authorId: 2
    },
    {
        id: 3,
        title: "React ile Uygulama Geliştirme",
        authorId: 3
    }
];

const authors = [
    {
        id: 1,
        name: "Mehmet Çobanoğlu"
    },
    {
        id: 2,
        name: "Mikail Önal"
    },
    {
        id: 3,
        name: "Ahmet Yildiz"
    }
];

// Kitabı getiren fonksiyon (callback kullanıyor)
function getBookByID(bookID, callback) {
    setTimeout(() => {

        const book = books.find(b => b.id === bookID);
        if (book) {
            console.log(`Kitap:${book.title}`);
            callback(book.authorId);
        }
        else {
            console.log("yazar id bulunamadi");
        }
    }, 500

    )
}

function getAuthorByID(authorId){
    setTimeout(()=>{
        const author = authors.find(a=>a.id ===authorId);
        if(author){
            console.log(`Yazar : ${author.name}`);
        }
        else{
            console.log("Böyle bir yazar yok ");
        }
    },500)
}
getBookByID(3,getAuthorByID);