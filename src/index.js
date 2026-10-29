import './style.css'; 

const addBtn = document.querySelector(".add");
const priority = document.querySelector("#priority");
const datepicker = document.querySelector("#datepicker");
addBtn.addEventListener("click", () => { addTodo() });

const TODOS = [];

function createTodo({ title, description = "", dueDate = datepicker.value, priority = "medium", notes = "", completed = false }) {
    return {
        id: crypto.randomUUID(),
        title, description, dueDate, priority, notes, completed
    };
}

function addTodo() {
    let newTodo = createTodo({
        title: prompt("Title: "),
        description: prompt("Description: "),
        priority: priority.value,
        notes: prompt("Notes: "),
        completed: confirm("Is it completed?: ")
    })

    TODOS.push(newTodo);
    console.log(TODOS)
}