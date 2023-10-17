// task model
// {
//   id: number,
//   title: string,
//   isCompleted: boolean,
//   createdAt: DateTime
// }

let tasksList = [];
let edit_item = null;
//let tasksList = [];
let taskId = 0;
  let objStr = localStorage.getItem('todo');
  let list = document.querySelector(".tasks-list");
  if(objStr!==null){
    tasksList = JSON.parse(objStr)
  }

   //tasksList = ls? JSON.parse(ls):tasksList;
//let isEditable = false;
//let activeId = -1;


const userInput = document.getElementById("user-input");

displayItem();
const keyPressListener = (event) => {
  if (event.key === "Enter") {
    // add task
    if(userInput.value==''){
      alert('Please Enter Value');
      return;
    }
    const { value } = document.getElementById("user-input");
    const obj = {
      id: ++taskId,
      title: value,
      isCompleted: false,
      createdAt: new Date().toLocaleDateString(),
    };
    if(edit_item!=null){
     tasksList.splice(edit_item,1,obj)
     edit_item = null
    }
    else{
      
      tasksList.push(obj);
      localStorage.setItem('todo',JSON.stringify(tasksList))
    }
   
   

    // if (!isEditable) {
       addTask(tasksList);
    
    // } else {
    //   updateText(value);
    // }
  }
};

// adding an event listener
document.addEventListener("keypress", keyPressListener);

const addTask = (tasksList) => {
  localStorage.setItem('todo',JSON.stringify(tasksList))
   userInput.value = '';
  displayItem();
 
 
 // location.reload();
  
 
  
  //console.log(todo)
 
}


function displayItem(){
  let statment = '';
  tasksList.forEach((val,id)=>{
    statment +=`<li class="task-item"><div class="checkbox" onclick="markAsComplete(${id})"></div>
    <span>${val.title}
    </span>
    <button onclick=" editItem(${id})"><i class="fa-solid fa-pen-to-square icons1"></i></button>
    <button onclick=" deleteItem(${id})"><i class="fa-solid fa-trash icons"></i></button> </li>`
  })//map end
  list.innerHTML=statment;
  
}

// Delete Item
function deleteItem(id){
  let confirmMessage = confirm('Are You Soure You Want To Delete this item')
 if(confirmMessage){
  tasksList.splice(id,1)
 addTask(tasksList);
 displayItem();
 }

}

// Edit Item
function editItem(id){
  edit_item  = id;
  userInput.value = tasksList[id].title
  
}

 // let todoData = JSON.stringify(tasksList)
  // tasksList.push(todoData);
  //localStorage.setItem('todo-app',todoData)
 

  // const currentId = obj.id;

  // // create a new list item (li)
  // const taskItem = document.createElement("li");

  // // taskItem.classList.add("task-item")
  // taskItem.className = "task-item";
  // taskItem.id = `item_${currentId}`;

  // // inner text set
  // taskItem.innerHTML = `<div class="checkbox" onclick="markAsComplete(${currentId})"></div>
  //   <span>${obj.title}
  //   </span>
  //   <button id="edit_${currentId}" onclick="updateTask(${currentId})">Edit</button>
  //   <button onclick="deleteTask(${currentId})">Delete</button>`;

  // // acces list (ul)
  // const list = document.querySelector(".tasks-list");

  // // append the new li to existing ul
  // list.appendChild(taskItem);

 // resetInputField();


//  let x = localStorage.getItem('todo-app')
//  console.log(JSON.parse(x))

  // fullToDoData.map(val=>{
  // const taskItem = document.createElement("li");

  // // taskItem.classList.add("task-item")
  // taskItem.className = "task-item";
  // taskItem.innerHTML = `<div class="checkbox"></div>
  //   <span>${val.title}
  //   </span>
  //   <button>Edit</button>
  //   <button>Delete</button>`;
  //   // acces list (ul)
  // const list = document.querySelector(".tasks-list");

  // // append the new li to existing ul
  // list.appendChild(taskItem);
  // })


  


// // prepare the code for editing the task
// const updateTask = (id) => {
//   const currentTask = tasksList.find((t) => t.id === id);

//   userInput.value = currentTask.title;
//   isEditable = true;
//   activeId = id;
// };

// // values modification in terms of UI
// const updateText = (taskText) => {
//   const currentTask = tasksList.find((t) => t.id === activeId);

//   currentTask.title = taskText;

//   const activeSpan = document.querySelector(`#item_${activeId} span`);

//   activeSpan.innerText = taskText;

//   isEditable = false;

//   resetInputField();
// };


// // mark as complete functionality

const markAsComplete = (id) => {
// alert(id)
  let currentTask = tasksList.findIndex((t) =>{
    if( t.id === id+1){
      //console.log(currentTask)
      //currentTask.isCompleted = !currentTask.isCompleted;
     // console.log(currentTask)
   
      let liactiveColor = document.querySelector(`.task-item`);
         liactiveColor.classList.toggle('liactive-Color')
   
     // // // 1.get desired list item
   
    //const activeCheckbox = document.querySelector(`#item_${id} .checkbox`);
    const activeCheckbox = document.querySelector(`.checkbox`);
    
    activeCheckbox.setAttribute('id', `#item_${id}`);
    
   
      activeCheckbox.classList.toggle("checkbox-filled");
   
     const currentTaskItem = document.querySelector(`.checkbox`);
    currentTaskItem.classList.toggle("completed");
    }
  });
  
};

// reset all 
function resetAll(){
  localStorage.removeItem("todo");
 // addTask(tasksList)
 location.reload();
}
// const deleteTask = (id) => {
//   const index = tasksList.findIndex((t) => t.id === id);

//   tasksList.splice(index, 1);

//   const currentTaskItem = document.querySelector(`#item_${id}`);
//   currentTaskItem.remove();
// };
