import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import { connectDatabase } from './connectMongo.js';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

export { app, connectDatabase };
