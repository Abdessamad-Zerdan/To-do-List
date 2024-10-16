document.addEventListener('DOMContentLoaded', () => {
const addTask = (task) => {
    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    newTask.textContent = task;

    const deleteBtn = document.createElement('Button');
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(newTask);

    })

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.id= 'taskCheckbox';

    taskCheckbox.addEventListener('change', () => {
        if (taskCheckbox.checked) {
            newTask.style.textDecoration = 'line-through';
        } else {
            newTask.style.textDecoration = 'none';
        }

    })









    newTask.appendChild(taskCheckbox);

    newTask.appendChild(deleteBtn);

    taskList.appendChild(newTask);

}

document.getElementById('taskBtn').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput.trim()) {
        addTask(taskInput);
        document.getElementById('taskInput').value = '';
    } else{
        alert('Please enter a task!');
    }
    });

    document.getElementById('taskInput').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevents form submission if applicable
            document.getElementById('taskBtn').click(); // Triggers the "Submit" button click
        }
    });

});




