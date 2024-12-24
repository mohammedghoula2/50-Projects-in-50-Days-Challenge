const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos') || '[]');

todos.forEach((todo) => addTodo(todo));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoLi = document.createElement('li');
    todoLi.innerHTML = todoText;

    if (todo && todo.completed) {
      todoLi.classList.add('completed');
    }

    todosUL.appendChild(todoLi);

    if (!todo) {
      input.value = '';
    }

    todoLi.addEventListener('click', () => {
      todoLi.classList.toggle('completed');
      updateLS();
    });

    todoLi.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      todoLi.remove();
      updateLS();
    });

    updateLS();
  }
}

function updateLS() {
  const todosEl = document.querySelectorAll('li');
  const todos = [];

  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed'),
    });
  });

  localStorage.setItem('todos', JSON.stringify(todos));
}
