const ui = (() => {
    const taskForm = document.querySelector(".task-form");
    const addTaskBtn = document.querySelector(".add-task");
    const projectForm = document.querySelector(".project-form");
    const addProjectBtn = document.querySelector(".add-project");

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

    start();

    return {start};
})();

export default ui;