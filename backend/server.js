import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use('/api/usuarios', userRoutes);

app.get('/', (req, res) => res.send('Servidor rodando'));

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));