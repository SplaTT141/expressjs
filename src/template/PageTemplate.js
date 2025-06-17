export class PageTemplate {
    constructor(req) {
        this.req = req;
        this.pageType = 'default';
        this.isAsideVisible = true;
        this.pageJS = '';
    }

    head() {
        return `
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="/css/main.css">
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
        `;
    }

    header() {
        return `
        <header>
            <img src="/img/logo.jpg" alt="LOGO">
            <nav style="display: flex; gap: 2rem; width: 30%; font-size: 2rem; margin-top: 2rem;">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/register">Register</a>
                <a href="/services">Services</a>
            </nav>
        </header>
        `;
    }

    headerAuth() {
        return `
        <header>
            <img src="/img/logo.jpg" alt="LOGO">
            <nav style="display: flex; gap: 2rem; font-size: 2rem; margin-top: 2rem; background-color:gold;">
                <a href="/">Home</a>
                <a href="/register">Register</a>
            </nav>
        </header>
        `;
    }

    main() {
        return `
        Content
        `
    }

    footer() {
        return `
        <footer>
            <p>
                Pagaminta Lietuvoje &copy; 2025
            </p>
            <nav style="display: flex; gap: 1rem; font-size: 1rem; margin-top: 1rem;">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/register">Register</a>
            </nav>
        </footer>
        `;
    }

    footerAuth() {
        return `
        <footer style="color: red;">
            Pagaminta Lietuvoje &copy; 2025
        </footer>
        `;
    }

    aside() {
        return `
        <aside style="color: gold;">Soninis meniu</aside>
        `;
    }

    script() {
        if (!this.pageJS) {
            return '';
        }

        return `<script src="/js/${this.pageJS}.js" type="module"></script>`;
    }

    render() {
        return `
    <!DOCTYPE html>
    <html lang="en">
    ${this.head()}
      <body style="background-color: aliceblue">
        ${this.pageType === 'default' ? this.header() : this.headerAuth()}
        ${this.isAsideVisible ? this.aside() : ''}
        <main>${this.main()}</main>
        ${this.pageType === 'default' ? this.footer() : this.footerAuth()}
        ${this.script()}
      </body>
    </html>
        `
    }
}