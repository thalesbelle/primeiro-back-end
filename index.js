const express = require('express');
const app = express();
const path = require('path');
let avaliacoes = [
    { id: 1, desc: 'Amei a página!' },
    { id: 2, desc: 'Parabéns :)'}
];

app.use(express.static(path.join(__dirname,'src')));
app.use(express.json());

app.get('/', async (req,res) => {
    res.sendFile(path.join(__dirname,'src', 'index.html'));
});

app.get('/avaliacao', (req, res) => {
    res.json(avaliacoes);
});

app.get('/saibamais', async (req,res) => {
    res.sendFile(path.join(__dirname,'src', 'saibamais.html'));
});

app.post('/avaliacao', (req,res) =>{
    const novo = {id: avaliacoes.lenght +1, desc: req.body.av}
    avaliacoes.push(novo);
    res.status(201).json(novo);
});

app.listen(8082, () => {
    console.log('Servidor iniciadp na porta 8082: http://localhost:8082');
});
