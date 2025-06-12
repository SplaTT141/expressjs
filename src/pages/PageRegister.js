import { PageTemplate } from "../template/PageTemplate.js";

export class PageRegister extends PageTemplate {

    constructor() {
        super();
        this.isAsideVisible = false;
    }

    main() {
        return `
    <h1>Register page</h1>
    <p>Put you registranio info here:</p>
    <input> Full name</input>
    <input> Age</input>
    `;
    }
}