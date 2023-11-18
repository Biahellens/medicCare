import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';

const app = express();
const port = 3001;
const db = new sqlite3.Database('mediCare.db');

app.use(cors());

app.get('/api/doctors', (req, res) => {
    console.log('Recebida solicitação para /api/doctors');

    const query = 'SELECT * FROM Doctors';

    db.all(query, [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.json(rows);
    });
});

app.listen(port, () => {
    console.log(`Servidor está ouvindo na porta ${port}`);
});
