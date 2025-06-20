import { PageTemplate } from "../template/PageTemplate.js";

export class PageLogin extends PageTemplate {

    constructor(req) {
        super(req);
        this.isAsideVisible = false;
        this.pageJS = 'login';
    }

    main() {
        return `
    <div class="container">
        <div class="row">
            <h1 class="register-header">Login page</h1>   
            <div id="success_msg" class="info info-success">SUCCESS</div> 
            <form class="register-form">
                <div class="form-row">
                    <label>Username</label>
                    <input id="username" type="text" autofocus></input>
                    <span id="error_username" class="info info-error">ERROR</span>
                </div>
                <div class="form-row">
                    <label>Password</label>
                    <input id="password" type="password"></input>
                    <span id="error_password" class="info info-error">ERROR</span>
                </div>
                <div class="form-row">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    </div>
    `;
    }
}