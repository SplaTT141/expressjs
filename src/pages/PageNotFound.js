import { PageTemplate } from "../template/PageTemplate.js";

export class PageNotFound extends PageTemplate {
    main() {
        return `
    <div style="text-align: center;">
        <h1>404</h1>
        <h4>PAGE NOT FOUND</h4>
    </div>
    `;
    }
}