import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
const port = process.env.PORT || 8000;
import userRoutes from "./routes/userRoutes.js";
import * as path from "path";

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/usuarios', userRoutes);
app.get('/', (req, res) => res.send('Servidor rodando'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));