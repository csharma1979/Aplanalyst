# Aplanalyst Website Deployment Guide

This document outlines how to deploy the Aplanalyst React website. Since this is a modern Single Page Application (SPA) built with Vite and React, the process generally involves building the static files and uploading them to a hosting provider.

## Prerequisites

Before deploying, ensure you have the latest code and dependencies installed:

```bash
# 1. Install dependencies
npm install

# 2. Build the project for production
npm run build
```

The build process will generate a **`dist/`** directory containing the optimized HTML, CSS, and JS files. These are the files you need to deploy.

---

## 🚀 Option 1: Vercel (Recommended for React/Vite)

Vercel provides seamless deployment for Vite projects directly from your GitHub repository.

1. Go to [Vercel.com](https://vercel.com/) and sign in with your GitHub account.
2. Click **Add New** > **Project**.
3. Import the `csharma1979/Aplanalyst` GitHub repository.
4. Vercel will automatically detect that it's a Vite project.
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Vercel will build and deploy your site, and automatically update it every time you push to the `main` branch.

---

## 🚀 Option 2: Netlify

Netlify is another excellent option for hosting static React sites.

1. Go to [Netlify.com](https://www.netlify.com/) and log in with GitHub.
2. Click **Add new site** > **Import an existing project**.
3. Select GitHub and choose the `csharma1979/Aplanalyst` repository.
4. Netlify will configure the build settings:
   - **Build Command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy site**. Like Vercel, Netlify will auto-deploy on every push.

---

## 🚀 Option 3: Firebase Hosting

If you prefer Google's infrastructure, Firebase Hosting is fast and secure.

1. Install the Firebase CLI globally on your machine:
   ```bash
   npm install -g firebase-tools
   ```
2. Log in to your Google Account:
   ```bash
   firebase login
   ```
3. Initialize Firebase in the root of your project:
   ```bash
   firebase init hosting
   ```
4. Follow the prompts:
   - Select your Firebase project (or create a new one).
   - **What do you want to use as your public directory?** Type `dist`.
   - **Configure as a single-page app (rewrite all urls to /index.html)?** Type `Yes`.
   - **Set up automatic builds and deploys with GitHub?** `Yes` (optional, if you want CI/CD).
   - **File dist/index.html already exists. Overwrite?** Type `No`.
5. Deploy to production:
   ```bash
   firebase deploy --only hosting
   ```

---

## 🚀 Option 4: Shared Hosting (cPanel / GoDaddy / HostGator)

If you are deploying to traditional shared hosting:

1. Run the build command locally to generate your production files:
   ```bash
   npm run build
   ```
2. Locate the generated **`dist`** folder in your project directory.
3. Compress the *contents* of the `dist` folder into a `.zip` file. (Do not zip the folder itself, zip the files *inside* it).
4. Log into your hosting provider's cPanel and open the **File Manager**.
5. Navigate to your `public_html` directory (or the root folder for your domain).
6. Upload the `.zip` file and extract its contents. 
7. Your site is now live!

### Note on Routing for Shared Hosting (Optional)
Since this is an SPA, if you ever add multi-page routing (e.g., using `react-router-dom`), you will need to add a `.htaccess` file in your `public_html` folder to redirect all requests to `index.html`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Performance & SEO Checks After Deployment

Once deployed, you can verify your website's performance using:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) (Built into Chrome DevTools)
