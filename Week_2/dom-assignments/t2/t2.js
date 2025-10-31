// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ul = document.querySelector('ul');

for(let i = 0; i<todoList.length; i++){
  const todo = todoList[i];

  const li = document.createElement('li');

  const input = document.createElement('input');
  const label = document.createElement('label');

  input.type = 'checkbox';
  input.id = 'todo-'+todo.id;
  input.checked = todo.completed;


  label.htmlFor = input.id;
  label.textContent = todo.task;

  ul.appendChild(li);
  li.appendChild(input);
  li.appendChild(label);
}