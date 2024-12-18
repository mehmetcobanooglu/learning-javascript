function sendComment(url,commentData){
    const xhr = new XMLHttpRequest();

    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-Type','application/json');

    xhr.onreadystatechange = function(){
        if(xhr.readyState===4){
            if(xhr.status===201){
                 console.log('yorum gönderildi', JSON.parse(xhr.responseText));
            }
            else{
                console.error("Hata oluştu",xhr.status);
            }
        }
    };

    const jsonDATA = JSON.stringify(commentData);
    xhr.send(jsonDATA);
}



sendComment('https://jsonplaceholder.typicode.com/comments',
    {
        postId:1,
        name: "Mehmet",
        email:"memo@gotmail.com",
        body:"mehmet yorum kismina eklendi"

    }
)