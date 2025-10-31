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

const renderList = () => {
  ul.innerHTML = '';
  todoList.forEach(item => {
    //reset the whole ul before rendering the full list
    
    let li = document.createElement('li');

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `todo-${item.id}`;
    checkbox.checked = item.completed ? true : false;

    let label = document.createElement('label');
    label.innerText = item.task;
    label.htmlFor = `todo-${item.id}`;
    // console.dir(label);

    //Event handling for item clicks
    li.addEventListener('click', event => {
      //alert('Klikkasit minua!!!');
      //console.log("Clicked the", event.target);
      //console.log("TODO list", todoList);
      item.completed = event.target.checked;
      //console.log("Status now: ", event.target.checked);
      console.log('TODO list', todoList);
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    ul.appendChild(li);

    // Step 2: Delete button
    const delButton = document.createElement('button');
    delButton.textContent = 'X';
    li.appendChild(delButton);

    delButton.addEventListener('click', event => {
      // Etsitään poistettavan item index vertaamalla eventin item
      // taulukon itemeihin.
      console.log('Clicked the delete button!');

      const indexOfDeletedItem = todoList.findIndex(
        arrayItem => arrayItem == item
      );
      const deletedItem = todoList.splice(indexOfDeletedItem, 1);

      console.log('Poistettu', deletedItem, 'päivitetty lista', todoList);
      //päivitetään käyttöliittymä
      ul.removeChild(li);
    });
  });

  //Step 3: Display add item dialog
  const addTodoButton = document.querySelector('.add-btn');
  const dialogModal = document.querySelector('dialog');
  const inputTodoText = dialogModal.querySelector('input');
  const form = dialogModal.querySelector('form');

  addTodoButton.addEventListener('click', event => {
    console.log('Add button clicked!');

    //Display dialog;
    dialogModal.showModal();

    form.addEventListener('submit', event => {
      event.preventDefault(); //prevents the page from reloading automatically
      const todoText = inputTodoText.value.trim();

      if (todoText) {
        console.log('New TODO added; ', todoText);
        const newTodo = {
          //Checks the last id of the todo item in the list and + 1
          id: todoList[todoList.length - 1].id + 1,
          task: todoText,
          completed: false,
        };
        todoList.push(newTodo);
        inputTodoText.value = '';
        dialogModal.close();
        renderList();
        console.log('Updated todolist:', todoList);
      }
    });
    
  });
};

renderList();
