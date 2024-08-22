import express from 'express';
import datahora from './dataHora.js';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const responseData = {
        datahora: datahora.dataHoraAtual()
    };
    res.json(responseData);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});