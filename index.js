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

const ul = document.querySelector(".js-todo-list-container");
ul.style.backgroundColor = "#d9f99d";
ul.style.padding = "1rem";
ul.style.borderRadius = "1rem";

let todos = todoList.map((todo) => {
  const list = document.createElement("li");
  list.style.margin = "1rem";
  list.style.fontSize = "1.5rem";
  list.textContent = `Title: ${todo.title}, Description: ${todo.description}, Time: ${todo.dueDate}, Priority: ${todo.priority} `;
  return list;
});

ul.append(...todos);
