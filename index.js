import express from 'express';
import { servicesRouter } from './router/servicesRouter.js';
import { teamRouter } from './router/teamRouter.js';
import { discountRouter } from './router/discountRouter.js';
import { studentsRouter } from './router/studentsRouter.js';
import { booksRouter } from './router/booksRouter.js';
import { phonesRouter } from './router/phonesRouter.js';
import { apiRouter } from './router/apiRouter.js';

const app = express();
const port = 3000;

// for parsing application/json
app.use(express.json({
    type: 'application/json',
}));
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.send('Home page');
});

app.get('/about', (req, res) => {
    return res.send('About page');
});

app.get('/img', (req, res) => {
    return res.send('Images...');
});

app.get('/img/logo.png', (req, res) => {
    return res.send('Images: logo.png turinys :P');
});

app.use('/api', apiRouter);
app.use('/services', servicesRouter);
app.use('/team', teamRouter);
app.use('/discount', discountRouter);
app.use('/students', studentsRouter);
app.use('/books', booksRouter);
app.use('/phones', phonesRouter);

app.get('*', (req, res) => {
    return res.send('Ups... 404 page 🛸');
});

app.listen(port, () => {
    console.log(`App running on: http://localhost:${port}`);
});
