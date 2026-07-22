// ZaniQ IWMS Backend Server
// Node.js + Express + TypeScript + PostgreSQL

import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';

// Load environment variables
dotenv.config();

// Import routes
import authRoutes from './routes/auth.routes';
import workOrderRoutes from './routes/workorder.routes';
import assetRoutes from './routes/asset.routes';
import residenceRoutes from './routes/residence.routes';
import userRoutes from './routes/user.routes';
import dashboardRoutes from './routes/dashboard.routes';

// Import middleware
import { errorHandler } from './middleware/error.middleware';
import { notFound } from './middleware/notfound.middleware';
import { rateLimiter } from './middleware/ratelimit.middleware';

// Import utilities
import { logger } from './utils/logger';
import { prisma } from './utils/prisma';

// Initialize Express app
const app: Application = express();
const PORT = process.env.PORT || 3000;

// Create HTTP server
const httpServer = createServer(app);

// Initialize Socket.IO for real-time updates
const io = new SocketIOServer(httpServer, {
  cors: {
    origin: process.env.CORS_ORIGINS?.split(',') || ['http://localhost:5173'],
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

// ============================================
// MIDDLEWARE
// ============================================

// Security headers
app.use(helmet());

// CORS
app.use(cors({
  origin: process.env.CORS_ORIGINS?.split(',') || ['http://localhost:5173'],
  credentials: true,
}));

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// HTTP request logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined', {
    stream: { write: (message) => logger.info(message.trim()) },
  }));
}

// Rate limiting
app.use(rateLimiter);

// ============================================
// ROUTES
// ============================================

// Health check
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
    version: '2.0.0',
  });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/work-orders', workOrderRoutes);
app.use('/api/assets', assetRoutes);
app.use('/api/residences', residenceRoutes);
app.use('/api/users', userRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Root endpoint
app.get('/', (_req: Request, res: Response) => {
  res.json({
    name: 'ZaniQ IWMS API',
    version: '2.0.0',
    description: 'Integrated Workplace Management System for Higher Education',
    documentation: '/api/docs',
    health: '/health',
    endpoints: {
      auth: '/api/auth',
      workOrders: '/api/work-orders',
      assets: '/api/assets',
      residences: '/api/residences',
      users: '/api/users',
      dashboard: '/api/dashboard',
    },
  });
});

// 404 handler
app.use(notFound);

// Error handler
app.use(errorHandler);

// ============================================
// SOCKET.IO - REAL-TIME UPDATES
// ============================================

io.on('connection', (socket) => {
  logger.info(`Client connected: ${socket.id}`);

  socket.on('disconnect', () => {
    logger.info(`Client disconnected: ${socket.id}`);
  });

  // Room subscriptions
  socket.on('subscribe:work-orders', () => {
    socket.join('work-orders');
    logger.debug(`${socket.id} subscribed to work-orders`);
  });

  socket.on('subscribe:load-shedding', () => {
    socket.join('load-shedding');
    logger.debug(`${socket.id} subscribed to load-shedding`);
  });
});

// Export io for use in other modules
export { io };

// ============================================
// DATABASE CONNECTION
// ============================================

async function connectDatabase() {
  try {
    await prisma.$connect();
    logger.info('✅ Database connected successfully');
  } catch (error) {
    logger.error('❌ Database connection failed:', error);
    process.exit(1);
  }
}

// ============================================
// GRACEFUL SHUTDOWN
// ============================================

async function gracefulShutdown() {
  logger.info('🛑 Shutting down gracefully...');

  // Close database connection
  await prisma.$disconnect();
  logger.info('✅ Database disconnected');

  // Close HTTP server
  httpServer.close(() => {
    logger.info('✅ HTTP server closed');
    process.exit(0);
  });

  // Force shutdown after 10 seconds
  setTimeout(() => {
    logger.error('❌ Forced shutdown after timeout');
    process.exit(1);
  }, 10000);
}

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

// ============================================
// START SERVER
// ============================================

async function startServer() {
  try {
    // Connect to database
    await connectDatabase();

    // Start HTTP server
    httpServer.listen(PORT, () => {
      logger.info(`🚀 ZaniQ IWMS API Server started`);
      logger.info(`📍 Environment: ${process.env.NODE_ENV}`);
      logger.info(`🌐 Server: http://localhost:${PORT}`);
      logger.info(`❤️  Health: http://localhost:${PORT}/health`);
      logger.info(`📡 WebSocket: Ready for real-time updates`);
    });
  } catch (error) {
    logger.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

// Start the server
if (require.main === module) {
  startServer();
}

export default app;
