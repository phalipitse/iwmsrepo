// Authentication routes
import { Router } from 'express';

const router = Router();

// POST /api/auth/login
router.post('/login', (req, res) => {
  res.json({
    success: true,
    message: 'Login endpoint (demo)',
    data: {
      token: 'demo-jwt-token',
      user: {
        id: '1',
        email: 'demo@zaniq.com',
        role: 'ADMIN',
      },
    },
  });
});

// POST /api/auth/register
router.post('/register', (req, res) => {
  res.json({
    success: true,
    message: 'Registration endpoint (demo)',
  });
});

// GET /api/auth/me
router.get('/me', (req, res) => {
  res.json({
    success: true,
    data: {
      id: '1',
      email: 'demo@zaniq.com',
      firstName: 'Demo',
      lastName: 'User',
      role: 'ADMIN',
    },
  });
});

export default router;
