import Project from "./project.js";
import Task from "./task.js";


const todoList = ((Project, Task) => {
    const projects = [];

    const createProject = data => {
        const project = Project(data.title, data.priority);
        saveProject(project);
        return project;
    };

    const saveProject = project => {
        projects.push(project);
    };

    const getProjects = () => {
        return projects;
    };

    const createTask = data => {
        const task = Task(data.title, data.description, data.dueDate,
            data.priority, data.notes, data.project);
        const project = findProject(task.project);
        task.project = project;
        task.project.addTask(task);
        return task;
    }

    const findProject = title => {
        for (const project of projects) {
            if (project.title === title) return project;
        }
    };

    const deleteProject = project => {
        for (let i = 0; i < projects.length; i++) {
            // Maybe try comparing titles instead of objects
            if (projects[i] === project) {
                projects.splice(i, 1);
            }
        }
    }

    const deleteTask = task => {
        const project = task.project;
        console.log(project.tasks);
        console.log(task);
        project.removeTask(task);
        console.log(project.tasks);
    };

    return {createProject, createTask, getProjects, findProject, deleteProject,
            deleteTask};
})(Project, Task);

export default todoList;