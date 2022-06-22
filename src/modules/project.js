const project = (title, priority) => {
    const tasks = [];

    const addTask = task => {
        tasks.push(task);
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
            if (task.title === taskTitle.textContent) return task;
        }
    }

    return {title, priority, tasks, addTask, removeTask, hasTask, getTask,
        findTask};
};

export default project;