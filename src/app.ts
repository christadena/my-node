import express, { Application } from 'express';
import userRoutes from './routes/userRoutes';

const app: Application = express();

app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

export default app;
