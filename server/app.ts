import 'dotenv/config';
import express from 'express';
import { portfolioRouter } from './routes/portfolio.js';
import { contactRouter } from './routes/contact.js';

// The Express API. Used by server/index.ts locally and by api/index.ts on Vercel.
const app = express();

app.set('trust proxy', 1);
app.use(express.json({ limit: '20kb' }));

app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' });
});
app.use('/api/portfolio', portfolioRouter);
app.use('/api/contact', contactRouter);

app.use('/api', (_req, res) => {
    res.status(404).json({ error: 'Not found' });
});

export default app;
