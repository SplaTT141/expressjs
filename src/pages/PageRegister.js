import { PageTemplate } from "../template/PageTemplate.js";

export class PageRegister extends PageTemplate {

    constructor(req) {
        super(req);
        this.isAsideVisible = false;
        this.pageJS = 'register';
    }

    main() {
        return `
    <div class="container">
        <div class="row">
            <h1 class="register-header">Register page</h1>    
            <form class="form">
                <div class="form-row">
                    <label>Username</label>
                    <input id="username" type="text" autofocus></input>
                </div>
                <div class="form-row">
                    <label>Password</label>
                    <input id="password" type="password"></input>
                </div>
                <div class="form-row">
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    </div>
    `;
    }
}