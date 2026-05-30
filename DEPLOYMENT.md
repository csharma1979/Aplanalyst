# Aplanalyst Website Deployment Guide

This document outlines how to deploy the Aplanalyst React website.

## Prerequisites

Before deploying, ensure you have the latest code and dependencies installed:

```bash
# 1. Install dependencies
npm install

# 2. Build the project for production
npm run build
```

The build process will generate a **`dist/`** directory containing the optimized HTML, CSS, and JS files.

---

## 🚀 Option 1: VPS with PM2 & Phusion Passenger (Recommended)

This approach serves your React single-page application using an Express.js server, which is then managed by PM2 and routed through Phusion Passenger for `aplanalyst.in`.

### 1. Server Configuration
We have included a `server.js` file in the root of the project. This file uses Express to serve the static assets inside the `dist/` directory and handles React client-side routing.

### 2. Deployment Steps on the VPS

1. SSH into your VPS.
2. Clone your repository into your application directory (e.g., `/var/www/aplanalyst.in`):
   ```bash
   git clone https://github.com/csharma1979/Aplanalyst.git /var/www/aplanalyst.in
   cd /var/www/aplanalyst.in
   ```
3. Install dependencies and build the static assets:
   ```bash
   npm install
   npm run build
   ```

### 3. Running with PM2
PM2 will keep your Node.js server alive forever and automatically restart it if it crashes.

1. Start the application with PM2:
   ```bash
   pm2 start server.js --name "aplanalyst-web"
   ```
2. (Optional) Ensure PM2 restarts automatically if the VPS reboots:
   ```bash
   pm2 save
   pm2 startup
   ```

### 4. Configuring Phusion Passenger (Nginx/Apache)

If you are using Passenger with Nginx to serve `aplanalyst.in`:

1. Open your Nginx configuration file for the domain (e.g., `/etc/nginx/sites-available/aplanalyst.in`):
   ```nginx
   server {
       listen 80;
       server_name aplanalyst.in www.aplanalyst.in;

       # Tell Passenger that your app is a Node.js app
       passenger_enabled on;
       passenger_app_type node;
       passenger_startup_file server.js;

       # Point the root to the "public" or "dist" directory
       # Passenger requires the root to point to a 'public' folder. 
       # You can symlink your 'dist' folder to 'public' or just point directly:
       root /var/www/aplanalyst.in/dist;

       # Optional: Enforce HTTPS here if you have SSL setup
   }
   ```
2. **Note on Passenger + PM2**: Phusion Passenger acts as an application server and process manager itself. If you enable `passenger_enabled on;` and define `passenger_startup_file server.js;`, Passenger will start and manage the `server.js` process directly. 
   - **If you want Passenger to manage it:** You don't actually need PM2. Passenger will run `server.js` on its own.
   - **If you strictly want PM2 to manage it:** You should configure Nginx as a standard reverse proxy (ignoring Passenger entirely for this domain) and forward traffic to the PM2 port (default 3000):
     ```nginx
     server {
         listen 80;
         server_name aplanalyst.in www.aplanalyst.in;
         
         location / {
             proxy_pass http://localhost:3000;
             proxy_http_version 1.1;
             proxy_set_header Upgrade $http_upgrade;
             proxy_set_header Connection 'upgrade';
             proxy_set_header Host $host;
             proxy_cache_bypass $http_upgrade;
         }
     }
     ```
3. Restart Nginx/Apache:
   ```bash
   sudo systemctl restart nginx
   ```

---

## 🚀 Option 2: Vercel (Recommended for GitHub Integration)

1. Go to [Vercel.com](https://vercel.com/) and sign in with your GitHub account.
2. Click **Add New** > **Project**.
3. Import the `csharma1979/Aplanalyst` GitHub repository.
4. Vercel will automatically detect that it's a Vite project. Click **Deploy**.

---

## 🚀 Option 3: Netlify

1. Go to [Netlify.com](https://www.netlify.com/) and log in with GitHub.
2. Click **Add new site** > **Import an existing project**.
3. Select GitHub and choose the `csharma1979/Aplanalyst` repository.
4. Click **Deploy site**.

---

## 🚀 Option 4: Firebase Hosting

1. Install the Firebase CLI: `npm install -g firebase-tools`
2. Log in: `firebase login`
3. Initialize: `firebase init hosting` (Set `dist` as public directory, and configure as single-page app).
4. Deploy: `firebase deploy --only hosting`

---

## 🚀 Option 5: Shared Hosting (cPanel / GoDaddy / HostGator)

1. Run `npm run build`.
2. Compress the *contents* of the `dist` folder into a `.zip` file.
3. Log into cPanel > File Manager.
4. Upload and extract into your `public_html` directory.
5. Add a `.htaccess` file to rewrite routes to `index.html` for the React router to function properly.
