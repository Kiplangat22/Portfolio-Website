import type { ApiError, ContactMessage, Portfolio } from '../shared/types';

async function request<T>(url: string, init?: RequestInit): Promise<T> {
    const res = await fetch(url, init);
    const body = await res.json().catch(() => null);
    if (!res.ok) {
        throw new Error((body as ApiError | null)?.error ?? `Request failed (${res.status})`);
    }
    return body as T;
}

export const getPortfolio = () => request<Portfolio>('/api/portfolio');

export const sendContactMessage = (message: ContactMessage) =>
    request<{ ok: true }>('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message),
    });
