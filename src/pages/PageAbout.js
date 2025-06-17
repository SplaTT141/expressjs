import { PageTemplate } from "../template/PageTemplate.js";

export class PageAbout extends PageTemplate {

    constructor(req) {
        super(req);
        this.pageType = 'notDefault';
    }

    main() {
        return `
    <h1>About page<h1>
    <h1>About page<h1>
    <p>Lorem ipsum at, fuga accusantium corporis harum quia laudantium praesentium maxime. Praesentium, iusto?</p>`;
    }
}