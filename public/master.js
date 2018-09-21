// Require Node.JS Dependencies
const { join } = require("path");

// Require Third-Party Dependencies
const modal = require("electron-modal");

document.addEventListener("DOMContentLoaded", function domReady() {
    console.log("DOM Loaded!");

    const btnAddDB = document.getElementById("btn_add_db");
    // const btn_del_db = document.getElementById("btn_add_db");

    btnAddDB.addEventListener("click", async function btnAddCliked(event) {
        event.preventDefault();
        console.log(__dirname);
        const modalEmitter = await modal.open(join(__dirname, "modals", "project-settings.html"), {
            width: 400,
            height: 300
        });
    });
});
