import './style.css'; 

const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", () => { addTodo() });

const TODOS = [];

function createTodo({ title, description = "", dueDate = "", priority = "medium", notes = "", checklist = [] }) {
    return {
        id: crypto.randomUUID(),
        title, description, dueDate, priority, notes, checklist,
        completed: false,
    };
}

function addTodo() {
    let newTodo = createTodo({
        title: prompt("Title: "),
        description: prompt("Description: "),
        dueDate: prompt("Due date: "),
    })

    TODOS.push(newTodo);
    console.log(TODOS)
}