// Require Node.JS Dependencies
const { join } = require("path");

// CONSTANTS
const DATA_DIR = join(__dirname, "..", "data");

document.addEventListener("DOMContentLoaded", function domReady() {
    const btnAddDB = document.getElementById("btn_add_db");

    btnAddDB.addEventListener("click", async function btnAddCliked(event) {
        event.preventDefault();
        const projectSettingPath = join(__dirname, "modals", "project-settings.html");
        const BWP = window.open(projectSettingPath, "project-settings");
    });

    const dbList = require(join(DATA_DIR, "db.json"));
    const fragment = document.createDocumentFragment();
    for (const [id, db] of Object.entries(dbList)) {
        const dbElement = document.createElement("level-db");
        dbElement.id = id;
        dbElement.setAttribute("name", db.name);
        dbElement.setAttribute("path", db.path);
        fragment.appendChild(dbElement);
    }
    document.getElementById("dbs").appendChild(fragment);
});
