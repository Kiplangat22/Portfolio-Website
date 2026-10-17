import 'dotenv/config';
import express from 'express';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { portfolioRouter } from './routes/portfolio.js';
import { contactRouter } from './routes/contact.js';
import { isMailerConfigured } from './mailer.js';

const app = express();
const PORT = Number(process.env.PORT ?? 5000);

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

// In production, serve the built React app (npm run build) from the same server
const clientDist = path.resolve(process.cwd(), 'dist');
if (existsSync(clientDist)) {
    app.use(express.static(clientDist));
    app.get('*', (_req, res) => {
        res.sendFile(path.join(clientDist, 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`API server listening on http://localhost:${PORT}`);
    if (!isMailerConfigured) {
        console.warn('SMTP is not configured (see .env.example); the contact form will return 503.');
    }
});
