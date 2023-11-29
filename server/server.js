import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import { connectDatabase } from './connectMongo.js';
import './scheduler.js';
import cors from 'cors';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listings.route.js';
import adminRouter from './routes/admin.route.js';
import completedAuctionsRouter from './routes/completedAuctions.route.js';

const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser())
app.use(cors({ origin: 'http://localhost:3000' }));
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listings', listingRouter);
app.use('/api/admin', adminRouter);
app.use('/api/completedAuctions', completedAuctionsRouter);
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
