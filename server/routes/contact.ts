import { Router, type Request, type Response, type NextFunction } from 'express';
import type { ContactMessage } from '../../shared/types.js';
import { isMailerConfigured, sendContactEmail } from '../mailer.js';

export const contactRouter = Router();

const LIMITS: Record<keyof ContactMessage, number> = { name: 100, email: 200, subject: 200, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple in-memory rate limit: 5 messages per IP every 15 minutes
const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimit(req: Request, res: Response, next: NextFunction) {
    const key = req.ip ?? 'unknown';
    const now = Date.now();
    const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
    if (recent.length >= MAX_PER_WINDOW) {
        res.status(429).json({ error: 'Too many messages. Please try again later.' });
        return;
    }
    recent.push(now);
    hits.set(key, recent);
    next();
}

function validate(body: unknown): { data?: ContactMessage; error?: string } {
    if (typeof body !== 'object' || body === null) return { error: 'Invalid request body' };
    const input = body as Record<string, unknown>;
    const data = {} as ContactMessage;

    for (const field of Object.keys(LIMITS) as (keyof ContactMessage)[]) {
        const value = input[field];
        if (typeof value !== 'string' || !value.trim()) return { error: `"${field}" is required` };
        if (value.length > LIMITS[field]) return { error: `"${field}" is too long` };
        data[field] = value.trim();
    }
    if (!EMAIL_RE.test(data.email)) return { error: 'Please provide a valid email address' };
    return { data };
}

contactRouter.post('/', rateLimit, async (req, res) => {
    const { data, error } = validate(req.body);
    if (!data) {
        res.status(400).json({ error });
        return;
    }

    if (!isMailerConfigured) {
        console.warn('[contact] SMTP is not configured; message not sent:', data);
        res.status(503).json({ error: 'The contact form is not available right now. Please email me directly.' });
        return;
    }

    try {
        await sendContactEmail(data);
        res.json({ ok: true });
    } catch (err) {
        console.error('[contact] Failed to send email:', err);
        res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
});
