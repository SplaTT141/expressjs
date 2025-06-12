export class PageTemplate {
    constructor() {
        this.pageType = 'default';
        this.isAsideVisible = true;
    }

    head() {
        return `
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
        `;
    }

    header() {
        return `
        <header>
            <img src="#" alt="LOGO">
            <nav style="display: flex; gap: 2rem; width: 30%; font-size: 2rem; margin-top: 2rem;">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/register">Register</a>
            </nav>
        </header>
        `;
    }

    headerAuth() {
        return `
        <header>
            <img src="#" alt="LOGO">
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
      </body>
    </html>
        `
    }
}