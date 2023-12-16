function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
      const taskList = document.getElementById('taskList');
      const newTask = document.createElement('li');
      newTask.innerHTML = `
        <input type="checkbox" onchange="completeTask(this)">
        <span>${taskText}</span>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
      `;
      taskList.appendChild(newTask);
      taskInput.value = '';
    }
  }
  
  function completeTask(checkbox) {
    const taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
      taskText.style.textDecoration = 'line-through';
    } else {
      taskText.style.textDecoration = 'none';
    }
  }
  
  function editTask(button) {
    const taskSpan = button.previousElementSibling;
    const newText = prompt('Edit task:', taskSpan.textContent);
    if (newText !== null && newText.trim() !== '') {
      taskSpan.textContent = newText.trim();
    }
  }
  
  function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
  } 