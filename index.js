import express from 'express';
import { servicesData } from './data/servicesData.js';
import { members } from './data/members.js';
import { students } from './data/students.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    return res.send('Home page');
});

app.get('/about', (req, res) => {
    return res.send('About page');
});

app.get('/services', (req, res) => {
    return res.send('Services page');
});

app.get('/services/:serviceName', (req, res) => {
    if (servicesData.includes(req.params.serviceName)) {
        return res.send(`About "${req.params.serviceName}" service...`);
    }

    return res.send('Services page: such service is not recognized...');
});

app.get('/services/:serviceName/members', (req, res) => {
    if (servicesData.includes(req.params.serviceName)) {
        return res.send(`Paslaugos "${req.params.serviceName}" nariu sarasas...`);
    }

    return res.send('Services page: such service is not recognized...');
});

app.get('/services/:serviceName/members/:memberName', (req, res) => {
    const { serviceName, memberName } = req.params;

    if (!servicesData.includes(serviceName)) {
        return res.send('Services page: such service is not recognized...');
    }

    if (!members.includes(memberName)) {
        return res.send(`Paslaugoje "${serviceName}" nario "${memberName}" nepavyko rasti...`);
    }

    return res.send(`Paslaugos "${serviceName}" nario "${memberName}" informacija...`);
});

app.get('/team', (req, res) => {
    return res.send('Team page');
});

app.get('/team/:name', (req, res) => {
    const members = ['chuck', 'lolo', 'prime', 'xena'];

    if (members.includes(req.params.name)) {
        return res.send(`Team member: "${req.params.name}" all info about this person.`);
    }

    return res.send(`Team member "${req.params.name}" page not found.`);
});

app.get('/img', (req, res) => {
    return res.send('Images...');
});

app.get('/img/logo.png', (req, res) => {
    return res.send('Images: logo.png turinys :P');
});

app.get('/nuolaidos', (req, res) => {
    return res.send('Nuolaidu puslapis');
});

app.get('/nuolaidos/vasaros-nuolaida', (req, res) => {
    return res.send('Vasaros nuolaidos puslapis');
});

app.get('/nuolaidos/rudens-nuolaida', (req, res) => {
    return res.send('Rudens nuolaidos puslapis');
});

app.get('/nuolaidos/ziemos-nuolaida', (req, res) => {
    return res.send('Ziemos nuolaidos puslapis');
});

app.get('/nuolaidos/pavasario-nuolaida', (req, res) => {
    return res.send('Pavasario nuolaidos puslapis');
});

app.get('/nuolaidos/*', (req, res) => {
    return res.send('Gaila, bet tokia nuolaida neveikia');
});

app.get('/students', (req, res) => {

    const quantity = Object.keys(students).length;

    return res.send(`Mokosi ${quantity} studentai: `);
});

app.get('*', (req, res) => {
    return res.send('Ups... 404 page 🛸');
});

app.listen(port, () => {
    console.log(`App running on: http://localhost:${port}`);
});
