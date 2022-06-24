import "modern-normalize";
import "./index-style.css";
import ui from "./modules/ui.js";
import todoList from "./modules/todoList.js";

const page = ((ui, todoList) => {
    let currentProject;
    let currentTask;

    const start = () => {
        // ui.start();
        listenFormBtns();
        listenProjectBtns();
    };

    const listenProjectBtns = () => {
        const projectHeader = document.querySelector(".project-header");
        const projectBtns = projectHeader.querySelectorAll("p");

        for (const btn of projectBtns) {
            btn.addEventListener("click", listenProjectBtn.bind(this, btn));
        }
    };

    const listenProjectBtn = (btn) => {
        console.log("btn", btn);
        // e.preventDefault();
        if (btn.classList.contains("delete")) deleteProject(currentProject);
        else if (btn.classList.contains("edit")) editProjectForm();
        // }
    };

    const listenTaskBtns = () => {
        const taskBtns = document.querySelectorAll(".tasks-section > .task > p");

        for (const btn of taskBtns) {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const taskDiv = e.target.parentNode
                if (e.target.classList.contains("delete")) deleteTask(taskDiv);
                else if (e.target.classList.contains("edit")) editTaskForm(taskDiv);
                // else if (e.target.classList.contains("expand")) expandTask(task);
            });
        }
    };

    const editTaskForm = taskDiv => {
        const taskTitle = taskDiv.querySelector("h3");
        const task = currentProject.findTask(taskTitle);
        ui.toggleEditTaskForm();
        ui.fillEditTaskForm(task);
        currentTask = task;
    };

    const editTask = data => {
        data.project = todoList.findProject(data.project);
        currentTask.project.replaceTask(currentTask, data);
        ui.updateTasksView(currentProject);
        listenTaskBtns();
    };

    const editProjectForm = () => {
        ui.toggleEditProjectForm();
        ui.fillEditProjectForm(currentProject);
    };

    const editProject = data => {
        for (const [key, value] of Object.entries(data)) {
            currentProject[key] = value;
        }
        ui.updateProjectHeader(currentProject);
        ui.updateProjectsDiv(todoList.getProjects());
    };

    const deleteTask = taskDiv => {
        const taskTitle = taskDiv.querySelector("h3");
        const task = currentProject.findTask(taskTitle);

        todoList.deleteTask(task);
        ui.deleteTask(taskDiv);
    };

    const deleteProject = project => {
        todoList.deleteProject(project);
        ui.deleteProject(project);
        currentProject = null;
        // if (currentProject === project) currentProject = null;
        // currentProject = todoList.getRandomProject();
        ui.updateProjectsDiv(todoList.getProjects());
        ui.updateTasksView(currentProject);
    };

    const listenFormBtns = () => {
        const formBtns = document.querySelectorAll(".form-btn");
        
        for (const btn of formBtns) listenFormBtn(btn);
    };

    const listenFormBtn = btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            decideFormBtn(e.target);
            ui.closeForm(e.target);
        });
    }

    const decideFormBtn = btn => {
        const form = btn.parentNode.parentNode;
        const data = convertFormData(new FormData(form));
        const formDiv = form.parentNode;

        if (btn.classList.contains("submit-form-btn")) {
            submitForm(formDiv, data);
        } else if (btn.classList.contains("edit-form-btn")) {
            editForm(formDiv, data);
        }
    };

    const editForm = (form, data) => {
        if (form.classList.contains("project-form")) editProject(data);
        else if (form.classList.contains("task-form")) editTask(data);
    };

    const submitForm = (form, data) => {
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
        ui.updateProjectHeader(project);
        // listenProjectBtns(project);
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