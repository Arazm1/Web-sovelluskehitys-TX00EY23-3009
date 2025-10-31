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

for(const td of todoList){

  let isChecked;
  if(td.completed){
    isChecked = 'checked';
  }
  else{
    isChecked = '';
  }

  const newItem = `<li><input type="checkbox" id="todo-${td.id}" ${isChecked}><label for="todo-${td.id}">${td.task}</label></li>`;
  ul.insertAdjacentHTML('beforeend', newItem);
}


/*
const ul = document.querySelector('ul');

for (const td of todoList) {
    // create <li>
    const li = document.createElement('li');

    // create <input type="checkbox">
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `todo-${td.id}`;
    checkbox.checked = td.completed; // automatically checked if completed

    // create <label>
    const label = document.createElement('label');
    label.htmlFor = `todo-${td.id}`;
    label.textContent = td.task;

    // append checkbox and label to li
    li.appendChild(checkbox);
    li.appendChild(label);

    // append li to ul
    ul.appendChild(li);
}
*/
