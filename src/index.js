import "modern-normalize";
import "./index-style.css";
import task from "./modules/task.js";
import project from "./modules/project.js";
import ui from "./modules/ui.js";
import todoList from "./modules/todoList.js";

const page = ((task, project, ui, todoList) => {
    const start = () => {
        // ui.start();
    };

    const listenSubmitFormBtns = () => {
        const submitFormBtns = document.querySelectorAll(".submit-form-btn");
        for (const btn of submitFormBtns) {
            btn.addEventListener("click", () => submitForm(btn));
        }
    };

    const submitForm = btn => {
        // refactor this into reusable method like getBtn'sForm(btn)
        const form = btn.parentNode.parentNode;
        const data = new FormData(form);
        if (form.classList.contains("project-form")) {
            todoList.createProject(data);
        } else if (form.classList.contains("task-form")) {
            todoList.createTask(data);
        }
    };
    
    const createTask = data => {
        const task = taskManager.create(data);
        const project = projectManager.find(task.project.title);
        project.addTask(task);
        projectManager.addProject(project);
        updateViews();
    };

    const updateViews = () => {

    };

    start();
})(task, project, ui, todoList);