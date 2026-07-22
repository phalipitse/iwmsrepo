// Work Order routes
import { Router } from 'express';

const router = Router();

// GET /api/work-orders
router.get('/', (req, res) => {
  res.json({
    success: true,
    data: [
      {
        id: '1',
        asset: 'Water pump WP-03',
        location: 'South Campus · bulk store',
        issue: 'Potable feed pressure drop',
        priority: 'CRITICAL',
        sla: '1h 05m',
        status: 'OPEN',
      },
      {
        id: '2',
        asset: 'Chiller CH-02',
        location: 'Central Campus',
        issue: 'Lab cold-storage temp rising',
        priority: 'CRITICAL',
        sla: '2h 20m',
        status: 'ASSIGNED',
      },
    ],
  });
});

// GET /api/work-orders/:id
router.get('/:id', (req, res) => {
  res.json({
    success: true,
    data: {
      id: req.params.id,
      asset: 'Water pump WP-03',
      location: 'South Campus',
      issue: 'Potable feed pressure drop',
      priority: 'CRITICAL',
      status: 'OPEN',
    },
  });
});

// POST /api/work-orders
router.post('/', (req, res) => {
  res.status(201).json({
    success: true,
    message: 'Work order created',
    data: { id: 'new-id', ...req.body },
  });
});

export default router;
