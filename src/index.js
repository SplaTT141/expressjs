import express from 'express';
import { PageHome } from './pages/PageHome.js'
import { PageAbout } from './pages/PageAbout.js'
import { PageRegister } from './pages/PageRegister.js'
import { PageNotFound } from './pages/PageNotFound.js'
import { PageServices } from './pages/PageServices.js';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => res.send(new PageHome(req).render()));
app.get('/about', (req, res) => res.send(new PageAbout(req).render()));
app.get('/register', (req, res) => res.send(new PageRegister(req).render()));
app.get('/services', (req, res) => res.send(new PageServices(req).render()));
app.get('/*error', (req, res) => res.send(new PageNotFound(req).render()));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
