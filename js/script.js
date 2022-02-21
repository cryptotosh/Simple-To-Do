var form=document.getElementById("addForm");
var listItem=document.getElementById("list");

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
    
    document.getElementById("addAlert").style.display=""
})

listItem.addEventListener("click", (e)=>{
    if(e.target.classList.contains("btn-danger")){
        document.getElementById("delAlert").style.display=""
    var li=e.target.parentElement;
    listItem.removeChild(li);
    }
})

function showItems(){
    document.getElementById("itemsAdd").style.display="";
   

    
    

    
    
    
    
//   var input=document.querySelector('input[type="text"]');
//    if(input.v)
//   document.getElementById("addAlert").style.display="";
}

  
//    var addP=document.createElement("p");
//    var addT=document.createTextNode("Item added successfully!");
//    var addR=document.querySelector("#addAlert");
//    addR.replaceChild(p)