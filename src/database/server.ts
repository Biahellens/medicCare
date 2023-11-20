import express, { Request, Response } from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import jwt from 'jsonwebtoken';
import { User } from '../pages/login/userProps'


const app = express();
const port = 3001;
const db = new sqlite3.Database('src/database/mediCare.db');

app.use(cors());
app.use(express.json());

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
  console.log('Recebida solicitação para /api/search');

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

// Rota para pesquisar médicos
app.get('/api/doctor', (req, res) => {
  const data = req.query.id;
  console.log('Recebida solicitação para /api/doctor');

  db.all(
    'SELECT * FROM Doctors WHERE id == ?',
    [`${data}`],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Erro ao pesquisar no banco de dados' });
      }

      res.json(rows);
    }
  );
});

// Rota para inserir agendamentos
app.post('/api/appointments', async (req: Request, res: Response) => {
  console.log('Request body:', req.body);
  try {
    const requestBody = req.body as any;

    if (
      requestBody &&
      'doctorId' in requestBody &&
      'userId' in requestBody &&
      'medicalPlan' in requestBody &&
      'email' in requestBody &&
      'phone' in requestBody &&
      'medical_Appointment' in requestBody
    ) {
      const {
        doctorId,
        userId,
        medicalPlan,
        email,
        phone,
        medical_Appointment,
      } = requestBody;

      const result = await new Promise<{ lastID: number }>((resolve, reject) => {
        db.run(
          'INSERT INTO MedicalAppointment (doctor_id, user_id, medical_plan, email, phone, medical_Appoiment) VALUES (?, ?, ?, ?, ?, ?)',
          [doctorId, userId, medicalPlan, email, phone, medical_Appointment],
          function (err) {
            if (err) {
              reject(err);
            } else {
              resolve({ lastID: this.lastID });
            }
          }
        );
      });

      res.json({
        success: true,
        appointmentId: result.lastID,
      });
    } else {
      res.status(400).json({
        success: false,
        error: 'Invalid request body',
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
    });
  }
});

// Rota para autenticação
app.post('/api/login', async (req: Request, res: Response) => {
  const { email, medicalPlan } = req.body;

  // Consulte o banco de dados para validar as credenciais do usuário
  const query = 'SELECT * FROM Users WHERE email = ? AND medical_plan = ?';
  db.get(query, [email, medicalPlan], (err, user: User) => {
    if (err || !user) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    // Gere um token JWT
    const token = jwt.sign({ userId: user.id, email: user.email }, 'suaChaveSecreta', {
      expiresIn: '1h', // Tempo de expiração do token
    });

    res.json({ token });
  });
});


app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});
