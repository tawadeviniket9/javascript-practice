/*const newTask = document.querySelector('.newTask');
let tasks = [];

newTask.addEventListener('click', e =>{
    let newTaskInput = document.createElement('input');
    let newTaskLabel = document.createElement('label');
    let newGoalTimeLabel = document.createElement('label');
    let enterGoal = document.createElement('input');
    let breaker = document.createElement('br');
    let achievedLabel = document.createElement('label');
    let createTaskBtn = document.createElement('button');
    
    
    
    createTaskBtn.textContent = 'create task';
    newTaskLabel.innerText = 'Enter Task : ';
    newGoalTimeLabel.innerText = 'Goal : ';
    newTaskInput.placeholder = 'Study,Exercise....';
    enterGoal.placeholder = 'Enter Desired Goal time';
    achievedLabel.innerText = 'Achieved : ';

    document.body.appendChild(newTaskLabel);
    document.body.appendChild(newTaskInput);
    document.body.appendChild(breaker);
    document.body.appendChild(newGoalTimeLabel);
    document.body.appendChild(enterGoal);
    document.body.appendChild(createTaskBtn);

    createTaskBtn.addEventListener('submit', e =>{
        const taskName = newTaskInput.value;
        const goalG = enterGoal.value;
        if (taskName == null || taskName === '') return
        const task = createTaskList(taskName,goalG);
        if (goalG == null || goalG === '') return
        newTaskInput.value = null;
        enterGoal.value = null;
        tasks.push(task);
        saveAndRender();
        
    })
    function createTask(name,goalG) {
        return { id: Date.now().toString(), name: name, goal:goalG , complete: false}
      }

})

function saveAndRender(){
    save();
    renderTask();
}

function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(tasks));
  }

function renderTask(){
    tasks.forEach(task => {
        const taskElement = document.createElement('li');
        taskElement.classList.add("flex-item");
        taskElement.dataset.id = task.id;
        const checkbox = taskElement.querySelector('input');
        checkbox.id = task.id;
        checkbox.checked = task.complete;
        const label = taskElement.querySelector('label');
        label.htmlFor = task.id;
        label.append(task.name);
        task.innerText= task.name;
        document.appendChild(taskElement);
    });
}

  

  function clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild)
    }
  }*/

  
 
  let tasks = [{id:1,
  name: 'Task1',
goal:6},{id:2,
  name: 'Task2',
goal:7},{id:3,
  name: 'Task3',
goal:7}];
  const taskListContainer = document.querySelector('[data-task-list]')
  const taskContainer = document.querySelector('[data-task]')
  const newTaskForm = document.querySelector('[data-new-task-form]');
  const taskName = document.querySelector('[data-new-task-name]');
  const taskGoal = document.querySelector('[data-new-task-goal]');
  const submitTask = document.querySelector('.submitTask');

function render(){
  clearElement(taskListContainer);
  tasks.forEach(task =>{
    const taskElement = document.createElement('label');
    const taskElementLabel = document.createElement('label');
    const goalTaskLabel = document.createElement('label');
    const goalTask = document.createElement('label');
    const breaker = document.createElement('br');
    goalTask.dataset.taskGoal = task.goal;
    taskElement.dataset.taskName = task.name;
    taskElement.classList.add('task-name');
    taskElementLabel.classList.add('task-name');
    goalTaskLabel.classList.add('task-name');
    goalTask.classList.add('task-name');
    taskElementLabel.innerText = "Task Name :";
    goalTaskLabel.innerHTML = 'Goal : ';
    taskElement.innerHTML = task.name;
    goalTask.innerHTML = task.goal + " hrs";
    taskListContainer.appendChild(taskElementLabel);
    taskElementLabel.appendChild(taskElement);
    taskElement.appendChild(breaker);
    taskElementLabel.appendChild(goalTaskLabel);
    taskElementLabel.appendChild(goalTask);
    
    

  })

}


newTaskForm.addEventListener('submit',e =>{
  e.preventDefault();
  const task = createTask(taskName);
  taskName.value = null;
  taskGoal.value = null;
  taskName.focus();
  tasks.push(task);
  render();

})

function createTask(taskName){
  return {id:Date.now.toString(),name:taskName.value, goal:taskGoal.value}
}

function clearElement(element){
  while(element.firstChild){
    element.removeChild(element.firstChild);
  }

}
render();