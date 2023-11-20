import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';

const app = express();
const port = 3001;
const db = new sqlite3.Database('src/database/mediCare.db');

app.use(cors());

// Rota para obter todos os médicos
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

// Rota para pesquisar médicos
app.get('/api/search', (req, res) => {
  const search = req.query.termo;
  console.log('Recebida solicitação para /api/doctors');

  db.all(
    'SELECT * FROM Doctors WHERE name LIKE ? OR specialty LIKE ?',
    [`%${search}%`, `%${search}%`],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Erro ao pesquisar no banco de dados' });
      }

      res.json(rows);
    }
  );
});

app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});
