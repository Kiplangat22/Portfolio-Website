import { Router } from 'express';
import { portfolio } from '../data/portfolio.js';

export const portfolioRouter = Router();

portfolioRouter.get('/', (_req, res) => {
    res.json(portfolio);
});

// Individual sections, e.g. GET /api/portfolio/experience
portfolioRouter.get('/:section', (req, res) => {
    const section = req.params.section as keyof typeof portfolio;
    if (!Object.hasOwn(portfolio, section)) {
        res.status(404).json({ error: `Unknown section "${req.params.section}"` });
        return;
    }
    res.json(portfolio[section]);
});
