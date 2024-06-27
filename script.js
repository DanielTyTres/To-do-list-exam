const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-check');
        checkbox.addEventListener('change', () => {
            taskItem.classList.toggle('completed');
        });

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        taskContent.classList.add('task-content');

        const btnContainer = document.createElement('div');
        btnContainer.classList.add('btn-container');

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Editar';
        editBtn.classList.add('edit-btn');
        editBtn.addEventListener('click', () => {
            const newText = prompt('Editar tarea:', taskContent.textContent);
            if (newText !== null) {
                taskContent.textContent = newText;
            }
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            taskItem.remove();
        });

        btnContainer.appendChild(editBtn);
        btnContainer.appendChild(deleteBtn);

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskContent);
        taskItem.appendChild(btnContainer);

        taskList.appendChild(taskItem);

        taskInput.value = '';
    }
}

addTaskBtn.addEventListener('click', addTask);