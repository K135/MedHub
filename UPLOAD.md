# MedHub Deployment Guide - Ubuntu Server

Server IP: `167.71.227.1`  
User: `root`

## Quick Overview

This guide will help you deploy:
- **Backend API**: Node.js + Express + MongoDB (Port 5001)
- **Main Website**: Next.js (Port 3000 via PM2, served on port 80)
- **Admin Panel**: React + Vite (Static files served on port 8080)
- **Superadmin Panel**: React + Vite (Static files served on port 8081)

**MongoDB Export**: You'll export your local MongoDB Compass database and import it to the server.

---

## Part 1: Prepare Ubuntu Server

### Step 1: Connect to Server
```bash
ssh root@167.71.227.1
```

### Step 2: Update System
```bash
sudo apt update && sudo apt upgrade -y
```

### Step 3: Install Node.js 18
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
node --version
npm --version
```

### Step 4: Install MongoDB
```bash
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | sudo gpg --dearmor -o /usr/share/keyrings/mongodb-server-7.0.gpg
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt update
sudo apt install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod
sudo systemctl status mongod
```

### Step 5: Install Nginx
```bash
sudo apt install -y nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

### Step 6: Install PM2
```bash
sudo npm install -g pm2
```

---

## Part 2: Export MongoDB Database

### Step 7: Export Database from MongoDB Compass (On Local Machine)

**Option A: Using MongoDB Compass GUI**

1. Open MongoDB Compass
2. Connect to `mongodb://localhost:27017`
3. Select database `Medhubmongo`
4. For each collection (Course, Speaker, Transaction, etc.):
   - Click on the collection
   - Click "Export Data" button (top right)
   - Choose "Export Full Collection"
   - Select format: **JSON**
   - Save as: `collection-name.json` (e.g., `courses.json`, `speakers.json`)
5. Save all files to a folder: `/Users/apple/Projects/MEdHub/Website/MedHub/mongodb-export/`

**Option B: Using mongodump Command (Recommended)**

```bash
# On local machine
cd /Users/apple/Projects/MEdHub/Website/MedHub
mongodump --uri="mongodb://localhost:27017/Medhubmongo" --out=./mongodb-export
```

This creates a `mongodb-export/Medhubmongo/` folder with BSON files.

### Step 8: Upload Database to Server

**If using mongodump (Option B):**
```bash
cd /Users/apple/Projects/MEdHub/Website/MedHub
tar -czf mongodb-export.tar.gz mongodb-export/
scp mongodb-export.tar.gz root@167.71.227.1:/root/
```

**If using Compass exports (Option A):**
```bash
cd /Users/apple/Projects/MEdHub/Website/MedHub
tar -czf mongodb-export.tar.gz mongodb-export/
scp mongodb-export.tar.gz root@167.71.227.1:/root/
```

### Step 9: Import Database on Server

**If using mongodump (Option B - Recommended):**
```bash
# On Ubuntu server
cd /root
tar -xzf mongodb-export.tar.gz
mongorestore --uri="mongodb://localhost:27017/Medhubmongo" ./mongodb-export/Medhubmongo/
```

**If using Compass JSON exports (Option A):**
```bash
# On Ubuntu server
cd /root
tar -xzf mongodb-export.tar.gz
cd mongodb-export

# Import each collection
mongoimport --uri="mongodb://localhost:27017/Medhubmongo" --collection=courses --file=courses.json --jsonArray
mongoimport --uri="mongodb://localhost:27017/Medhubmongo" --collection=speakers --file=speakers.json --jsonArray
mongoimport --uri="mongodb://localhost:27017/Medhubmongo" --collection=transactions --file=transactions.json --jsonArray
mongoimport --uri="mongodb://localhost:27017/Medhubmongo" --collection=bankdetails --file=bankdetails.json --jsonArray
mongoimport --uri="mongodb://localhost:27017/Medhubmongo" --collection=organizers --file=organizers.json --jsonArray
mongoimport --uri="mongodb://localhost:27017/Medhubmongo" --collection=supporttickets --file=supporttickets.json --jsonArray
```

### Step 10: Verify Import
```bash
mongosh
use Medhubmongo
show collections
db.courses.countDocuments()
db.speakers.countDocuments()
db.organizers.countDocuments()
exit
```

