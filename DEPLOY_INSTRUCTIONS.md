# 🚀 DEPLOY ZANIQ IWMS - FINAL STEPS

## ✅ READY TO DEPLOY!

Everything is prepared:
- ✅ Code committed to git
- ✅ DigitalOcean authenticated
- ✅ App specification ready

---

## 🎯 DEPLOYMENT METHOD

Since we need a git repository, here are your options:

### **Option 1: Deploy via GitHub** (Recommended)

#### Step 1: Create GitHub Repository

1. **Go to**: https://github.com/new
2. **Repository name**: `zaniq-iwms-v2`
3. **Description**: `ZaniQ IWMS - Integrated Workplace Management System`
4. **Visibility**: Public or Private (your choice)
5. **DO NOT** initialize with README
6. Click **"Create repository"**

#### Step 2: Push Code to GitHub

Open PowerShell in your project folder:

```powershell
cd "C:\Users\Cash Crusaders\zaniq-iwms-v2"

# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/zaniq-iwms-v2.git

# Push code
git branch -M main
git push -u origin main
```

#### Step 3: Deploy to DigitalOcean

```powershell
# Update app-spec with your GitHub username
# Edit app-spec.yaml and replace "your-username" with your actual GitHub username

# Deploy
.\doctl.bat apps create --spec app-spec.yaml
```

---

### **Option 2: Use DigitalOcean Web Interface** (Easiest)

1. **Go to**: https://cloud.digitalocean.com/apps/new

2. **Choose source**:
   - Click "Upload from Computer"
   - OR "Connect to GitHub" (if you create a repo)

3. **Upload Code**:
   - Compress your folder as ZIP
   - Upload `zaniq-iwms-v2.zip`

4. **Configure**:
   - **Name**: zaniq-iwms
   - **Region**: New York (NYC)
   - **Components**: Detect automatically

5. **Add Database**:
   - Click "Add Database"
   - Type: PostgreSQL
   - Name: db
   - Version: 15
   - Size: Basic (1GB RAM)

6. **Environment Variables**:
   - `NODE_ENV` = `production`
   - `JWT_SECRET` = `your-secret-key`

7. **Review & Launch**:
   - Check pricing: ~$19-22/month
   - Click "Launch App"

---

### **Option 3: Deploy Static Site Only** (FREE)

If you just want the frontend without backend:

```powershell
cd frontend
# Compress frontend folder
# Go to https://cloud.digitalocean.com/apps/new
# Upload frontend.zip
# Choose Static Site
# Output directory: /
# Launch (FREE)
```

---

## 💰 COST SUMMARY

### Full Stack (Backend + Database):
- Static Frontend: **FREE**
- Backend API (basic-xxs): **$5/month**
- PostgreSQL (1GB): **$7/month**
- Bandwidth: **~$2/month**
- **Total**: **~$14-19/month**

Plus **$200 FREE credit** for 60 days!

---

## 🎯 RECOMMENDED PATH

**Easiest for you:**

1. **Use DigitalOcean Web Interface** (Option 2)
2. **Upload your code as ZIP**
3. **Let DigitalOcean detect components**
4. **Add database**
5. **Launch!**

---

## 📦 CREATE ZIP FILE

Run this to create a deployment ZIP:

```powershell
cd "C:\Users\Cash Crusaders"

# Create ZIP (excluding node_modules and .git)
Compress-Archive -Path "zaniq-iwms-v2\*" -DestinationPath "zaniq-iwms-deploy.zip" -Force

# ZIP created at: C:\Users\Cash Crusaders\zaniq-iwms-deploy.zip
```

Then upload to: https://cloud.digitalocean.com/apps/new

---

## 🆘 NEED HELP?

**Tell me:**
- **"create github repo"** - I'll help with GitHub setup
- **"use web interface"** - I'll guide you through DO web UI
- **"deploy static only"** - I'll deploy just frontend (FREE)

---

## ✅ YOUR CHOICE

Which method do you prefer?

1. **GitHub + Command Line** (Most automated)
2. **Web Interface + ZIP Upload** (Easiest, no GitHub needed)
3. **Static Site Only** (FREE, frontend only)

**Reply with 1, 2, or 3!**
