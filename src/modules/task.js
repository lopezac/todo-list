const task = (title, description, dueDate, priority, notes, project) => {
    let checked = false;
    
    return {title, description, dueDate, priority, notes, project, checked};
};

export default task;