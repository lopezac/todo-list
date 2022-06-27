const project = (title, priority) => {
    let tasks = [];

    const addTask = task => {
        tasks.push(task);
        return tasks;
    };

    const removeTask = task => {
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i] === task) tasks.splice(i, 1);
        }
    };

    const hasTask = task => {
        return tasks.includes(task);
    };

    const getTask = task => {
        return tasks.find(task);
    };

    const findTask = taskTitle => {
        for (const task of tasks) {
            if (task.title === taskTitle.textContent) {
                return task;
            }
        }
    };

    const replaceTask = (task, newTask) => {
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i] === task) tasks.splice(i, 1, newTask);
        }
    };

    return {title, priority, tasks, addTask, removeTask, hasTask, getTask,
        findTask, replaceTask};
};

export default project;