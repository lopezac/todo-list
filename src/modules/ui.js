const ui = (() => {
    const taskForm = document.querySelector(".task-form");
    const addTaskBtn = document.querySelector(".add-task");
    const projectForm = document.querySelector(".project-form");
    const addProjectBtn = document.querySelector(".add-project");
    const projectsSection = document.querySelector(".project-names");
    const tasksSection = document.querySelector(".tasks-section")

    const start = () => {
        addTaskBtn.addEventListener("click", () => toggleHiddenDiv(taskForm));
        addProjectBtn.addEventListener("click", () => toggleHiddenDiv(projectForm));
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
        toggleHiddenDiv(btn.parentNode.parentNode);
    };

    const updateProjectsDiv = (projects) => {
        deleteChildren(projectsSection);
        for (const project of projects) {
            const projectTitle = document.createElement("p");
            projectTitle.textContent = project.title;
            projectTitle.classList.add("project-name");
            projectTitle.addEventListener("click", updateTasksView(project));
            
            const projectPriority = document.createElement("p");
            projectPriority.textContent = project.priority;

            projectsSection.append(projectTitle, projectPriority);
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

        const editPara = document.createElement("p");
        editPara.textContent = "Edit";

        const deletePara = document.createElement("p");
        deletePara.textContent = "Delete";

        article.append(name, checkbox, expandPara, editPara, deletePara);
        return article;
    }
 
    const deleteChildren = (parent) => {
        while (parent.lastChild) {
            console.log(parent);
            parent.removeChild(parent.lastChild);
        }
    };

    const updateTaskForm = projects => {
        const projectsTaskForm = document.querySelector("#project-select");
        for (const project of projects) {
            const option = document.createElement("option");
            option.value = project.title;
            option.textContent = project.title;

            projectsTaskForm.appendChild(option);
        }
    };

    start();

    return {start, updateProjectsDiv, closeForm, updateTaskForm};
})();

export default ui;