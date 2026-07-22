# 🚀 DEPLOY ZANIQ IWMS - STEP BY STEP

## ✅ EASIEST: Keep Your Current Netlify Site (Already Live!)

Your site is **ALREADY DEPLOYED** and working:
👉 **https://zaniq-iwms.netlify.app/**

**No action needed!** It's live and perfect.

---

## 🚀 RECOMMENDED: Local Test First (Then Deploy)

### Step 1: Install Dependencies (5 minutes)

Open **PowerShell** or **Command Prompt**:

```powershell
# Navigate to backend
cd C:\Users\Cash` Crusaders\zaniq-iwms-v2\backend

# Install dependencies
npm install

# This will install 30+ packages (takes 2-3 minutes)
```

### Step 2: Set Up Environment

```powershell
# Copy environment template
copy .env.example .env

# Open .env in notepad
notepad .env
```

**Edit these lines in .env:**
```env
# Change this:
DATABASE_URL="postgresql://zaniq_user:password@localhost:5432/zaniq_dev?schema=public"

# To this (if you have PostgreSQL installed):
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/zaniq_dev"

# If you DON'T have PostgreSQL, use SQLite instead:
DATABASE_URL="file:./dev.db"
```

### Step 3: Run Database Setup

```powershell
# Generate Prisma client
npm run db:generate

# Create database tables
npm run db:push

# Seed with demo data
npm run db:seed
```

### Step 4: Start Backend

```powershell
# Start the API server
npm run dev

# You should see:
# 🚀 ZaniQ IWMS API Server started
# 🌐 Server: http://localhost:3000
# ❤️  Health: http://localhost:3000/health
```

### Step 5: Test It

Open browser:
- **http://localhost:3000** - API info
- **http://localhost:3000/health** - Health check
- **http://localhost:3000/api/dashboard/stats** - Dashboard data

### Step 6: Run Frontend

Open **another PowerShell window**:

```powershell
# Navigate to frontend
cd C:\Users\Cash` Crusaders\zaniq-iwms-v2\frontend

# Start web server (choose one):

# Option A: Python (if installed)
python -m http.server 5173

# Option B: Node.js
npx http-server -p 5173

# Option C: PHP (if installed)
php -S localhost:5173
```

Open browser:
- **http://localhost:5173/index-original.html** - Your working site (local)

---

## 💻 FULL PRODUCTION DEPLOY (DigitalOcean)

### Prerequisites

1. **Create DigitalOcean Account**
   - Go to: https://cloud.digitalocean.com
   - Sign up (credit card needed, but $200 free credit)

2. **Install doctl**
   ```powershell
   # Using Chocolatey
   choco install doctl

   # Or download manually:
   # https://github.com/digitalocean/doctl/releases
   # Download doctl-*-windows-amd64.zip
   # Extract and add to PATH
   ```

3. **Get API Token**
   - Go to: https://cloud.digitalocean.com/account/api/tokens
   - Click "Generate New Token"
   - Name: "zaniq-iwms"
   - Read + Write permissions
   - Copy the token (save it!)

4. **Authenticate doctl**
   ```powershell
   doctl auth init
   # Paste your API token when prompted
   ```

### Deploy Steps

1. **Create GitHub Repository** (Optional but recommended)

   ```powershell
   cd C:\Users\Cash` Crusaders\zaniq-iwms-v2

   # Initialize git
   git init
   git add .
   git commit -m "ZaniQ IWMS v2 - Complete"

   # Create on GitHub (if you have gh CLI)
   gh repo create zaniq-iwms-v2 --public --source=. --push

   # Or manually:
   # 1. Go to https://github.com/new
   # 2. Create repo: zaniq-iwms-v2
   # 3. Push code:
   git remote add origin https://github.com/YOUR-USERNAME/zaniq-iwms-v2.git
   git push -u origin main
   ```

2. **Update app-spec.yaml**

   Open `app-spec.yaml` and change:
   ```yaml
   # Line 8 and others - change to your GitHub username
   repo: your-username/zaniq-iwms-v2
   # To:
   repo: YOUR-GITHUB-USERNAME/zaniq-iwms-v2
   ```

3. **Deploy to DigitalOcean**

   ```powershell
   # Validate spec
   doctl apps spec validate app-spec.yaml

   # Create app
   doctl apps create --spec app-spec.yaml

   # This will return an App ID, save it!
   # Example output:
   # ID: abc123-def456-ghi789
   ```

4. **Monitor Deployment**

   ```powershell
   # Check status
   doctl apps get YOUR-APP-ID

   # Watch logs (live)
   doctl apps logs YOUR-APP-ID --follow

   # Check deployment list
   doctl apps deployment list YOUR-APP-ID
   ```

5. **Get Your URL**

   ```powershell
   # Get app URL
   doctl apps get YOUR-APP-ID --format DefaultIngress --no-header
   ```

   Your app will be at:
   - **https://YOUR-APP-NAME.ondigitalocean.app**

### Cost Breakdown

**Monthly Costs:**
- Frontend (static): **FREE**
- Backend API: **$5/month**
- PostgreSQL: **$7/month**
- Redis: **$7/month**
- **Total: ~$19/month**

(Plus $200 free credit for 60 days!)

---

## 🎯 QUICK SUMMARY

**Already Live:**
- ✅ https://zaniq-iwms.netlify.app/ (works now!)

**To Test Locally:**
1. `cd backend && npm install`
2. `copy .env.example .env`
3. `npm run db:generate && npm run db:push`
4. `npm run dev`
5. Open http://localhost:3000/health

**To Deploy to DigitalOcean:**
1. Create account: https://cloud.digitalocean.com
2. Install doctl: `choco install doctl`
3. Get API token: https://cloud.digitalocean.com/account/api/tokens
4. Authenticate: `doctl auth init`
5. Deploy: `doctl apps create --spec app-spec.yaml`

---

## 🆘 NEED HELP?

**Choose:**
1. **"I want to test locally"** - I'll help you set up local environment
2. **"I want to deploy now"** - I'll help you deploy to DigitalOcean
3. **"Just keep Netlify"** - Your site is already perfect!

**What do you want to do?**

Email: pitsephali@gmail.com
