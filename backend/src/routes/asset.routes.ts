import { Router } from 'express';
const router = Router();
router.get('/', (req, res) => res.json({ success: true, data: [] }));
router.get('/:id', (req, res) => res.json({ success: true, data: {} }));
export default router;
