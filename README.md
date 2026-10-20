# Kevin Kiplangat – Portfolio

Personal portfolio of Kevin Kiplangat, Data Analyst and Product Operations Associate based in Nairobi, Kenya.

Built with **TypeScript** end to end:

- **Client:** React + Vite + Tailwind CSS (`src/`)
- **Server:** Express API (`server/`)
- **Shared types:** `shared/types.ts`, used by both

## Run locally

```bash
npm install
npm run dev            # Express on :5050 + Vite on :5173 (proxies /api)
```

To enable the contact form, create a `.env` file in the project root with your SMTP settings (it is git-ignored):

```
PORT=5050
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=<your Gmail address>
SMTP_PASS=<Gmail App Password>
CONTACT_TO=<address that receives messages>
```

Open http://localhost:5173.

## Production

```bash
npm run build   # builds the React app to dist/ and the server to dist-server/
npm start       # Express serves the API and the built React app on $PORT (default 5050)
```

## API

| Method | Route | Description |
| --- | --- | --- |
| GET | `/api/health` | Health check |
| GET | `/api/portfolio` | All portfolio content |
| GET | `/api/portfolio/:section` | One section: `profile`, `experience`, `skills`, `projects`, `education`, `certifications` |
| POST | `/api/contact` | Sends a contact message (`name`, `email`, `subject`, `message`) by email via SMTP. Rate limited to 5 per IP per 15 minutes |

## Updating content

All content lives in `shared/portfolio.ts`. The client bundles it directly, so the page renders without waiting on the API. The hero copy, "My story" paragraphs (`**word**` adds a highlighter mark) and the "Right now" card are all in `profile`.

Set `VITE_SITE_URL` (for example in Vercel's environment variables) to the deployed URL so LinkedIn/WhatsApp/X link previews get absolute image URLs. To show a "Verify Credential" button, add a `link` to a certification. To show project buttons, add `liveLink` / `githubLink` to a project.

The resume download is `public/assets/files/Kevin-Kiplangat-Resume.pdf` and the profile photo is `public/assets/images/kevin.png`.

The previous static version of the site is kept in `legacy/`.
