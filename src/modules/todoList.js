import Project from "./project.js";
import Task from "./task.js";

import add from "date-fns/add"

const todoList = ((Project, Task) => {
    let projects = [];

    const createProject = data => {
        const project = Project(data.title, data.priority);
        if (data.tasks) project.tasks = data.tasks;
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
        task.project = project.title;
        project.tasks = project.addTask(task);
        console.log("todoList createTask", project.tasks);
        return task;
    }

    const findProject = title => {
        for (const project of projects) {
            if (project.title === title) return project;
        }
    };

    const getDesiredDate = date => {
        const today = new Date(Date.now());
        let todayDate = today.getDate();

        if (date === "tomorrow") todayDate = add(today, {days: 1}).getDate();
        else if (date === "week") todayDate = add(today, {days: 7});

        return todayDate;
    }

    const getTasksFromDate = date => {
        const otherDate = getDesiredDate(date);
        const todayDate = new Date(Date.now());
        const tasksObj = {tasks: []};

        for (const project of projects) {
            for (const task of project.tasks) {
                const taskDate = new Date(task.dueDate);

                if (taskDate.getFullYear() !== todayDate.getFullYear()) continue;

                if ((date === "week") && (taskDate > todayDate) &&
                    (taskDate <= otherDate)) {
                    tasksObj.tasks.push(task);
                } else if (taskDate.getDate() === otherDate) {
                    tasksObj.tasks.push(task);
                }
            }
        }
        return tasksObj;
    };

    const deleteProject = project => {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i] === project) projects.splice(i, 1);
        }
    }

    const deleteTask = (task, project) => {
        project.removeTask(task);
    };

    const updateProjectTasks = project => {
        for (const task of project.tasks) {
            task.project = project.title;
        }
    };

    const saveData = () => {
        localStorage.data = JSON.stringify({projects: projects});
    };

    const loadData = () => {
        const projectsData = JSON.parse(localStorage.data).projects;
        return projectsData;
    };

    const checkIfData = () => {
        return localStorage.data;
    };

    return {createProject, createTask, getProjects, findProject, deleteProject,
            deleteTask, getTasksFromDate, saveData, loadData, checkIfData,
            updateProjectTasks};
})(Project, Task);

export default todoList;