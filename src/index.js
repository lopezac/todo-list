import "modern-normalize";
import "./index-style.css";

const page = (() => {
    const create = () => {
        const header = createHeader();
        const sidebar = createSidebar();
        const content = createContent();
        const footer = createFooter();

        document.body.append(header, sidebar, content, footer);
    };

    const createHeader = () => {
        const header = document.createElement("header");
        header.classList.add("header");

        const addTaskDiv = document.createElement("add-task");
        addTaskDiv.classList.add("add-task");
        addTaskDiv.textContent = "+";

        header.appendChild(addTaskDiv);
        return header;
    };

    const createSidebar = () => {
        const sidebar = document.createElement("div");
        sidebar.classList.add("sidebar");

        const datesProject = document.createElement("section");
        datesProject.classList.add("project-dates");

        const projectsName = document.createElement("section");
        projectsName.classList.add("project-names");

        const sidebarTitle = document.createElement("h1");
        sidebarTitle.textContent = "Todo List";

        const projectsTitle = document.createElement("h2");
        projectsTitle.textContent = "Projects";

        const todayP = document.createElement("p");
        todayP.classList.add("project-title", "today");
        todayP.textContent = "Today";

        const yesterdayP = document.createElement("p");
        yesterdayP.classList.add("project-title", "yesterday");
        yesterdayP.textContent = "Yesterday";

        const weekP = document.createElement("p");
        weekP.classList.add("project-title", "week");
        weekP.textContent = "Next 7 days";

        datesProject.append(todayP, yesterdayP, weekP);
        sidebar.append(sidebarTitle, datesProject, projectsTitle, projectsName);
        return sidebar;
    };

    const createContent = () => {
        const content = document.createElement("main");
        content.classList.add("content");

        return content;
    };

    const createFooter = () => {
        const footer = document.createElement("footer");
        footer.classList.add("footer");

        return footer;
    };

    create();
})();