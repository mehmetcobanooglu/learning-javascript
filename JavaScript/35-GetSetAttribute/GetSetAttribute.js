const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href','http://www.youtube.com');
link.textContent="Youtube Sayfasi";

const Cdegistir = document.querySelector('p');
console.log(Cdegistir.getAttribute('class'));
Cdegistir.setAttribute("class","error");
console.log(Cdegistir.getAttribute('class'));
Cdegistir.setAttribute('style', 'font-size:25px');