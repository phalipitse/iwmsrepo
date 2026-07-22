# 🧪 ZaniQ IWMS - Local Testing Guide

## ✅ SETUP COMPLETE!

I've set up everything for local testing. Here's what's ready:

### 📦 What's Installed:
- ✅ Backend dependencies (30+ packages)
- ✅ Prisma Client (ORM)
- ✅ SQLite database (dev.db)
- ✅ Environment configuration (.env)
- ✅ Database schema (5 tables)
- ✅ API routes (working demos)

---

## 🚀 START THE BACKEND (2 Options)

### **Option 1: Double-Click to Start** (Easiest)

1. Navigate to:
   ```
   C:\Users\Cash Crusaders\zaniq-iwms-v2\backend\
   ```

2. Double-click: **`START_SERVER.bat`**

3. You'll see:
   ```
   🚀 ZaniQ IWMS API Server started
   🌐 Server: http://localhost:3000
   ❤️  Health: http://localhost:3000/health
   ```

4. **Keep this window open!** (Server runs here)

### **Option 2: Command Line**

Open PowerShell or Command Prompt:

```powershell
cd "C:\Users\Cash Crusaders\zaniq-iwms-v2\backend"
npm run dev
```

---

## 🧪 TEST THE API

### Open your browser and try these URLs:

1. **Health Check**  
   http://localhost:3000/health
   
   Should show:
   ```json
   {
     "status": "healthy",
     "timestamp": "2026-07-23...",
     "uptime": 5.123,
     "environment": "development",
     "version": "2.0.0"
   }
   ```

2. **API Info**  
   http://localhost:3000
   
   Shows all available endpoints

3. **Dashboard Stats**  
   http://localhost:3000/api/dashboard/stats
   
   Returns demo KPIs

4. **Work Orders**  
   http://localhost:3000/api/work-orders
   
   Returns demo work orders

5. **Login (Demo)**  
   http://localhost:3000/api/auth/login  
   (POST request - use Postman or curl)

---

## 🌐 START THE FRONTEND

Open a **NEW** PowerShell window:

```powershell
cd "C:\Users\Cash Crusaders\zaniq-iwms-v2\frontend"

# Choose one:
python -m http.server 5173
# or
npx http-server -p 5173
```

Then open: **http://localhost:5173/index-original.html**

---

## 📊 WHAT'S WORKING

### Backend API:
- ✅ Express server (Node.js + TypeScript)
- ✅ SQLite database
- ✅ Prisma ORM
- ✅ 5 database tables (User, Campus, Building, Asset, WorkOrder)
- ✅ Demo API routes
- ✅ CORS enabled
- ✅ Rate limiting
- ✅ Security headers
- ✅ Request logging
- ✅ Error handling
- ✅ Health monitoring

### API Endpoints Working:
- ✅ `GET /health` - Health check
- ✅ `GET /` - API info
- ✅ `GET /api/dashboard/stats` - Dashboard
- ✅ `GET /api/work-orders` - Work orders list
- ✅ `GET /api/work-orders/:id` - Single work order
- ✅ `POST /api/work-orders` - Create work order
- ✅ `POST /api/auth/login` - Login (demo)
- ✅ `GET /api/auth/me` - Current user

---

## 🔧 TROUBLESHOOTING

### Server won't start?

**Error: Port 3000 already in use**
```powershell
# Kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F
```

**Error: Module not found**
```powershell
# Reinstall dependencies
cd backend
rm -r node_modules
npm install
```

**TypeScript errors**
```powershell
# Regenerate Prisma client
npx prisma generate
```

### Frontend won't load?

**Python not found**
```powershell
# Try Node.js instead
npx http-server -p 5173
```

**Port 5173 in use**
```powershell
# Use different port
python -m http.server 8000
# Then open: http://localhost:8000
```

---

## 📁 DATABASE

Your SQLite database is at:
```
C:\Users\Cash Crusaders\zaniq-iwms-v2\backend\dev.db
```

### View Database:
```powershell
cd backend
npx prisma studio
# Opens at: http://localhost:5555
```

### Database Tables:
1. **users** - User accounts
2. **campuses** - University campuses
3. **buildings** - Buildings
4. **assets** - Equipment & infrastructure
5. **work_orders** - Maintenance requests
6. **audit_logs** - Activity tracking

---

## 🧪 TEST WITH POSTMAN

Download: https://www.postman.com/downloads/

### Import this collection:

**POST Login:**
```
URL: http://localhost:3000/api/auth/login
Method: POST
Body (JSON):
{
  "email": "admin@zaniq.com",
  "password": "password123"
}
```

**GET Work Orders:**
```
URL: http://localhost:3000/api/work-orders
Method: GET
```

**POST New Work Order:**
```
URL: http://localhost:3000/api/work-orders
Method: POST
Body (JSON):
{
  "title": "Fix broken AC",
  "description": "AC unit not working in Building A",
  "priority": "HIGH"
}
```

---

## 📊 WHAT TO TEST

### 1. Health Check
- ✅ Server is running
- ✅ Returns 200 status
- ✅ Shows uptime

### 2. Dashboard
- ✅ Returns KPIs
- ✅ Work order stats
- ✅ Generator status

### 3. Work Orders
- ✅ List all work orders
- ✅ Get single work order
- ✅ Create new work order

### 4. Authentication
- ✅ Login returns token
- ✅ Get current user info

---

## 🎯 NEXT STEPS

### After Local Testing Works:

1. **Add Real Data**
   - Create seed script
   - Add sample users, campuses, assets

2. **Connect Frontend to Backend**
   - Update frontend/js/config.js
   - Change API_URL to http://localhost:3000

3. **Deploy to Production**
   - Read DEPLOY_NOW.md
   - Deploy to DigitalOcean
   - Switch to PostgreSQL

---

## 💡 TIPS

### Keep Server Running
- Don't close the terminal window
- Server auto-restarts on code changes
- Press Ctrl+C to stop

### Check Logs
```powershell
# In backend directory
cat logs/combined.log   # All logs
cat logs/error.log      # Errors only
```

### Hot Reload
The server automatically restarts when you edit files in `src/`

---

## ✅ SUCCESS CHECKLIST

- [ ] Backend server starts without errors
- [ ] http://localhost:3000/health returns 200
- [ ] Dashboard endpoint returns data
- [ ] Work orders endpoint returns data
- [ ] Frontend loads at http://localhost:5173
- [ ] No console errors in browser
- [ ] API calls work from frontend

---

## 🆘 NEED HELP?

**Server not starting?**
1. Check logs in terminal
2. Try: `npm install` again
3. Check port 3000 is free

**Database errors?**
1. Delete `dev.db`
2. Run: `npx prisma db push`
3. Restart server

**Still having issues?**
Email: pitsephali@gmail.com

---

## 🎉 YOU'RE READY!

Your full-stack ZaniQ IWMS is running locally!

**Backend**: http://localhost:3000  
**Frontend**: http://localhost:5173  
**Database**: http://localhost:5555 (Prisma Studio)

**Enjoy testing!** 🚀
