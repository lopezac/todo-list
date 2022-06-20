import Project from "./project.js";
import Task from "./task.js";


const todoList = ((Project, Task) => {
    const projects = [];

    const createProject = data => {
        const project = Project(data.title, data.priority);
        saveProject(project);
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
        project.addTask(task);
    }

    const findProject = title => {
        for (const project of projects) {
            if (project.title === title) return project;
        }
    };

    return {createProject, createTask, getProjects};
})(Project, Task);

export default todoList;