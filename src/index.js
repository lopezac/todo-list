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

    const listenProjectBtns = (project) => {
        const projectHeader = document.querySelector(".project-header");
        const projectBtns = projectHeader.querySelectorAll("p");

        for (const btn of projectBtns) {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                if (e.target.classList.contains("delete")) deleteProject(project);
                else if (e.target.classList.contains("edit")) editProject(project);
            });
        }
    };

    const listenTaskBtns = () => {
        const taskBtns = document.querySelectorAll(".tasks-section > .task > p");

        for (const btn of taskBtns) {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const taskDiv = e.target.parentNode
                if (e.target.classList.contains("delete")) deleteTask(taskDiv);
                else if (e.target.classList.contains("edit")) editTask(taskDiv);
                // else if (e.target.classList.contains("expand")) expandTask(task);
            });
        }
    };

    const deleteTask = taskDiv => {
        const taskTitle = taskDiv.querySelector("h3");
        const task = currentProject.findTask(taskTitle);
        console.log(task);

        todoList.deleteTask(task);
        ui.deleteTask(taskDiv);
    };

    const editTask = task => {

    };

    const editProject = e => {

    };
    
    const deleteProject = project => {
        todoList.deleteProject(project);
        ui.deleteProject(project);
        if (currentProject === project) currentProject = null;
    };

    const listenSubmitFormBtns = () => {
        const submitFormBtns = document.querySelectorAll(".submit-form-btn");
        for (const btn of submitFormBtns) listenSubmitBtn(btn);
    };
    
    const listenSubmitBtn = btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            submitForm(e.target);
            ui.closeForm(e.target);
        });
    }

    const submitForm = btn => {
        // refactor this into reusable method like getBtn'sForm(btn)
        const form = btn.parentNode.parentNode;
        const data = convertFormData(new FormData(form));

        if (form.classList.contains("project-form")) createProject(data);
        else if (form.classList.contains("task-form")) createTask(data);
    };
    
    const createTask = data => {
        const task = todoList.createTask(data);
        if (currentProject.hasTask(task)) {
            ui.updateTasksView(currentProject)
        } 
        listenTaskBtns();
    };
    
    const createProject = data => {
        const project = todoList.createProject(data);
        const projects = todoList.getProjects();
        currentProject = project;
    
        ui.updateProjectsDiv(projects);
        ui.updateTaskForm(projects);
        ui.createProjectHeader(project);
        listenProjectBtns(project);
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