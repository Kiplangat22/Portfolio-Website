import express from 'express';
import { existsSync } from 'node:fs';
import path from 'node:path';
import app from './app.js';
import { isMailerConfigured } from './mailer.js';

const PORT = Number(process.env.PORT ?? 5000);

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
        console.warn('SMTP is not configured (see README); the contact form will return 503.');
    }
});
