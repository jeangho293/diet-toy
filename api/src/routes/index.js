import { Router } from 'express';

export const globalRouter = Router();

globalRouter.get('/health', async (req, res) => {
  res.json({ data: 'good' });
});
