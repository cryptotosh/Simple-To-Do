function showItems(){
    document.getElementById("itemsAdd").style.display="";
}



const form=document.getElementById("addForm");
const listItem=document.getElementById("list");
//var para=document.querySelector('#addAlert');

function createList (){
    const newItems=document.getElementById("newItems");
    const li=document.createElement("li");
    li.className="list-group-item";
    li.innerHTML=newItems.value;
    newItems.value="";
    newItems.autofocus="";
    
    const button=document.createElement("button");
    button.className="btn-danger";
    button.innerHTML="X";
    
    li.appendChild(button);
    listItem.appendChild(li);
    // newItems.value="";
}


//To create new To-do list
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    createList();
    
    //To display Alert
    const del=document.getElementById('addAlert');
    del.style.display="";

    del.innerHTML="Item added successfully!";
    del.style.color='rgb(0, 128, 0)';
    del.style.borderColor='rgb(0, 128, 0)';
    
    //to remove alert
    setTimeout(()=>{
      return del.className ='hide';
    }, 700);
    del.classList.remove('hide');
});

//Delete to-do list
listItem.addEventListener("click", (e)=>{
   const del=document.getElementById('addAlert');
    if(e.target.classList.contains("btn-danger")){
    if(confirm('Deleted record cannot be retrieved, sure to proceed?')){
            e.target.parentElement.remove();
    }

        del.innerHTML="Item deleted successfully!";
        del.style.color='rgb(255, 0, 0)';
        del.style.borderColor='rgb(255, 0, 0)';
        
        //to remove alert
        setTimeout(()=>{
          return del.className ='hide';
        }, 700);
        del.classList.remove('hide');
        
    const li=e.target.parentElement;
    listItem.removeChild(li);
      
    }
});
