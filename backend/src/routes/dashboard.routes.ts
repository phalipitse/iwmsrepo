import { Router } from 'express';
const router = Router();
router.get('/stats', (req, res) => res.json({
  success: true,
  data: {
    workOrders: { total: 86, critical: 5 },
    spaceUtil: 71,
    residenceOccupancy: 96,
    generators: { ready: 2, refuel: 1 }
  }
}));
export default router;
