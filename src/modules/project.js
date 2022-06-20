const project = (title, priority) => {
    const tasks = [];

    const addTask = task => {

    };

    const removeTask = task => {

    };

    const hasTask = task => {
        return tasks.includes(task);
    };

    return {title, priority, tasks, addTask, removeTask, hasTask};
};

export default project;