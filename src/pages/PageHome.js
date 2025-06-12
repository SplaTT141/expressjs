import { PageTemplate } from "../template/PageTemplate.js";

export class PageHome extends PageTemplate {
    main() {
        const services = ['UX', 'Design', 'Development'];
        let servicesHTML = '';

        for (const service of services) {
            servicesHTML += `<li>${service}</li>`;
        };

        return `
        <h1>Home page</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse iste incidunt rem voluptas. Maiores at, fuga accusantium corporis harum quia laudantium praesentium maxime. Praesentium, iusto?</p>
        <ul>${servicesHTML}</ul>
        `;
    }
}