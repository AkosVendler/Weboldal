const inputVal = document.getElementsByClassName('inputVal')[0];
const addTaskBtn = document.getElementsByClassName('btn')[0];
const dateVal = document.getElementsByClassName('datum')[0];

addTaskBtn.addEventListener('click', function (){
 
if(inputVal.value.trim()!=0){
	  let localItems = JSON.parse( sessionStorage.getItem('localItem'))
   if(localItems === null){
		taskList = []

   }
   else{
	   taskList = localItems;
   }
   taskList.push(inputVal.value + " " + dateVal.value)
   sessionStorage.setItem('localItem', JSON.stringify(taskList)); 
}

   showItem()
})

function showItem(){
   let localItems = JSON.parse( sessionStorage.getItem('localItem'))
   if(localItems === null){
		taskList = []

   }else{
	   taskList = localItems;
   }


let html = '';
let itemShow = document.querySelector('.todoLists');
taskList.forEach((data, index )=> {
   

   html += `
   <div class="todoList">
   <p class="pText">${data}</p>
   <button class="deleteTask" onClick="deleteItem(${index})"><img src="./trash-solid.svg" alt="kuka"></button>
   </div>
   `
})
itemShow.innerHTML = html;
}
showItem()

function deleteItem(index){
   let localItems = JSON.parse( sessionStorage.getItem('localItem'))
   taskList.splice(index, 1)
   sessionStorage.setItem('localItem', JSON.stringify(taskList));
   showItem()
}

function clearTask(){
   
sessionStorage.clear()
showItem()
}

function Date() {
	const d = new Date();
	d.setDate(d.getDate() + 50);
	document.getElementById("demo").innerHTML = d;
	taskList.push(d.value)
	sessionStorage.setItem('localItem', JSON.stringify(taskList)); 
}
