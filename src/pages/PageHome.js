import { PageTemplate } from "../template/PageTemplate.js";
import { hero } from "../components/hero.js";
import { mainRow2 } from "../components/main-row2.js";


export class PageHome extends PageTemplate {
    constructor(req) {
        super(req);
        this.pageJS = 'main';
    }

    main() {
        return `
        ${hero()}
        ${mainRow2()}
        `;
    }
}