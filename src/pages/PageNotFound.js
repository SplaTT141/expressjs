import { PageTemplate } from "../template/PageTemplate.js";

export class PageNotFound extends PageTemplate {
    constructor(req) {
        super(req);
        this.isAsideVisible = false;
    }

    main() {
        // console.log(this.req.params.error);

        return `
            <h1>404</h1>
            <h2>Page "${this.req.url}" not found</h2>
            <h2>Page "${this.req.params.error.join('/')}" not found</h2>
            <a href="/">Back home</a>`;
    }
}