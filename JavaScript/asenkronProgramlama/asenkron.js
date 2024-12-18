/**(js senksron çalışan bir programalama dilidir.)
 * 
 * 1-Timing 
 * 2-Event(olay)
 * 3-http isteklerinde
 */

//http istekleri

const users = [
    {
        userId: 1,
        post: "Mehmet Çobanoğlu 1"
    },
    {
        userId: 1,
        post: "Mehmet Çobanoğlu 2 "
    },
    {
        userId: 3,
        post: "Mikail Önal 1 "
    },
    {
        userId: 4,
        post: "Ahmet Yildiz 1"
    },
    {
        userId: 5,
        post: "Ahmet Yildiz 2"
    }
]

function getUsersId(callback) {
    //
    setTimeout(() => {
        //servise geldik ve cevabı aldik
       
        let userId  = 1;
        callback(userId);
    }, 1000)
}

function getUsersByID(userId) {
    setTimeout(() => {
        // userId'si eşleşen tüm kullanıcıları buluyoruz
        const u1 = users.filter(user => user.userId === userId);

        u1.forEach(user => {
            console.log(user.post);
        });
    }, 500);
}


getUsersId(getUsersByID);

 