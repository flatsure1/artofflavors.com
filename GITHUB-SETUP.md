# Art of Flavors — GitHub Pages Setup Guide

This folder contains your complete static website for **www.artofflavors.com**.  
Follow the steps below to publish it live on GitHub Pages (free hosting).

---

## Step 1 — Create a GitHub Account

1. Go to **https://github.com/signup**
2. Sign up with your email: `hanoiguide@gmail.com`
3. Choose the **Free** plan
4. Verify your email address

---

## Step 2 — Create a New Repository

1. Click the **+** button (top right) → **New repository**
2. Set the name to: `artofflavors.com`
3. Set visibility to **Public** (required for free GitHub Pages)
4. Leave everything else as default
5. Click **Create repository**

---

## Step 3 — Upload Your Website Files

### Option A — Upload via Browser (easiest)
1. On your new repository page, click **uploading an existing file**
2. Drag and drop ALL files and folders from this `artofflavors-website` folder
3. In the commit message type: `Initial website launch`
4. Click **Commit changes**

### Option B — Upload via Git (if you have Git installed)
Open Terminal and run:
```bash
cd /path/to/artofflavors-website
git init
git add .
git commit -m "Initial website launch"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/artofflavors.com.git
git push -u origin main
```
*(Replace YOUR-USERNAME with your GitHub username)*

---

## Step 4 — Enable GitHub Pages

1. In your repository, click **Settings** (top tab)
2. Scroll down to **Pages** in the left sidebar
3. Under **Source**, select:
   - Branch: **main**
   - Folder: **/ (root)**
4. Click **Save**
5. GitHub will show a green banner: *"Your site is live at https://your-username.github.io/artofflavors.com"*

---

## Step 5 — Connect Your Custom Domain (www.artofflavors.com)

### In GitHub:
1. Go to **Settings → Pages**
2. Under **Custom domain**, type: `www.artofflavors.com`
3. Click **Save**
4. Check **Enforce HTTPS** once it appears (may take a few minutes)

### At Your Domain Registrar (GoDaddy / Namecheap / etc.):

Add these **DNS records** in your domain's DNS settings:

| Type  | Name | Value                    |
|-------|------|--------------------------|
| CNAME | www  | `YOUR-USERNAME.github.io` |

**OR** if you want the apex domain (artofflavors.com without www) to also work, add these **A records** too:

| Type | Name | Value          |
|------|------|----------------|
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |

> **Note:** DNS changes take 10 minutes to 24 hours to propagate globally.

---

## Step 6 — Set Up the Contact Form (Optional)

The contact form uses **Formspree** (free tier: 50 submissions/month).

1. Go to **https://formspree.io** and sign up
2. Create a new form → copy your Form ID (looks like `xabcdefg`)
3. Open `contact/index.html` and find this line:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
4. Replace `YOUR_FORM_ID` with your actual Formspree form ID
5. Re-upload the file to GitHub

---

## Step 7 — Verify Everything is Working

After DNS propagates, visit:
- ✅ https://www.artofflavors.com
- ✅ https://www.artofflavors.com/recipes/
- ✅ https://www.artofflavors.com/journal/
- ✅ https://www.artofflavors.com/about/
- ✅ https://www.artofflavors.com/contact/
- ✅ https://www.artofflavors.com/anything-wrong (should show 404 page)

---

## Website File Structure

```
artofflavors-website/
├── index.html              ← Homepage
├── 404.html                ← Custom 404 page
├── CNAME                   ← Custom domain config (DO NOT DELETE)
├── assets/
│   ├── css/
│   │   └── style.css       ← All styles
│   └── js/
│       └── main.js         ← All interactions
├── recipes/
│   ├── index.html          ← Recipes listing
│   ├── beurre-blanc/       ← Individual recipe pages
│   ├── miso-duck-confit/
│   ├── creme-brulee/
│   ├── champagne-risotto/
│   ├── yuzu-sole-meuniere/
│   └── tarte-tatin/
├── journal/
│   └── index.html          ← Journal / blog listing
├── about/
│   └── index.html          ← About page
└── contact/
    └── index.html          ← Contact page
```

---

## Adding New Recipes

To add a new recipe:
1. Create a new folder inside `recipes/` (e.g., `recipes/duck-a-lorange/`)
2. Copy any existing recipe's `index.html` into it
3. Edit the content: title, ingredients, steps, meta
4. Upload the new folder to GitHub
5. Add a card link to `recipes/index.html`

---

## Adding Your Own Photos

Replace the emoji placeholders in recipe pages with real images:
```html
<!-- Replace this: -->
<div class="recipe-hero-visual">🦆</div>

<!-- With this: -->
<div class="recipe-hero-visual">
  <img src="../../assets/images/miso-duck-confit.jpg" alt="Miso Duck Confit">
</div>
```

Upload photos to `assets/images/` and keep file sizes under 200KB for fast loading.

---

## Support

For questions about this setup, email: hanoiguide@gmail.com

**Built with:** Pure HTML + CSS + JavaScript — no frameworks, no databases.  
**Hosted on:** GitHub Pages (free)  
**Domain:** www.artofflavors.com
