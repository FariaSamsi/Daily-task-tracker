const parentTableBody = document.getElementById("tableBody");
let newRow = 0;
let taskList1;
let taskList2;
let taskList3;
let newTaskList1;
let newTaskList2;
let newTaskList3;
// function for taking date input and creating row for each date
function dateUpdate(){
    const dateValue = document.getElementById("dateInput").value;
        if (dateValue === '') {
        alert("You must write something!");
      } 
      else {
        //   Evaluating if the date exists already
        const rowList = document.querySelectorAll(".Rows");
        for (rowItem of rowList){
            const dateItem = rowItem.childNodes[0].innerText;
            if (dateItem=== dateValue){
                newRow = rowItem;
                newTaskList1 = newRow.childNodes[1];
                newTaskList2 = newRow.childNodes[2];
                newTaskList3 = newRow.childNodes[3];
                taskList1 = newTaskList1.childNodes[0];
                taskList2 = newTaskList2.childNodes[0];
                taskList3 = newTaskList3.childNodes[0];

                return;
            }
        }
    newRow = document.createElement("tr");
    const newDate = newRow.insertCell(0);
    newDate.setAttribute("class", "table-success");
    newRow.setAttribute("class", "Rows");
    newDate.innerHTML = dateValue;
    parentTableBody.appendChild(newRow);
    // task list
    taskList1 = document.createElement("ul");
    taskList2 = document.createElement("ul");
    taskList3 = document.createElement("ul");
    newTaskList1 = newRow.insertCell(1);
    newTaskList2 = newRow.insertCell(2);
    newTaskList3 = newRow.insertCell(3);
    newTaskList1.setAttribute("class", "table-danger");
    newTaskList2.setAttribute("class", "table-warning");
    newTaskList3.setAttribute("class", "table-info");
    newTaskList1.appendChild(taskList1);
    newTaskList2.appendChild(taskList2);
    newTaskList3.appendChild(taskList3);
      }


}
// function for updating tasks
function taskUpdate(taskList){
    const taskValue = document.getElementById("taskInput").value;
    if (taskValue === '') {
        alert("You must write something!");
      } 
      else if(newRow==0){
          alert("You must add a date first");
      }
    else {
        const newTask = document.createElement("li");
        newTask.innerHTML = taskValue;
        taskList.appendChild(newTask);
        document.getElementById("taskInput").value = '';
        // marking task by clicking
        newTask.onclick = function(){
            newTask.classList.toggle("checked");

        }
    }
}


document.getElementById("dateButton").addEventListener("click", function(){
    dateUpdate();
})

document.getElementById("toDoTask").addEventListener("click", function(){
    const listNumber = taskList1;
    taskUpdate(listNumber);
})
document.getElementById("doingTask").addEventListener("click", function(){
    const listNumber = taskList2;
    taskUpdate(listNumber);
})
document.getElementById("doneTask").addEventListener("click", function(){
    const listNumber = taskList3;
    taskUpdate(listNumber);
})
// Deleting an entire row by double clicking the date
var itemsList = document.getElementById("tableBody");
itemsList.addEventListener("dblclick", function(event){
    if(event.target.tagName=== 'TD'){
    const parentRow = event.target.parentNode;
    const parentTableBody = parentRow.parentNode;
    parentTableBody.removeChild(parentRow);
    }

})