---

## Part 3: Upload Project Files

### Step 11: Create Archive (On Local Machine)
```bash
cd /Users/apple/Projects/MEdHub/Website/MedHub
tar -czf medhub.tar.gz --exclude='node_modules' --exclude='.next' --exclude='dist' --exclude='backend/.env' .
```

### Step 12: Upload to Server (On Local Machine)
```bash
scp medhub.tar.gz root@167.71.227.1:/root/
```

### Step 13: Extract Files (On Ubuntu Server)
```bash
cd /root
mkdir -p medhub
tar -xzf medhub.tar.gz -C medhub
cd medhub
ls -la
```

---

## Part 4: Setup Backend

### Step 14: Install Backend Dependencies
```bash
cd /root/medhub/backend
npm install
```

### Step 15: Create Production .env File
```bash
nano .env
```

Add this content:
```
MONGO_URI=mongodb://localhost:27017/Medhubmongo
PORT=5001
JWT_SECRET=change_this_to_secure_random_string_in_production
```

Press `Ctrl+X`, then `Y`, then `Enter` to save.

### Step 16: Start Backend with PM2
```bash
pm2 start server.js --name medhub-backend
pm2 save
pm2 startup
```

Copy the command shown and run it, then:
```bash
pm2 list
```

Test backend:
```bash
curl http://localhost:5001
```

---

## Part 5: Update API URLs in Frontend Apps

### Step 17: Update Admin API URL
```bash
cd /root/medhub/admin/src/api
nano axios.js
```

Find `baseURL` and change to:
```javascript
baseURL: 'http://167.71.227.1:5001/api'
```

### Step 18: Update Superadmin API URL
```bash
cd /root/medhub/superadmin/src/api
nano axios.js
```

Find `baseURL` and change to:
```javascript
baseURL: 'http://167.71.227.1:5001/api'
```

### Step 19: Update Main Website API URLs
```bash
cd /root/medhub/src/api
ls -la
```

Edit each API file and update backend URL to `http://167.71.227.1:5001`

---

## Part 6: Build Frontend Apps

### Step 20: Build Admin Panel
```bash
cd /root/medhub/admin
npm install
npm run build
ls -la dist/
```

### Step 21: Build Superadmin Panel
```bash
cd /root/medhub/superadmin
npm install
npm run build
ls -la dist/
```

### Step 22: Build Main Website
```bash
cd /root/medhub
npm install
npm run build
```

### Step 23: Start Main Website with PM2
```bash
pm2 start npm --name "medhub-website" -- start
pm2 save
pm2 list
```

---

## Part 7: Configure Nginx

### Step 24: Create Nginx Configuration
```bash
sudo nano /etc/nginx/sites-available/medhub
```

Paste this configuration:
```nginx
# Main Website
server {
    listen 80 default_server;
    server_name 167.71.227.1;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Admin Panel
server {
    listen 8080;
    server_name 167.71.227.1;

    root /root/medhub/admin/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass http://localhost:5001;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    location /uploads {
        proxy_pass http://localhost:5001/uploads;
    }
}

# Superadmin Panel
server {
    listen 8081;
    server_name 167.71.227.1;

    root /root/medhub/superadmin/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass http://localhost:5001;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    location /uploads {
        proxy_pass http://localhost:5001/uploads;
    }
}
```

Save with `Ctrl+X`, `Y`, `Enter`.

### Step 25: Remove Default Nginx Config
```bash
sudo rm /etc/nginx/sites-enabled/default
```

### Step 26: Enable MedHub Configuration
```bash
sudo ln -s /etc/nginx/sites-available/medhub /etc/nginx/sites-enabled/
```

### Step 27: Test Nginx Configuration
```bash
sudo nginx -t
```

### Step 28: Reload Nginx
```bash
sudo systemctl reload nginx
```

---

## Part 8: Configure Firewall

### Step 29: Setup UFW Firewall
```bash
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 8080
sudo ufw allow 8081
sudo ufw allow 5001
sudo ufw enable
```

Type `y` when prompted.

### Step 30: Check Firewall Status
```bash
sudo ufw status
```

