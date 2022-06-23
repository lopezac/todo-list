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
    
    const projectHeader = document.querySelector(".project-header");
    const editProjectHeaderBtn = document.querySelector(".project-header > .edit");
    const deleteProjectHeaderBtn = document.querySelector(".project-header > .delete");

    const start = () => {
        addTaskBtn.addEventListener("click", () => toggleHiddenDiv(taskFormDiv));
        addProjectBtn.addEventListener("click", () => toggleHiddenDiv(projectFormDiv));
        listenCloseForm();
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

        const expandPara = document.createElement("p");
        expandPara.textContent = "Expand";
        expandPara.classList.add("expand");

        const editPara = document.createElement("p");
        editPara.textContent = "Edit";
        editPara.classList.add("edit");

        const deletePara = document.createElement("p");
        deletePara.textContent = "Delete";
        deletePara.classList.add("delete");

        article.append(name, checkBox, expandPara, editPara, deletePara);
        return article;
    }

    const createProjectHeader = project => {
        const title = document.createElement("h1");
        title.textContent = project.title;

        editProjectHeaderBtn.classList.remove("hidden");
        deleteProjectHeaderBtn.classList.remove("hidden");
        
        projectHeader.append(title);
    };
 
    const deleteChildren = (parent) => {
        while (parent.lastChild) {
            parent.removeChild(parent.lastChild);
        }
    };

    const updateTaskForm = projects => {
        const projectsTaskForm = document.querySelector("#project-select");
        const projectsEditTaskForm = document.querySelector("#project-select-edit");

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
        projectHeader.removeChild(projectHeader.querySelector("h1"));
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

    const fillEditForm = task => {
        for (const row of editTaskForm) {
            if (row.type === "button") continue;
            const name = row.name;
            if (row.name === "project") row.value = task[name].title;
            else row.value = task[name];
        }
    };

    start();

    return {start, updateProjectsDiv, closeForm, updateTaskForm, findTask,
        updateTasksView, createProjectHeader, deleteProject, deleteTask,
        toggleHiddenDiv, toggleEditProjectForm, toggleEditTaskForm, fillEditForm};
})();

export default ui;