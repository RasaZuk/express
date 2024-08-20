import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    return res.send('Naujas rytas!')
});

app.get('/about', (req, res) => {
    return res.send('Naujas puslapis')
});

app.get('/*', (req, res) => {
    return res.send('Atidaro nauja puslapi nors kelyje irasyta tik zvaigzdute')
});

app.listen(port, () => {
    console.log(`App running on : http://localhost:${port}`)
});