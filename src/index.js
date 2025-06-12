import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const services = ['UX', 'Design', 'Development'];
    let servicesHTML = '';

    for (const service of services) {
        servicesHTML += `<li>${service}</li>`
    }

    res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Home page</h1>
    <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis delectus minus quae adipisci iste sunt eius natus, beatae reprehenderit quas odio, non asperiores distinctio inventore alias veritatis nam, et dolore velit maxime cupiditate vel? Dolores, aliquid inventore! Molestiae mollitia
    aliquam quae magnam ducimus corporis veniam. Quam commodi dolore sequi exercitationem, repellat voluptatem nisi odit perspiciatis, iste quod voluptatibus omnis sunt saepe natus, at aut? Quibusdam similique incidunt temporibus debitis? Cupiditate, aliquid perspiciatis. Ex, commodi culpa est
    dignissimos odit quidem quod itaque ab sint, nam quos. Deserunt, quia. Deleniti minima repellat quisquam officia beatae, optio accusamus dolorem exercitationem iste ullam? Explicabo.
    </p>
    <h2>Services</h2>
    <ul>
        ${servicesHTML}
    </ul>
  </body>
</html>
`);
});

app.get('/about', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>About page</h1>
    <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis delectus minus quae adipisci iste sunt eius natus, beatae reprehenderit quas odio, non asperiores distinctio inventore alias veritatis nam, et dolore velit maxime cupiditate vel? Dolores, aliquid inventore! Molestiae mollitia
    aliquam quae magnam ducimus corporis veniam. Quam commodi dolore sequi exercitationem, repellat voluptatem nisi odit perspiciatis, iste quod voluptatibus omnis sunt saepe natus, at aut? Quibusdam similique incidunt temporibus debitis? Cupiditate, aliquid perspiciatis. Ex, commodi culpa est
    dignissimos odit quidem quod itaque ab sint, nam quos. Deserunt, quia. Deleniti minima repellat quisquam officia beatae, optio accusamus dolorem exercitationem iste ullam? Explicabo.
    </p>
  </body>
</html>
`);
});

app.get('/*error', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>404</h1>
    <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis delectus minus quae adipisci iste sunt eius natus, beatae reprehenderit quas odio, non asperiores distinctio inventore alias veritatis nam, et dolore velit maxime cupiditate vel? Dolores, aliquid inventore! Molestiae mollitia
    aliquam quae magnam ducimus corporis veniam. Quam commodi dolore sequi exercitationem, repellat voluptatem nisi odit perspiciatis, iste quod voluptatibus omnis sunt saepe natus, at aut? Quibusdam similique incidunt temporibus debitis? Cupiditate, aliquid perspiciatis. Ex, commodi culpa est
    dignissimos odit quidem quod itaque ab sint, nam quos. Deserunt, quia. Deleniti minima repellat quisquam officia beatae, optio accusamus dolorem exercitationem iste ullam? Explicabo.
    </p>
  </body>
</html>
`);
});

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});