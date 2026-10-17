import nodemailer from 'nodemailer';
import type { ContactMessage } from '../shared/types.js';

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;

export const isMailerConfigured = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS);

const transporter = isMailerConfigured
    ? nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT ?? 465),
        secure: Number(SMTP_PORT ?? 465) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
    })
    : null;

export async function sendContactEmail(msg: ContactMessage): Promise<void> {
    if (!transporter) {
        throw new Error('Mailer is not configured');
    }

    await transporter.sendMail({
        from: `"Portfolio Contact" <${SMTP_USER}>`,
        to: CONTACT_TO || SMTP_USER,
        replyTo: `"${msg.name}" <${msg.email}>`,
        subject: `[Portfolio] ${msg.subject}`,
        text: `From: ${msg.name} <${msg.email}>\n\n${msg.message}`,
    });
}
