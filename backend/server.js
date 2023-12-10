import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
const port = process.env.PORT || 8000;
import userRoutes from "./routes/userRoutes.js";

connectDB();

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/api/usuarios', userRoutes);

app.get('/', (req, res) => res.send('Servidor rodando'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));