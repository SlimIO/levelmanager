// Require Internal Dependencies
const viewComponent = require("../viewComponent.js");

/**
 * @class LevelDB
 * @classdesc LevelDB Component!
 * @extends viewComponent
 */
class LevelDB extends viewComponent {

    /**
     * @constructor
     */
    constructor() {
        super("level-db");
        this.shadowRoot.querySelector(".name").textContent = this.getAttribute("name");
        this.shadowRoot.querySelector(".path").textContent = this.getAttribute("path");

        const db = this.shadowRoot.querySelector(".db");
        db.addEventListener("click", function click() {
            console.log("DB Clicked!");
        });
    }

}

module.exports = LevelDB;
