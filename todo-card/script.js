document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');
    const pendingTasksText = document.getElementById('pending-tasks-text');

    // Function to calculate and update pending tasks count
    function updateTaskCount() {
        const totalPending = document.querySelectorAll('.task input[type="checkbox"]:not(:checked)').length;
        if (totalPending === 0) {
            pendingTasksText.textContent = "No tasks pending. Awesome!";
        } else if (totalPending === 1) {
            pendingTasksText.textContent = "1 task pending";
        } else {
            pendingTasksText.textContent = `${totalPending} tasks pending`;
        }
    }

    // Function to create and render a new task DOM element
    function createTaskElement(taskText) {
        if (taskText.trim() === "") return;

        const li = document.createElement('li');
        li.className = 'task';

        const taskContentDiv = document.createElement('div');
        taskContentDiv.className = 'task-content';

        const label = document.createElement('label');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', updateTaskCount);

        const customCheckboxSpan = document.createElement('span');
        customCheckboxSpan.className = 'custom-checkbox';

        const textSpan = document.createElement('span');
        textSpan.className = 'task-text';
        textSpan.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '&times;';
        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault(); // prevent triggering label toggle if applicable
            li.remove();
            updateTaskCount();
        });

        label.appendChild(checkbox);
        label.appendChild(customCheckboxSpan);
        label.appendChild(textSpan);

        taskContentDiv.appendChild(label);
        taskContentDiv.appendChild(deleteBtn);

        li.appendChild(taskContentDiv);
        taskList.appendChild(li);

        // Clear input and update count
        taskInput.value = '';
        updateTaskCount();
    }

    // Handle adding task on '+' button click
    addBtn.addEventListener('click', () => {
        createTaskElement(taskInput.value);
    });

    // Handle adding task on 'Enter' key press
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            createTaskElement(taskInput.value);
        }
    });

    // Attach event listeners to initial static tasks
    function attachEventsToExistingTasks() {
        // Change event on checkboxes
        document.querySelectorAll('.task input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', updateTaskCount);
        });

        // Click event on delete buttons
        document.querySelectorAll('.task .delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const li = e.target.closest('li');
                if (li) {
                    li.remove();
                    updateTaskCount();
                }
            });
        });
    }

    attachEventsToExistingTasks();
    updateTaskCount(); // Initialize count
});
