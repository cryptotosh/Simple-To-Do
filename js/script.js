function showItems(){
    document.getElementById("itemsAdd").style.display="";
}



var form=document.getElementById("addForm");
var listItem=document.getElementById("list");
//var para=document.querySelector('#addAlert');

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    var newItems=document.getElementById("newItems").value;
    //console.log(newItems);
    var li=document.createElement("li");
    li.className="list-group-item";
    li.innerHTML=newItems;
    
    var button=document.createElement("button");
    button.className="btn-danger";
    button.innerHTML="X";
    
    li.appendChild(button);
    listItem.appendChild(li);
    
//    var tBox=document.querySelector('.form-control');
//    tBox.innerHTML="";
//    tBox.setAttribute('placeholder', "");
    var del=document.getElementById('addAlert');
    del.style.display="";

    del.innerHTML="Item added successfully!";
    del.style.color='rgb(0, 128, 0)';
    del.style.borderColor='rgb(0, 128, 0)';

})


listItem.addEventListener("click", (e)=>{
   var del=document.getElementById('addAlert');
    if(e.target.classList.contains("btn-danger")){
        del.innerHTML="Item deleted successfully!";
        del.style.color='rgb(255, 0, 0)';
        del.style.borderColor='rgb(255, 0, 0)';
        
    var li=e.target.parentElement;
    listItem.removeChild(li);

    }
})

 
    

    
    
    
    
