import { PageTemplate } from "../template/PageTemplate.js";
import { members } from "../components/members.js";

export class PageServices extends PageTemplate {
    main() {

        return `
            ${members()}
        `;
    }
}