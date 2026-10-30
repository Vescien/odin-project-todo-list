import './style.css'; 

const addBtn = document.querySelector(".add");
const dialog = document.querySelector("#add-dialog");
const cancelBtn = document.querySelector(".btn-cancel");
const form = document.querySelector("#add-form");

const TODOS = [];

addBtn.addEventListener("click", () => { dialog.showModal() });
form.addEventListener("submit", () => {
    const data = Object.fromEntries(new FormData(form));
    TODOS.push(createTodo({
        id: crypto.randomUUID(),
        title: data.title,
        description: data.description,
        dueDate: data.due,
        priority: data.priority,
        notes: data.notes,
        project: data.project,
        completed: form.elements.completed.checked,
    }));
    form.reset();
    console.log(TODOS);
});

cancelBtn.addEventListener("click", () => {
    dialog.close();
    form.reset();
});


function createTodo({ id, title, description, dueDate, priority, notes, completed, project }) {
    return {
        id, title, description, dueDate, priority, notes, completed, project
    };
}