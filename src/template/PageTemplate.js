import { headerData } from "../data/headerData.js";

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
        let navbarHTML = ``;

        for (const item of headerData) {
            if (item.subMenu) {

                let subMenuHTML = '';

                for (const subItem of item.subMenu) {
                    if (subItem.subMenu) {

                        let subSubMenuHTML = ``;

                        for (const subSubItem of subItem.subMenu) {
                            if (subSubItem) {
                                subSubMenuHTML += `<li><a href="${subSubItem.href}">${subSubItem.text}</a></li>`
                            }
                        }

                        subMenuHTML += `
                        <li class="sub-dropdown">
                            <a href="${subItem.href}">${subItem.text}<i class="subMenu-angle fa fa-angle-right"></i></a>
                            <div class="sub-dropdown-list underline"><ul>${subSubMenuHTML}</ul></div>
                        </li>`;

                    } else {
                        subMenuHTML += `<li class="sub-dropdown underline"><a href="${subItem.href}">${subItem.text}</a></li>`
                    }
                };

                navbarHTML += `
            <div class="dropdown">
                <a href="${item.href}">${item.text}<i class="subMenu-angle fa fa-angle-down"></i></a>
                <div class="dropdown-list"><i class="top-angle fa fa-caret-up"></i><ul>${subMenuHTML}</ul></div>
            </div>`;
            } else {
                navbarHTML += `<div class="dropdown"><a href="${item.href}">${item.text}</a></div>`;
            }
        }

        return `
    <div class="container-header">
        <div class="row">
            <header>
                <div class="col-10 m-1 headeris">
                    <div>
                        <a href = "#"><img class="logo" src="/img/logo-dark.svg" alt="logo" ></a>
                    </div>
                    <nav class="navbar">
                        <div class="main-navbar">
                        ${navbarHTML}
                        </div>
                    </nav>
                    <div class="mobile-navbar">
                        <div class="mobile-menu">
                            <div class="menu-header">
                                <i class="menu-return fa fa-angle-left"></i>
                                <span class="menu-title"></span>
                                <i class="menu-close fa fa-times"></i>
                            </div>
                            <div class="mobile-menu-links">
                                ${navbarHTML}
                            </div>
                        </div>
                        <div class="blackout"></div>
                            <button class="pink baltas none480px"> Get started</button>
                            <span class="mobile-menu-trigger fa fa-bars"></span>
                        </div>
                    </div>
            </header>
        </div>
    </div>`;
    }

    headerAuth() {
        let navbarHTML = ``;

        for (const item of headerData) {
            if (item.subMenu) {

                let subMenuHTML = '';

                for (const subItem of item.subMenu) {
                    if (subItem.subMenu) {

                        let subSubMenuHTML = ``;

                        for (const subSubItem of subItem.subMenu) {
                            if (subSubItem) {
                                subSubMenuHTML += `<li><a href="${subSubItem.href}">${subSubItem.text}</a></li>`
                            }
                        }

                        subMenuHTML += `
                        <li class="sub-dropdown">
                            <a href="${subItem.href}">${subItem.text}<i class="subMenu-angle fa fa-angle-right"></i></a>
                            <div class="sub-dropdown-list underline"><ul>${subSubMenuHTML}</ul></div>
                        </li>`;

                    } else {
                        subMenuHTML += `<li class="sub-dropdown underline"><a href="${subItem.href}">${subItem.text}</a></li>`
                    }
                };

                navbarHTML += `
            <div class="dropdown">
                <a href="${item.href}">${item.text}<i class="subMenu-angle fa fa-angle-down"></i></a>
                <div class="dropdown-list"><i class="top-angle fa fa-caret-up"></i><ul>${subMenuHTML}</ul></div>
            </div>`;
            } else {
                navbarHTML += `<div class="dropdown"><a href="${item.href}">${item.text}</a></div>`;
            }
        }

        return `
    <div class="container-header">
        <div class="row">
            <header>
                <div class="col-10 m-1 headeris">
                    <div>
                        <a href = "#"><img class="logo" src="/img/logo-dark.svg" alt="logo" ></a>
                    </div>
                    <nav class="navbar">
                        <div class="main-navbar">
                        ${navbarHTML}
                        </div>
                    </nav>
                    <div class="mobile-navbar">
                        <div class="mobile-menu">
                            <div class="menu-header">
                                <i class="menu-return fa fa-angle-left"></i>
                                <span class="menu-title"></span>
                                <i class="menu-close fa fa-times"></i>
                            </div>
                            <div class="mobile-menu-links">
                                ${navbarHTML}
                            </div>
                        </div>
                        <div class="blackout"></div>
                            <button class="pink baltas none480px"> Get started</button>
                            <span class="mobile-menu-trigger fa fa-bars"></span>
                        </div>
                    </div>
            </header>
        </div>
    </div>`;
    }

    main() {
        return `
        Content
        `
    }

    footer() {
        return `
            <footer class="container">
      <div class="row">
        <div class="footer-top">
          <div class="footer-about">
            <h1>Let's embark on a IT services together!</h1>
            <img class="spinning-star" src="/img/shape1.png" alt="logo" />
          </div>
          <div class="arrow-up">
            <a href="#">&#8594;</a>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="socials col-md-12 col-xl-4">
            <img src="/img/logo-dark.svg" alt="logo" />
            <p>Sofax has many plans for the future to work with great clients and continue to work with agencies.</p>
            <div class="social-links">
              <a href="#" target="_blank">
               <img src="/img/x.png" alt="X">
              </a>
              <a href="#" target="_blank" class="fa fa-facebook"></a>
              <a href="#" target="_blank" class="fa fa-instagram"></a>
              <a href="#" target="_blank" class="fa fa-linkedin"></a>
            </div>
          </div>
          <div class="company col-12 col-md-3 m-md-0 m-lg-1 col-xl-3 m-xl-0">
            <p>Company</p>
            <ul>
              <li><a href="./about-us-new">About Us</a></li>
              <li><a href="./contact-us-new">Contact US</a></li>
              <li><a href="./contact-us-new">Privacy Policy</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
            </ul>
          </div>
          <div class="utility col-12 col-md-3 col-xl-2">
            <p>Utility pages</p>
            <ul>
              <li><a href="./contact-us-new">Instructions</a></li>
              <li><a href="./contact-us-new">Style guide</a></li>
              <li><a href="#">404 Pages</a></li>
              <li><a href="./contact-us-new">Licenses</a></li>
            </ul>
          </div>
          <div class="subscribe col-12 col-md-4 col-xl-3">
            <p>Subscribe to our newsletter</p>
            <form class="form">
              <input class="white" type="email" placeholder="Enter your email" name="email" id="email" maxlength="50" required />
              <button class="pink" type="submit">Subscribe now</button>
            </form>
          </div>
        </div>
        <div class="copy-right col-12">
          <p>© 2025 Mthemeus All Rights Reserved.</p>
        </div>
      </div>
    </footer>`;
    }

    footerAuth() {
        return `
            <footer class="container">
      <div class="row">
        </div>
        <div class="footer-bottom">
          <div class="socials col-md-12 col-xl-4">
            <img src="/img/logo-dark.svg" alt="logo" />
            <p>Sofax has many plans for the future to work with great clients and continue to work with agencies.</p>
          </div>
          <div class="company col-12 col-md-3 m-md-0 m-lg-1 col-xl-3 m-xl-0">
            <p>Company</p>
            <ul>
              <li><a href="./about-us-new">About Us</a></li>
              <li><a href="./contact-us-new">Contact US</a></li>
              <li><a href="./contact-us-new">Privacy Policy</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
            </ul>
          </div>
          <div class="utility col-12 col-md-3 col-xl-2">
            <p>Utility pages</p>
            <ul>
              <li><a href="./contact-us-new">Instructions</a></li>
              <li><a href="./contact-us-new">Style guide</a></li>
              <li><a href="#">404 Pages</a></li>
              <li><a href="./contact-us-new">Licenses</a></li>
            </ul>
          </div>
        </div>
        <div class="copy-right col-12">
          <p>© 2025 Mthemeus All Rights Reserved.</p>
        </div>
      </div>
    </footer>
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
      <body">
        ${this.pageType === 'default' ? this.header() : this.headerAuth()}
        <main>${this.main()}</main>
        ${this.pageType === 'default' ? this.footer() : this.footerAuth()}
        ${this.script()}
      </body>
    </html>
        `
    }
}