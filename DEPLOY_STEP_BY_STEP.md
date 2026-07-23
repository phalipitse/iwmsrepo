# 🚀 DEPLOY TO DIGITALOCEAN - STEP BY STEP

## ✅ YOU'RE READY!

All code is committed and ready to deploy.

---

## 📋 DEPLOYMENT STEPS

### **Step 1: Create GitHub Repository** (3 minutes)

1. **Open**: https://github.com/new

2. **Fill in**:
   - Repository name: `zaniq-iwms-v2`
   - Description: `ZaniQ IWMS - Integrated Workplace Management System for Higher Education`
   - Visibility: ✅ Public (or Private if you prefer)
   - **DO NOT** check "Initialize with README"
   - Click **"Create repository"**

3. **Copy the repository URL**
   - You'll see: `https://github.com/YOUR_USERNAME/zaniq-iwms-v2.git`
   - Keep this URL ready!

---

### **Step 2: Push Code to GitHub** (2 minutes)

Open **PowerShell** and run these commands:

```powershell
# Navigate to project
cd "C:\Users\Cash Crusaders\zaniq-iwms-v2"

# Add GitHub as remote (REPLACE YOUR_USERNAME with your actual GitHub username!)
git remote add origin https://github.com/YOUR_USERNAME/zaniq-iwms-v2.git

# Push code
git branch -M main
git push -u origin main
```

**If prompted for credentials:**
- Username: Your GitHub username
- Password: Use a **Personal Access Token** (NOT your password)
  - Get token: https://github.com/settings/tokens/new
  - Scopes needed: ✅ repo

---

### **Step 3: Update App Specification** (1 minute)

Open: `C:\Users\Cash Crusaders\zaniq-iwms-v2\app-spec.yaml`

Find these lines and update with YOUR GitHub username:

```yaml
# Line 8, 32, etc - Change:
repo: your-username/zaniq-iwms-v2

# To:
repo: YOUR_ACTUAL_USERNAME/zaniq-iwms-v2
```

Save the file!

---

### **Step 4: Deploy to DigitalOcean** (2 minutes)

Back in PowerShell:

```powershell
cd "C:\Users\Cash Crusaders\zaniq-iwms-v2"

# Validate the spec
.\doctl.bat apps spec validate app-spec.yaml

# Deploy!
.\doctl.bat apps create --spec app-spec.yaml
```

You'll see output like:
```
Notice: App created
ID: abc123-def456-ghi789
```

**SAVE THIS APP ID!**

---

### **Step 5: Monitor Deployment** (5-10 minutes)

```powershell
# Check status (replace APP_ID with your actual ID)
.\doctl.bat apps get APP_ID

# Watch logs live
.\doctl.bat apps logs APP_ID --follow
```

Wait for deployment to complete (~5-10 minutes)

---

### **Step 6: Get Your Live URL**

```powershell
# Get the app URL
.\doctl.bat apps get APP_ID --format DefaultIngress --no-header
```

Your app will be live at:
```
https://zaniq-iwms-xxxxx.ondigitalocean.app
```

---

## 🎯 QUICK COMMANDS SUMMARY

```powershell
# 1. Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/zaniq-iwms-v2.git

# 2. Push code
git branch -M main
git push -u origin main

# 3. Deploy
.\doctl.bat apps create --spec app-spec.yaml

# 4. Monitor
.\doctl.bat apps logs YOUR_APP_ID --follow

# 5. Get URL
.\doctl.bat apps get YOUR_APP_ID
```

---

## 💰 WHAT YOU'RE DEPLOYING

✅ **Frontend** (Static Site) - FREE  
✅ **Backend API** (Node.js) - $5/month  
✅ **PostgreSQL Database** - $7/month  
✅ **Redis Cache** - $7/month  

**Total**: ~$19/month  
**Plus**: $200 free credit = ~10 months FREE!

---

## ⚠️ IMPORTANT NOTES

1. **GitHub Username**: Make sure to replace `your-username` in app-spec.yaml with your ACTUAL GitHub username

2. **Personal Access Token**: If GitHub asks for password, use a token instead:
   - Go to: https://github.com/settings/tokens/new
   - Name: `zaniq-deployment`
   - Scopes: ✅ repo
   - Generate and use that as password

3. **First Deploy Takes Longer**: Initial deployment ~10 minutes (building, installing dependencies)

4. **Database Setup**: PostgreSQL will be created automatically

---

## 🆘 TROUBLESHOOTING

### "Authentication failed" when pushing to GitHub
→ Use Personal Access Token instead of password:
   https://github.com/settings/tokens/new

### "remote origin already exists"
→ Run: `git remote remove origin`
   Then try again

### "App spec validation failed"
→ Make sure you updated YOUR_USERNAME in app-spec.yaml

### Deployment stuck?
→ Check logs: `.\doctl.bat apps logs YOUR_APP_ID --follow`

---

## ✅ AFTER DEPLOYMENT

Your app will be live with:

✅ **Frontend**: https://your-app.ondigitalocean.app  
✅ **Backend API**: https://your-app.ondigitalocean.app/api  
✅ **Health Check**: https://your-app.ondigitalocean.app/api/health  
✅ **Auto-deploys**: Every git push deploys automatically!  
✅ **HTTPS**: SSL certificate included  
✅ **Database**: PostgreSQL ready to use  

---

## 🎯 READY?

**Step 1 starts now:**  
👉 https://github.com/new

Create your repository, then come back here and follow Steps 2-6!

**Tell me when you've created the GitHub repo and I'll help with the rest!**