---

## Part 9: Verify Deployment

### Step 31: Check All Services
```bash
pm2 list
sudo systemctl status mongod
sudo systemctl status nginx
```

### Step 32: View PM2 Logs
```bash
pm2 logs medhub-backend --lines 50
pm2 logs medhub-website --lines 50
```

### Step 33: Test All URLs
```bash
curl http://localhost:5001
curl http://localhost:3000
curl http://localhost:8080
curl http://localhost:8081
```

---

## Access Your Applications

Open in browser:

- **Main Website**: http://167.71.227.1
- **Admin Panel**: http://167.71.227.1:8080
- **Superadmin Panel**: http://167.71.227.1:8081
- **Backend API**: http://167.71.227.1:5001

---

## Useful Commands

### View Logs
```bash
pm2 logs                          # All logs
pm2 logs medhub-backend           # Backend only
pm2 logs medhub-website           # Website only
```

### Restart Services
```bash
pm2 restart medhub-backend
pm2 restart medhub-website
pm2 restart all
```

### Stop Services
```bash
pm2 stop medhub-backend
pm2 stop medhub-website
pm2 stop all
```

### Monitor Resources
```bash
pm2 monit
```

### Check MongoDB
```bash
sudo systemctl status mongod
mongosh                           # Connect to MongoDB shell
show dbs                          # List databases
use Medhubmongo                   # Switch to MedHub database
show collections                  # Show collections
exit                              # Exit MongoDB shell
```

### Nginx Commands
```bash
sudo systemctl status nginx
sudo systemctl restart nginx
sudo nginx -t                     # Test configuration
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

---

## Troubleshooting

### If Backend Won't Start
```bash
cd /root/medhub/backend
pm2 delete medhub-backend
pm2 start server.js --name medhub-backend
pm2 logs medhub-backend
```

### If Website Won't Build
```bash
cd /root/medhub
rm -rf .next
npm run build
```

### If Ports Are Already In Use
```bash
sudo lsof -i :5001     # Check what's using port 5001
sudo lsof -i :3000     # Check what's using port 3000
```

### Reset Everything
```bash
pm2 delete all
pm2 save
# Then start fresh from Step 12
```

---

## Update Deployment (Future Updates)

### Step 1: Backup Database (On Server)
```bash
cd /root
mongodump --uri="mongodb://localhost:27017/Medhubmongo" --out=./mongodb-backup-$(date +%Y%m%d)
tar -czf mongodb-backup-$(date +%Y%m%d).tar.gz mongodb-backup-$(date +%Y%m%d)/
```

### Step 2: Create New Archive on Local Machine
```bash
cd /Users/apple/Projects/MEdHub/Website/MedHub
tar -czf medhub-update.tar.gz --exclude='node_modules' --exclude='.next' --exclude='dist' --exclude='backend/.env' .
scp medhub-update.tar.gz root@167.71.227.1:/root/
```

### Step 3: Backup and Extract on Server
```bash
cd /root
mv medhub medhub-backup-$(date +%Y%m%d)
mkdir medhub
tar -xzf medhub-update.tar.gz -C medhub
cd medhub
```

### Step 4: Restore .env and Rebuild
```bash
cp /root/medhub-backup-*/backend/.env /root/medhub/backend/.env

# Update API URLs (Steps 17-19)
# Rebuild (Steps 20-22)

pm2 restart all
```

---

## Security Recommendations

1. **Change JWT Secret**: Update `backend/.env` with strong random string
2. **Setup SSL**: Install Let's Encrypt when you get a domain
3. **Change MongoDB Port**: Configure MongoDB to listen on different port
4. **Setup MongoDB Authentication**: Create database users with passwords
5. **Regular Backups**: Schedule MongoDB backups
6. **Update System**: Run `sudo apt update && sudo apt upgrade` weekly

---

## Notes

- Server runs on Ubuntu
- Backend: Node.js + Express + MongoDB (Port 5001)
- Main Website: Next.js (Port 3000 via PM2)
- Admin: React + Vite (Static files on port 8080)
- Superadmin: React + Vite (Static files on port 8081)
- Process Manager: PM2
- Web Server: Nginx
- Database: MongoDB (Port 27017)
