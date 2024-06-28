const projectsList = ["First Project", "Second Project", "Third Project"];

const todoList = [
  {
    title: "Work",
    description: "Refactor code",
    dueDate: "09.00",
    priority: "1",
  },
  {
    title: "Classes",
    description: "Learn english",
    dueDate: "18.00",
    priority: "0",
  },
];

const main = document.querySelector(".todo-container");
main.style.display = "flex";
main.style.gap = "2rem";

const projectsContainer = document.querySelector(".projects-container");
const tasksContainer = document.querySelector(".tasks-container");
projectsContainer.style.width = "50%";
tasksContainer.style.width = "50%";

function styleContainer(elem, bg) {
  elem.style.backgroundColor = bg;
  elem.style.padding = "1rem";
  elem.style.borderRadius = "1rem";
}

//Projects

const projectsListContainer = document.querySelector(
  ".js-projects-list-container"
);
styleContainer(projectsListContainer, "#99f6e4");

let projects = projectsList.map((project) => {
  const list = document.createElement("li");
  list.style.margin = "1rem";
  list.style.fontSize = "1.5rem";
  const btn = document.createElement("button");
  list.appendChild(btn);
  btn.textContent = project;
  btn.style.backgroundColor = "transparent";
  btn.style.borderRadius = "1rem";
  btn.style.border = "1px solid #11111";
  btn.style.padding = "1rem";
  btn.style.cursor = 'pointer'
  btn.style.fontSize = "1.5rem";
  return list;
});

projectsListContainer.append(...projects);

//Tasks
const addBtn = document.querySelector('.js-add-btn')
const todoContainer = document.querySelector(".js-todo-list-container");
styleContainer(todoContainer, "#d9f99d");

let todos = todoList.map((todo) => {
  const list = document.createElement("li");
  list.style.margin = "1rem";
  list.style.fontSize = "1.5rem";
  list.textContent = `Title: ${todo.title}, Description: ${todo.description}, Time: ${todo.dueDate}, Priority: ${todo.priority} `;
  return list;
});

todoContainer.append(...todos);

addBtn.style.backgroundColor = "transparent";
addBtn.style.borderRadius = "1rem";
addBtn.style.border = "1px solid #11111";
addBtn.style.padding = "1rem";
addBtn.style.cursor = 'pointer'
addBtn.style.fontSize = "1.5rem";