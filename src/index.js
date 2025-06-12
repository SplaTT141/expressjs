import express from 'express';
import { PageHome } from './pages/PageHome.js'
import { PageAbout } from './pages/PageAbout.js'
import { PageRegister } from './pages/PageRegister.js'
import { PageNotFound } from './pages/PageNotFound.js'

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send(new PageHome().render()));
app.get('/about', (req, res) => res.send(new PageAbout().render()));
app.get('/register', (req, res) => res.send(new PageRegister().render()));
app.get('/*error', (req, res) => res.send(new PageNotFound().render()));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
