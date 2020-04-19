document.addEventListener("DOMContentLoaded", function(event) {
    const todoItemField = document.querySelector('#todo-item-field');
    const btnAdd = document.querySelector('#btn-add');
    const todoList = document.querySelector('#todo-list');

    const todoItems = ['Todo item 1', 'Todo item 2', 'Todo item 3', 'Todo item 4', 'Todo item 5'];

    let initialTodoItemsList = '';

    for (let item of todoItems) {
        initialTodoItemsList += `<li class="todo-item mb-1">${item} <button type="button" class="btn btn-danger btn-sm del-btn">Del</button></li>`;
    }

    document.addEventListener('click',function (event) {
        let eventTarget = event.target;

        if (eventTarget.classList.contains('del-btn')) {
            eventTarget.closest('li').remove();
        }
    });

    todoList.innerHTML = initialTodoItemsList;

    btnAdd.addEventListener('click',function () {
        if (todoItemField.value.trim()) {
            todoList.innerHTML += (`<li class="todo-item mb-1">${todoItemField.value} <button type="button" class="btn btn-danger btn-sm del-btn">Del</button></li>`)
            todoItemField.value = '';
        } else {
            alert('You should enter todo item text');
        }
    });
});