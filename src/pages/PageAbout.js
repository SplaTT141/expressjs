import { PageTemplate } from "../template/PageTemplate.js";

export class PageAbout extends PageTemplate {

    constructor() {
        super();
        this.pageType = 'notDefault';
    }

    main() {
        return `
    <h1>About page<h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse iste incidunt rem voluptas. Maiores at, fuga accusantium corporis harum quia laudantium praesentium maxime. Praesentium, iustoctetur adipisicing elit. Esse iste incidunt rem voluptas. Maiores at, fuga accusantium corporis harum quia laudantium praesentium maxime. Praesentium, iusto?</p>
    `;
    }
}