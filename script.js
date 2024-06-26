document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const taskInput = document.getElementById('taskInput').value;
    const deadline = document.getElementById('deadline').value;
    const priority = document.getElementById('priority').value;
    
    const taskList = document.getElementById('taskList');
    
    const li = document.createElement('li');
    li.className = `task ${priority.toLowerCase()}`;
    
    li.innerHTML = `
        <div class="details">
            <span><strong>${taskInput}</strong></span>
            <span>Due: ${deadline}</span>
            <span>Priority: ${priority}</span>
        </div>
        <button class="delete">Delete</button>
    `;
    
    taskList.appendChild(li);
    
    document.getElementById('taskForm').reset();
});

document.getElementById('taskList').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});
