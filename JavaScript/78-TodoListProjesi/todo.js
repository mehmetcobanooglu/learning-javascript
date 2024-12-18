// Tüm Elementleri Seçmek

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");


let todos = [];

runEvents();
function runEvents() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded",pageLoaded);
    secondCardBody.addEventListener("click",removeTodoUI);
    clearButton.addEventListener("click",allTodosEverywhere);
    filterInput.addEventListener("keyup",filter);

}
function filter(e){
    const FilterValue = e.target.value.toLowerCase().trim();
    const todoListesi = document.querySelectorAll(".list-group-item");

    if(todoListesi.length>0){
       todoListesi.forEach(function(todo){
        if(todo.textContent.toLowerCase().trim().includes(FilterValue)){
            todo.setAttribute("style", "display: block");
        }else{
            todo.setAttribute("style", "display: none !important");
        }
       })
    }
    else{
        showAlert("warning", "Filtreleme Yapmak için en az bir todo olmalidiir")
    }

}
function allTodosEverywhere(){
    const todoListesi =document.querySelectorAll(".list-group-item");
    if(todoListesi.length>0){
        //Ekrandan Silme
       todoListesi.forEach(function(todo){
        todo.remove();
       })

       //Storage Silme
       todos=[];
       localStorage.setItem("todos",JSON.stringify(todos));
       showAlert("success", "Başarili Bir Şekilde Silindi")
    }
    else{
        showAlert("warning", "silmek için en az bir kullanici olmalidir!")
    }
}



function removeTodoUI(e){
   if(e.target.className === "fa fa-remove"){
       const todo = e.target.parentElement.parentElement;
       todo.remove();
       //storage dan silme
       removeTodoToStorage(todo.textContent);
       showAlert("success" , "todo Başariyla silindi");
   }
}
function removeTodoToStorage(removeTodo){
    checkTodosFromStorage();
    todos.forEach(function(todo,index){
        if(removeTodo === todo) {
            todos.splice(index,1) // örnek 0 indexi
        }

    });
    localStorage.setItem("todos", JSON.stringify(todos));
}
function pageLoaded(){
    checkTodosFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    })
}
function addTodo(e) {
    const inputText = addInput.value.trim();
    if (inputText == null || inputText == "") {
       showAlert("warning", "Lütfen Boş Birakmayiniz")
    } else {
        //Arayüz Eklemme 
        addTodoToUI(inputText);
        addTodoToStorage(inputText);
        showAlert("success", "Todo Eklendi");
        
       
    }
    
    //storage ekleme
    e.preventDefault();
}

function addTodoToUI(newTodo) {
 
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value="";
    


}

function addTodoToStorage(newTodo){
  checkTodosFromStorage();
  todos.push(newTodo);
  localStorage.setItem("todos",JSON.stringify(todos));
}
function checkTodosFromStorage(){

    if(localStorage.getItem("todos")===null){
        todos = [];

    }
    else{
       todos = JSON.parse(localStorage.getItem("todos"));
    }
}

function showAlert(type,message){
//     <div class="alert alert-warning" role="alert">
//     This is a warning alert-check it out!
// </div>
   const div = document.createElement("div");
   /*div.className="alert alert-" + type;*/
   div.className=`alert alert-${type}`;
   div.textContent = message;
   firstCardBody.appendChild(div);

   setTimeout(function(){ // Uyarı Yazisi 2.5 saniye sonra silinmesi için
    div.remove();
   },2500);
}