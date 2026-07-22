# 🚀 DEPLOY TO DIGITALOCEAN - STEP BY STEP

## ✅ DOCTL INSTALLED!

doctl is now installed and ready at:
```
C:\Users\Cash Crusaders\AppData\Local\doctl\doctl.exe
```

Version: 1.115.0 ✅

---

## 📋 NEXT STEPS

### Step 1: Create DigitalOcean Account (5 minutes)

1. **Go to**: https://cloud.digitalocean.com
2. **Sign up** with your email
3. **Verify** your email
4. **Add payment method** (credit card)
   - **Get $200 FREE credit** for 60 days!
   - No charges until you use it

### Step 2: Get API Token (2 minutes)

1. **Go to**: https://cloud.digitalocean.com/account/api/tokens
2. Click **"Generate New Token"**
3. **Name**: `zaniq-iwms`
4. **Scopes**: Check both:
   - ✅ Read
   - ✅ Write
5. Click **"Generate Token"**
6. **COPY THE TOKEN** (you'll only see it once!)
   - Example: `dop_v1_1234567890abcdef...`

### Step 3: Authenticate doctl (1 minute)

Open **PowerShell** or **Command Prompt**:

```powershell
doctl auth init
```

When prompted, paste your API token and press Enter.

You should see:
```
Validating token... ✓
```

**Test it:**
```powershell
doctl account get
```

Should show your account info!

---

## 🚀 DEPLOY OPTIONS

### **Option A: Simple Static Site (FREE)**

Deploy just the frontend (no backend):

```powershell
cd "C:\Users\Cash Crusaders\zaniq-iwms-v2"

# Create simple spec
cat > deploy-static-simple.yaml << 'EOF'
name: zaniq-iwms
static_sites:
  - name: web
    github:
      repo: YOUR_USERNAME/zaniq-iwms-v2
      branch: main
    output_dir: /frontend
    routes:
      - path: /
    catchall_document: index-original.html
EOF

# Deploy
doctl apps create --spec deploy-static-simple.yaml
```

**Cost**: FREE

---

### **Option B: Full Stack with Database ($22/month)**

Deploy complete system:

```powershell
cd "C:\Users\Cash Crusaders\zaniq-iwms-v2"

# First, create GitHub repo
git init
git add .
git commit -m "ZaniQ IWMS v2 - Initial commit"

# Create repo on GitHub:
# Go to: https://github.com/new
# Name: zaniq-iwms-v2
# Create repository
# Then:

git remote add origin https://github.com/YOUR_USERNAME/zaniq-iwms-v2.git
git branch -M main
git push -u origin main

# Update app-spec.yaml with your GitHub username
# Then deploy:
doctl apps create --spec app-spec.yaml
```

**Cost**: ~$22/month

---

## 📦 WITHOUT GITHUB (Direct Deploy)

You can also deploy without GitHub using DigitalOcean's web interface:

1. **Go to**: https://cloud.digitalocean.com/apps/new
2. Choose **"Deploy from source code"**
3. Upload your code as a ZIP file
4. Configure:
   - **Name**: zaniq-iwms
   - **Type**: Static Site
   - **Build Command**: (leave empty)
   - **Output Directory**: frontend
5. Click **"Next"** and **"Launch App"**

---

## 🎯 RECOMMENDED: START WITH STATIC SITE

I recommend starting with **Option A** (static site) because:
- ✅ FREE
- ✅ Fast (2 minutes)
- ✅ No database setup needed
- ✅ Same as your current Netlify site

Then later upgrade to full stack if you need backend features.

---

## 🔧 FULL DEPLOYMENT SCRIPT

I can run this for you! Just say **"deploy now"** and I'll:

1. ✅ Initialize git repo
2. ✅ Create GitHub repo (or skip if you prefer)
3. ✅ Update app-spec.yaml
4. ✅ Deploy to DigitalOcean
5. ✅ Monitor deployment
6. ✅ Give you the live URL

---

## 💰 COST BREAKDOWN

### Static Site (Option A):
- Hosting: **FREE**
- Total: **$0/month** ✅

### Full Stack (Option B):
- Static Site: **FREE**
- Backend (basic-xxs): **$5/month**
- PostgreSQL (dev): **$7/month**
- Redis (dev): **$7/month**
- Total: **~$19-22/month**

Plus **$200 FREE credit** = ~10 months free!

---

## ⚡ QUICK START

Run these commands now:

```powershell
# 1. Authenticate (paste your API token when prompted)
doctl auth init

# 2. Verify
doctl account get

# 3. Ready to deploy!
```

---

## 🆘 NEED HELP?

**Say:**
- **"deploy static"** - I'll deploy just the frontend (FREE)
- **"deploy full stack"** - I'll deploy everything ($22/month)
- **"help"** - I'll guide you step by step

---

**Ready? Get your API token from:**
👉 https://cloud.digitalocean.com/account/api/tokens

Then run: `doctl auth init`
