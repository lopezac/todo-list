import format from 'date-fns/format';

const ui = (() => {
    const taskFormDiv = document.querySelector(".task-form");
    const projectFormDiv = document.querySelector(".project-form");
    
    const editTaskFormDiv = document.querySelector(".task-form.edit-form");
    const editProjectFormDiv = document.querySelector(".project-form.edit-form");
    
    const editTaskForm = editTaskFormDiv.querySelector("form");
    const editProjectForm = editProjectFormDiv.querySelector("form");
    
    const addTaskBtn = document.querySelector(".add-task");
    const addProjectBtn = document.querySelector(".add-project");
    
    const projectsSection = document.querySelector(".project-names");
    const tasksSection = document.querySelector(".tasks-section");
    const taskCheckbox = tasksSection.querySelector(".task > input");
    
    const projectHeader = document.querySelector(".project-header");
    const editProjectHeaderBtn = document.querySelector(".project-header > .edit");
    const deleteProjectHeaderBtn = document.querySelector(".project-header > .delete");
    const projectHeaderTitle = projectHeader.querySelector("h1");

    const start = () => {
        addTaskBtn.addEventListener("click", showTaskForm);
        addProjectBtn.addEventListener("click", () => toggleHiddenDiv(projectFormDiv));
        listenCloseForm();
    };

    const showTaskForm = () => {
        if (projectsSection.childNodes.length > 0) {
            toggleHiddenDiv(taskFormDiv);
        }
    };

    const toggleHiddenDiv = (div) => {
        if (div.classList.contains("hidden")) div.classList.remove("hidden");
        else div.classList.add("hidden");
    };

    const listenCloseForm = () => {
        const closeBtns = document.querySelectorAll(".close-form-btn");
        for (const btn of closeBtns) {
            btn.addEventListener("click", () => closeForm(btn));
        }
    }

    const closeForm = (btn) => {
        toggleHiddenDiv(btn.parentNode.parentNode.parentNode);
    };

    const updateProjectsDiv = (projects) => {
        deleteChildren(projectsSection);
        for (const project of projects) {
            const projectDiv = document.createElement("div");
            projectDiv.classList.add("project");

            const projectTitle = document.createElement("p");
            projectTitle.textContent = project.title;
            projectTitle.classList.add("name");
            projectTitle.addEventListener("click", updateTasksView(project));
            
            const projectPriority = document.createElement("p");
            projectPriority.textContent = project.priority;
            projectPriority.classList.add("priority");

            projectDiv.append(projectTitle, projectPriority);
            projectsSection.appendChild(projectDiv);
        }
    };

    const updateTasksView = (project) => {
        deleteChildren(tasksSection);
        if (project === null) return;
        for (const task of project.tasks) {
            const taskArticle = createTask(task);
            tasksSection.appendChild(taskArticle);
        }
    };

    const createTask = task => {
        const article = document.createElement("article");
        article.classList.add("task");

        const name = document.createElement("h3");
        name.textContent = task.title;

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.name = "checked";
        checkBox.addEventListener("change", markTask);

        const expandPara = document.createElement("p");
        expandPara.textContent = "Expand";
        expandPara.classList.add("expand");

        const editPara = document.createElement("p");
        editPara.classList.add("edit", "icon");

        const deletePara = document.createElement("p");
        deletePara.classList.add("delete", "icon");

        article.append(name, checkBox, expandPara, editPara, deletePara);
        return article;
    }

    const markTask = e => {
        const task = e.target.parentNode;

        if (task.classList.contains("task-checked")) {
            task.classList.remove("task-checked");
        } else {
            task.classList.add("task-checked");
        }
    };

    const updateProjectHeader = project => {
        projectHeaderTitle.textContent = project.title;

        editProjectHeaderBtn.classList.remove("hidden");
        deleteProjectHeaderBtn.classList.remove("hidden");
    };
 
    const deleteChildren = (parent) => {
        while (parent.lastChild) {
            parent.removeChild(parent.lastChild);
        }
    };

    const updateTaskForm = projects => {
        const projectsTaskForm = document.querySelector("#project-select");
        const projectsEditTaskForm = document.querySelector("#project-select-edit");

        deleteChildren(projectsTaskForm);
        deleteChildren(projectsEditTaskForm);

        for (const project of projects) {
            const option = document.createElement("option");
            option.value = project.title;
            option.textContent = project.title;
            const option2 = option.cloneNode(true);

            projectsTaskForm.append(option);
            projectsEditTaskForm.append(option2);

        }
    };

    const deleteProject = project => {
        deleteSidebarProject(project);
        deleteProjectHeader();
    };
    
    const deleteSidebarProject = project => {
        for (const projectNode of projectsSection.childNodes) {
            const projectTitle = projectNode.querySelector(".name").textContent;
            if (projectTitle === project.title) {
                projectsSection.removeChild(projectNode);
            }
        }
    };

    const deleteProjectHeader = () => {
        projectHeaderTitle.textContent = "";
        editProjectHeaderBtn.classList.add("hidden");
        deleteProjectHeaderBtn.classList.add("hidden");
    };

    const deleteTask = task => {
        tasksSection.removeChild(task);
    };

    const findTask = task => {
        for (const taskDiv of tasksSection.childNodes) {
            const taskDivTitle = taskDiv.querySelector("h3").textContent
            if (taskDivTitle === task.title) return taskDiv;   
        }
    };

    const toggleEditTaskForm = () => {
        toggleHiddenDiv(editTaskFormDiv);
    };

    const toggleEditProjectForm = () => {
        toggleHiddenDiv(editProjectFormDiv);
    };

    const fillEditTaskForm = task => {
        for (const row of editTaskForm) {
            if (row.type === "button") continue;
            const name = row.name;
            if (row.name === "project") row.value = task[name].title;
            else row.value = task[name];
        }
    };

    const fillEditProjectForm = project => {
        for (const row of editProjectForm) {
            if (row.type === "button") continue;
            row.value = project[row.name];
        }
    };

    const decideIfExpandTask = (taskDiv, project) => {
        if (taskDiv.querySelector(".description")) shrinkTask(taskDiv);
        else expandTask(taskDiv, project);
    };

    const shrinkTask = taskDiv => {
        const descriptionDiv = taskDiv.querySelector(".description");
        const notesDiv = taskDiv.querySelector(".notes");
        const dueDateDiv = taskDiv.querySelector(".due-date");

        taskDiv.removeChild(descriptionDiv);
        taskDiv.removeChild(notesDiv);
        taskDiv.removeChild(dueDateDiv);
    };

    const expandTask = (taskDiv, project) => {
        const taskTitle = taskDiv.querySelector("h3");
        const task = project.findTask(taskTitle);

        const descriptionDiv = document.createElement("div");
        const descriptionLabel = document.createElement("h4");
        const descriptionPara = document.createElement("p");

        descriptionLabel.textContent = "Description:";
        descriptionPara.textContent = task.description;

        const notesDiv = document.createElement("div");
        const notesLabel = document.createElement("h4");
        const notesPara = document.createElement("p");

        notesLabel.textContent = "Notes:";
        notesPara.textContent = task.notes;

        const dueDateDiv = document.createElement("div");
        const dueDateLabel = document.createElement("h4");
        const dueDatePara = document.createElement("p");

        dueDateLabel.textContent = "dueDate:";
        dueDatePara.textContent = formatDueDate(task.dueDate);

        descriptionDiv.classList.add("description");
        notesDiv.classList.add("notes");
        dueDateDiv.classList.add("due-date");

        descriptionDiv.append(descriptionLabel, descriptionPara);
        notesDiv.append(notesLabel, notesPara);
        dueDateDiv.append(dueDateLabel, dueDatePara);
        taskDiv.append(descriptionDiv, notesDiv, dueDateDiv);
    };

    const formatDueDate = dueDate => {
        const date = format(new Date(dueDate), "PPpp");
        return date;
    };

    start();

    return {start, updateProjectsDiv, closeForm, updateTaskForm, findTask,
        updateTasksView, updateProjectHeader, deleteProject, deleteTask,
        toggleHiddenDiv, toggleEditProjectForm, toggleEditTaskForm, 
        fillEditTaskForm, fillEditProjectForm, decideIfExpandTask};
})();

export default ui;