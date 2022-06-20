import "modern-normalize";
import "./index-style.css";
import ui from "./modules/ui.js";
import todoList from "./modules/todoList.js";

const page = ((ui, todoList) => {
    let currentProject;

    const start = () => {
        // ui.start();
        listenSubmitFormBtns();
    };

    const listenSubmitFormBtns = () => {
        const submitFormBtns = document.querySelectorAll(".submit-form-btn");
        for (const btn of submitFormBtns) {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                submitForm(e.target);
                ui.closeForm(e.target);
            });
        }
    };

    const submitForm = btn => {
        // refactor this into reusable method like getBtn'sForm(btn)
        const form = btn.parentNode.parentNode;
        const data = convertFormData(new FormData(form));

        if (form.classList.contains("project-form")) {
            const project = todoList.createProject(data);
            const projects = todoList.getProjects();
            currentProject = project;

            ui.updateProjectsDiv(projects);
            ui.updateTaskForm(projects);
        } else if (form.classList.contains("task-form")) {
            const task = todoList.createTask(data);
            if (currentProject.hasTask(task)) ui.updateTasksView(currentProject)
        }
    };

    const convertFormData = data => {
        const finalData = {};
        for (let [key, value] of data) {
            finalData[key] = value;
        }
        return finalData;
    };

    start();
})(ui, todoList);