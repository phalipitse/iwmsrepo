# ZaniQ IWMS v2.0

**Integrated Workplace Management System for Higher Education Institutions**

A comprehensive, modern facility management platform designed specifically for South African universities and colleges.

## 🚀 Features

### Core Modules
- **Estate Dashboard** - Real-time campus overview with KPIs
- **Maintenance Management** - Work orders, asset tracking, QR-based fault logging
- **Residence Management** - Student housing lifecycle, check-in/out, damage claims
- **Energy & Water** - Load-shedding readiness, consumption monitoring
- **Space & Bookings** - Utilization tracking, HEMIS-aligned reporting
- **Safety & Compliance** - POPIA, OHS Act, fire safety registers
- **Vendor Management** - B-BBEE verification, preferential procurement

### Technical Features
- ✅ Full-stack TypeScript
- ✅ React 18 + Vite for blazing-fast frontend
- ✅ Node.js + Express backend API
- ✅ PostgreSQL database with Prisma ORM
- ✅ JWT authentication + role-based access control
- ✅ Real-time updates with WebSockets
- ✅ Offline-first PWA capability
- ✅ Mobile-responsive design
- ✅ Comprehensive testing (Unit + Integration + E2E)
- ✅ CI/CD with GitHub Actions
- ✅ Deployment-ready for DigitalOcean

## 📋 Prerequisites

- Node.js 18+ and npm 9+
- PostgreSQL 15+
- Git

## 🛠️ Quick Start

### 1. Clone and Install

```bash
git clone <repository-url>
cd zaniq-iwms-v2
npm install
```

### 2. Environment Setup

```bash
# Copy environment templates
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Edit with your configuration
```

### 3. Database Setup

```bash
# Run migrations
npm run db:migrate

# Seed with demo data
npm run db:seed
```

### 4. Start Development

```bash
# Start both frontend and backend
npm run dev

# Or start individually
npm run dev:frontend  # http://localhost:5173
npm run dev:backend   # http://localhost:3000
```

## 📁 Project Structure

```
zaniq-iwms-v2/
├── frontend/              # React + Vite frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── features/     # Feature modules
│   │   ├── hooks/        # Custom React hooks
│   │   ├── services/     # API services
│   │   ├── store/        # State management
│   │   ├── types/        # TypeScript types
│   │   └── utils/        # Utility functions
│   ├── public/           # Static assets
│   └── tests/            # Frontend tests
│
├── backend/              # Node.js + Express API
│   ├── src/
│   │   ├── controllers/  # Request handlers
│   │   ├── services/     # Business logic
│   │   ├── models/       # Data models
│   │   ├── middleware/   # Express middleware
│   │   ├── routes/       # API routes
│   │   ├── utils/        # Utility functions
│   │   └── types/        # TypeScript types
│   ├── prisma/           # Database schema & migrations
│   └── tests/            # Backend tests
│
├── .github/              # GitHub Actions CI/CD
├── docs/                 # Documentation
└── scripts/              # Build and deployment scripts
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# E2E tests
npm run test:e2e
```

## 🏗️ Build for Production

```bash
# Build both frontend and backend
npm run build

# Or build individually
npm run build:frontend
npm run build:backend
```

## 🚢 Deployment

### DigitalOcean App Platform

1. **Validate app spec**
   ```bash
   doctl apps spec validate app-spec.yaml
   ```

2. **Create app**
   ```bash
   doctl apps create --spec app-spec.yaml
   ```

3. **Monitor deployment**
   ```bash
   doctl apps logs <app-id> --follow
   ```

See [DEPLOYMENT.md](./docs/DEPLOYMENT.md) for detailed instructions.

### Manual Deployment

1. Set up PostgreSQL database
2. Configure environment variables
3. Run migrations: `npm run db:migrate`
4. Build: `npm run build`
5. Start: `npm start`

## 📚 Documentation

- [API Documentation](./docs/API.md)
- [User Guide](./docs/USER_GUIDE.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Development Guide](./docs/DEVELOPMENT.md)
- [Contributing](./CONTRIBUTING.md)

## 🔒 Security

- JWT-based authentication
- Role-based access control (RBAC)
- POPIA-compliant data handling
- SA data residency
- Encrypted sensitive data
- Audit logging

## 🎯 Performance

- Code splitting & lazy loading
- Asset optimization
- Database query optimization
- Redis caching layer
- CDN for static assets
- Server-side rendering ready

## 🌍 Compliance

- **POPIA** - Protection of Personal Information Act
- **OHS Act 85/1993** - Occupational Health and Safety
- **HEMIS** - Higher Education Management Information System
- **B-BBEE** - Broad-Based Black Economic Empowerment

## 📧 Support

- **Email**: pitsephali@gmail.com
- **Demo**: [Book a demo](mailto:pitsephali@gmail.com?subject=ZaniQ%20IWMS%20demo)
- **Issues**: [GitHub Issues](https://github.com/your-org/zaniq-iwms-v2/issues)

## 📄 License

MIT License - see [LICENSE](./LICENSE) file

## 🙏 Acknowledgments

Built for South African higher education institutions

---

**Version**: 2.0.0  
**Last Updated**: 2026-07-22  
**Status**: Production Ready ✅

---

## 🐍 Python Utilities (NEW!)

ZaniQ IWMS now includes Python utilities for advanced data processing and analytics!

### Setup Python Environment

```bash
# Navigate to python utilities
cd python-utils

# Create virtual environment
python -m venv venv

# Activate
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r ../requirements.txt
```

### Available Python Tools

1. **db_connection.py** - PostgreSQL connection utilities
2. **export_reports.py** - Excel/PDF report generation
3. **analytics.py** - Data analytics and statistics

### Usage Example

```python
from db_connection import DatabaseConnection

# Connect to database
db = DatabaseConnection()
db.test_connection()

# Fetch work orders
work_orders = db.get_work_orders(limit=100)
print(f"Found {len(work_orders)} work orders")
```

---

## 🌐 Live Deployment

**Production URL**: https://zaniq-iwms-rdcap.ondigitalocean.app

**Status**: ✅ ACTIVE

**Stack**:
- Frontend: Static HTML/CSS/JS (FREE)
- Backend: Node.js + TypeScript ($5/mo)
- Database: PostgreSQL 15 ($7/mo)
- Python: Utilities (runs locally or as serverless functions)

**Total Cost**: ~$12/month (covered by $200 DigitalOcean credit)

---

## 📦 Repository

**GitHub**: https://github.com/phalipitse/iwmsrepo  
**Branch**: main  
**Last Updated**: 2026-07-23

