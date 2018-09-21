/**
 * @class viewComponent
 * @extends HTMLElement
 */
class viewComponent extends HTMLElement {
    /**
     * @constructor
     * @param {!String} componentName name of the component
     * @param {Boolean=} [fromImport=false] create template from import or not
     */
    constructor(componentName, fromImport = false) {
        super();
        this.attachShadow({ mode: "open" });
        /** @type {HTMLTemplateElement} */
        let tmpl;
        if (fromImport === true) {
            const link = document.querySelector("link[rel=\"import\"]");
            tmpl = link.getElementById(componentName);
        }
        else {
            tmpl = document.getElementById(componentName);
        }
        this.shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }

}

module.exports = viewComponent;
