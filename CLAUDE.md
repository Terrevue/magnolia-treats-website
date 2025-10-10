# Magnolia Treats Website - Development Log

**Last Updated:** 2025-10-08
**Purpose:** Cookie business website for Mia
**Live URL (temp):** https://magnoliatreats.netlify.app
**Future Domain:** magnolia-treats.com (registered at Namecheap)

---

## 📋 Current Status: IN PROGRESS - Waiting for TinaCMS Branch Indexing

We are **95% complete** with the website setup. TinaCMS is installed and configured, but waiting for TinaCloud to index the `main` branch before the admin interface can be built.

---

## ✅ Completed Tasks

### 1. Initial Website Setup
- [x] Created responsive website with Tailwind CSS
- [x] Added logo (images/logos/logo02.png) and Mia mascot (images/cartoon_mia_transparent.png)
- [x] Designed hero section, about, treats showcase, order form
- [x] Mobile-responsive design

### 2. GitHub Setup
- [x] Initialized git repository
- [x] Created GitHub repository: `Terrevue/magnolia-treats-website`
- [x] Connected local folder to GitHub
- [x] All code pushed and version controlled

**GitHub Repo:** https://github.com/Terrevue/magnolia-treats-website

### 3. Production Optimization
- [x] Installed Tailwind CSS v3 (replaced CDN with production build)
- [x] Created build process: `npm run build:css`
- [x] Added favicon (no more 404 errors)
- [x] Fixed all image paths for deployment
- [x] Created .gitignore for node_modules

### 4. Netlify Hosting
- [x] Authenticated with Netlify CLI (cterrebonne@gmail.com)
- [x] Created Netlify site: `magnoliatreats`
- [x] Linked local directory to Netlify site
- [x] Site ID: `bccd68d3-e46a-44c6-a543-a5297b82ff0b`

**Netlify Dashboard:** https://app.netlify.com/projects/magnoliatreats

### 5. Content Structure
- [x] Created `/content` directory with JSON files for editable content:
  - `content/hero.json` - Hero section text
  - `content/about.json` - About Mia section
  - `content/treats.json` - Cookie listings
  - `content/contact.json` - Contact email and location
  - `content/comics/` - Weekly comic uploads (folder created)

### 6. CMS Selection & Setup
- [x] Initially tried Netlify CMS (deprecated)
- [x] Discovered Netlify Identity is deprecated
- [x] Removed Netlify CMS files
- [x] Decided on TinaCMS (modern, actively maintained)
- [x] Installed TinaCMS dependencies
- [x] Created TinaCMS configuration file (`tina/config.js`)
- [x] Created TinaCloud account and project
- [x] Added Client ID and Token to Netlify environment variables
- [ ] **BLOCKED:** Waiting for TinaCloud to index `main` branch

---

## 🚧 Current Task: Complete TinaCMS Setup

### What TinaCMS Does
TinaCMS provides a visual editing interface at `/admin` where Mia can:
- Edit all website text (hero, about, cookies, contact)
- Add/remove/edit cookie treats with images
- Upload weekly comic strips
- Changes auto-commit to GitHub and rebuild the site
- **NO CODING REQUIRED**

### Why We're Stuck
TinaCloud needs to index the `main` branch before we can build the admin interface. The branch indexing hasn't started yet, showing "No branches found" in the TinaCloud dashboard.

### What's Needed to Continue

**Waiting for TinaCloud Branch Indexing:**

The issue is that TinaCloud isn't detecting/indexing the `main` branch automatically. Here are possible solutions:

1. **Wait (10-30 minutes):** Sometimes indexing is delayed
2. **Check GitHub Integration:**
   - Go to: https://app.tina.io/projects/52f20b97-10c3-4b40-b614-4c13f6e5045e/overview
   - Verify GitHub connection is working
   - Look for "Re-sync" or "Refresh" button
3. **Contact Tina Support:** There may be a webhook/integration issue
4. **Alternative:** Use TinaCMS in local-only mode (no cloud required)

**Once Branch is Indexed:**

1. Build admin interface:
   ```bash
   export TINA_CLIENT_ID="52f20b97-10c3-4b40-b614-4c13f6e5045e"
   export TINA_TOKEN="7628d96c023bf7102a7e5c676cb6cdd0ed7fc16b"
   npm run tina:build
   ```

2. Commit and push admin files:
   ```bash
   git add admin/
   git commit -m "Add TinaCMS admin interface"
   git push
   ```

3. Update netlify.toml build command back to `npm run build`

4. Access admin at: https://magnoliatreats.netlify.app/admin

**OPTION B: Simple Alternative (No Cloud Service)**

If TinaCMS cloud setup is too complex, we can create a simpler solution:
- GitHub web-based JSON editor
- Teach Mia to edit JSON files directly in GitHub
- Still no HTML/CSS knowledge required
- Just edit text in simple files

---

## 📁 Project Structure

