const addBtn = document.querySelector(".add");
const container = document.querySelector(".task-container");

const importantContainer = document.querySelector(".important-container");
const regularContainer = document.querySelector(".regular-container");

const addToImportantBtn = document.querySelector(".to.imp");
const addToRegularBtn = document.querySelector(".to.reg");


// Create new task
function createTask() {

    const newBox = document.createElement("div");
    newBox.classList.add("write");

    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.placeholder = "TO-DO";
    newInput.classList.add("task-input");

    const actionBtn = document.createElement("button");
    actionBtn.classList.add("action-btn");
    actionBtn.textContent = "Delete";

    // Delete in To-Do
    actionBtn.addEventListener("click", function () {
        newBox.remove();
    });

    newBox.appendChild(newInput);
    newBox.appendChild(actionBtn);

    return newBox;
}


// Add new task
addBtn.addEventListener("click", function () {
    const task = createTask();
    container.appendChild(task);
});


// Convert button to "Task Completed"
function convertToCompleted(taskBox) {

    const btn = taskBox.querySelector(".action-btn");

    btn.textContent = "Task Completed";

    const newBtn = btn.cloneNode(true);
    btn.replaceWith(newBtn);

    newBtn.addEventListener("click", function () {
        taskBox.remove();
    });
}


// Move latest task to Important
addToImportantBtn.addEventListener("click", function () {

    const tasks = container.querySelectorAll(".write");

    if (tasks.length > 0) {
        const lastTask = tasks[tasks.length - 1];
        importantContainer.appendChild(lastTask);
        convertToCompleted(lastTask);
    }
});


// Move latest task to Regular
addToRegularBtn.addEventListener("click", function () {

    const tasks = container.querySelectorAll(".write");

    if (tasks.length > 0) {
        const lastTask = tasks[tasks.length - 1];
        regularContainer.appendChild(lastTask);
        convertToCompleted(lastTask);
    }
});