```
website/
├── index.html              # Main website file
├── css/
│   └── output.css         # Compiled Tailwind CSS
├── src/
│   └── input.css          # Tailwind source
├── images/
│   ├── logos/
│   │   └── logo02.png     # Main logo
│   └── cartoon_mia_transparent.png  # Mascot
├── content/               # Editable content (JSON files)
│   ├── hero.json
│   ├── about.json
│   ├── treats.json
│   ├── contact.json
│   └── comics/            # Weekly comics folder
├── tina/
│   └── config.js          # TinaCMS configuration
├── admin/                 # Will be generated by TinaCMS build
├── package.json           # NPM dependencies
├── tailwind.config.js     # Tailwind config
└── .gitignore
```

---

## 🔑 Important Credentials & URLs

### GitHub
- **Account:** Terrevue
- **Repository:** https://github.com/Terrevue/magnolia-treats-website
- **Branch:** main

### Netlify
- **Account:** cterrebonne@gmail.com
- **Site Name:** magnoliatreats
- **Site ID:** bccd68d3-e46a-44c6-a543-a5297b82ff0b
- **Dashboard:** https://app.netlify.com/projects/magnoliatreats
- **Live URL:** https://magnoliatreats.netlify.app
- **Env Variables:** https://app.netlify.com/sites/magnoliatreats/settings/env

### Domain (Not Yet Configured)
- **Registrar:** Namecheap.com
- **Domain:** magnolia-treats.com
- **Status:** Registered, not yet pointed to Netlify

**DNS Configuration (When Ready):**
```
Type: A Record
Host: @
Values:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

Type: CNAME
Host: www
Value: terrevue.github.io
```

### TinaCMS (Pending Setup)
- **Website:** https://app.tina.io
- **Status:** Account not yet created
- **Needs:** Client ID and Token (see setup steps above)

---

## 🛠 Technical Details

### Build Commands
```bash
# Build Tailwind CSS
npm run build:css

# Build TinaCMS admin (requires TINA_CLIENT_ID and TINA_TOKEN)
npm run tina:build

# Build everything
npm run build
```

### Git Workflow
```bash
# Make changes, then:
git add .
git commit -m "Description of changes"
git push

# Netlify auto-deploys on push to main branch
```

### Local Development
- Open `index.html` in browser to preview
- Changes to CSS require rebuild: `npm run build:css`

---

## 🎯 Next Steps (In Order)

1. **Complete TinaCMS Setup** (see Option A above)
   - Create Tina account
   - Connect GitHub repo
   - Add credentials to Netlify
   - Test admin interface

2. **Point Custom Domain** (after site is working)
   - Update DNS at Namecheap
   - Configure domain in Netlify
   - Enable HTTPS

3. **Train Mia**
   - Show her how to access /admin
   - Walk through editing each section
   - Show how to upload images
   - Demonstrate adding weekly comics

4. **Optional Enhancements**
   - Add Google Analytics
   - Set up contact form (Netlify Forms)
   - Add more cookie types
   - Create photo gallery
   - SEO optimization

---

## 📝 Notes for Future Claude Sessions

### File Locations
- Main HTML: `/Users/chris/Dropbox/Mia/Magnolia Treats/website/index.html`
- Content files: `/Users/chris/Dropbox/Mia/Magnolia Treats/website/content/*.json`
- TinaCMS config: `/Users/chris/Dropbox/Mia/Magnolia Treats/website/tina/config.js`

### Netlify CLI
- Authenticated and working
- Linked to site already
- Can deploy with: `netlify deploy --prod`

### MCP Servers Configured
- Netlify MCP: Installed but needs authentication
- Command: `claude mcp list` to check status

### Important Decisions Made
1. Chose Netlify over GitHub Pages (better features)
2. Chose TinaCMS over Netlify CMS (not deprecated)
3. Using content JSON files for easy editing
4. Tailwind CSS v3 (not v4 - had compatibility issues)

---

## 🐛 Known Issues

None currently. All console errors fixed.

---

## 💡 Alternative Approaches Considered

1. **Netlify CMS** - Deprecated, abandoned
2. **Contentful/Sanity** - Too complex for simple site
3. **WordPress** - Monthly costs, overkill
4. **Google Docs + Scripts** - Requires custom coding
5. **Direct JSON editing in GitHub** - Works but not as user-friendly

**Final Choice:** TinaCMS - Best balance of simplicity and features

---

## 📞 Support Resources

- TinaCMS Docs: https://tina.io/docs/
- Netlify Docs: https://docs.netlify.com/
- Tailwind CSS Docs: https://tailwindcss.com/docs
- GitHub Repo Issues: https://github.com/Terrevue/magnolia-treats-website/issues

---

**Last Action Taken:**
Installed TinaCMS and created configuration file. Waiting for TinaCMS cloud credentials to complete setup.

**To Resume:**
Read this file, then follow "What's Needed to Continue" section above.
