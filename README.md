# CyberLab Portfolio Website

A dark-mode cybersecurity-themed portfolio website built for GitHub Pages.

## 🚀 Quick Start

### Option 1: Deploy to GitHub Pages (Recommended)

1. **Create a new GitHub repository** named `yourusername.github.io`
   - Replace `yourusername` with your actual GitHub username

2. **Upload the files**
   ```bash
   # Navigate to the website folder
   cd cyberlab-website
   
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial commit: CyberLab portfolio"
   
   # Add your GitHub repo as remote
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   
   # Push to GitHub
   git push -u origin main
   ```

3. **Enable GitHub Pages** (if not automatic)
   - Go to repository Settings → Pages
   - Source should be set to "Deploy from a branch"
   - Branch: `main` (or `master`), folder: `/ (root)`
   - Click Save

4. **Your site will be live at:** `https://yourusername.github.io`

### Option 2: Test Locally First

```bash
# Using Python's built-in server
cd cyberlab-website
python3 -m http.server 8000

# Open browser to: http://localhost:8000
```

## 📁 File Structure

```
cyberlab-website/
├── index.html          # Main HTML file (all sections in one page)
├── css/
│   └── style.css      # All styles (dark mode theme)
├── js/
│   └── main.js        # Interactive features
└── README.md          # This file
```

## ✏️ How to Customize

### 1. Update Personal Information

Open `index.html` and search for:
- **"CyberLab"** - Change to your brand/name
- **"Cybersecurity Researcher"** - Update the typing effect texts in `js/main.js`
- **About section** - Write your actual bio
- **Contact links** - Update GitHub, LinkedIn, email in footer

### 2. Add Your Projects

In `index.html`, find the `#projects` section. Copy this template:

```html
<article class="project-card">
    <div class="project-header">
        <span class="project-category">Category</span>
        <div class="project-links">
            <a href="YOUR_GITHUB_LINK" class="project-link" title="View Code">
                <!-- GitHub icon SVG -->
            </a>
        </div>
    </div>
    <h3 class="project-title">Project Name</h3>
    <p class="project-description">
        Your project description here.
    </p>
    <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">Security</span>
    </div>
</article>
```

### 3. Update Stats

In the About section, change the stat numbers:
```html
<span class="stat-number">0</span>  <!-- Change to your actual numbers -->
```

### 4. Add Knowledge Base Articles

In the `#knowledge` section, update the category lists with links to your actual articles. 

**For Obsidian integration:** See the "Obsidian Publishing" section below.

### 5. Add Blog Posts

Copy the blog card template in the `#blog` section and fill in your content.

### 6. Add Certifications

Update the certifications section as you earn them:
```html
<span class="cert-status completed">Completed</span>
```

## 🎨 Design Customization

### Change Colors

Open `css/style.css` and edit the CSS variables at the top:

```css
:root {
    --accent-primary: #00d4ff;      /* Main accent color (cyan) */
    --accent-secondary: #7c3aed;    /* Secondary accent (purple) */
    --accent-success: #10b981;      /* Success/green */
    /* ... etc */
}
```

### Change Fonts

The site uses Google Fonts (Inter + JetBrains Mono). To change:
1. Update the `<link>` in `index.html` `<head>`
2. Update `--font-primary` and `--font-mono` in `css/style.css`

## 📝 Obsidian Publishing Options (Free)

Since you're using Obsidian and want free publishing, here are your options:

### Option 1: Manual Export (Simple)
1. In Obsidian, export notes as Markdown
2. Convert Markdown to HTML sections
3. Add to the Knowledge Base section manually

### Option 2: Quartz (Recommended for Obsidian)
Quartz is a free, open-source tool that turns Obsidian vaults into static websites:
- **Website:** https://quartz.jzhao.xyz/
- **How it works:** 
  1. Install Quartz (free, open-source)
  2. Point it to your Obsidian vault
  3. It generates a static site
  4. Deploy to GitHub Pages
- **Pros:** Automatic, preserves Obsidian links, free
- **Cons:** Separate from this portfolio (but you can link them)

### Option 3: Digital Garden Plugin
- Install the "Digital Garden" plugin in Obsidian
- Connects to GitHub
- Publishes notes as you update them
- Free and open-source
- **GitHub:** https://github.com/oleeskild/obsidian-digital-garden

### Option 4: Hybrid Approach (What I Recommend)
1. Use **this portfolio** for: Home, About, Projects, Certifications
2. Use **Quartz or Digital Garden** for: Knowledge Base (auto-generated from Obsidian)
3. Link them together with navigation

This gives you the best of both worlds: a polished portfolio + auto-updating knowledge base.

## 🔧 Adding a Custom Domain Later

1. **Buy your domain** from Namecheap, Porkbun, or Cloudflare
2. **In GitHub repo:** Settings → Pages → Custom Domain → Enter your domain
3. **At your domain registrar:** Add DNS records:
   ```
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```
4. **Add a CNAME file** to your repo root with just: `yourdomain.com`

GitHub will handle HTTPS automatically!

## 🎯 Next Steps

1. ✅ Test locally first (`python3 -m http.server 8000`)
2. ✅ Update all placeholder content
3. ✅ Add your actual projects and info
4. ✅ Push to GitHub
5. ✅ Share your link!

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript (no frameworks)
- Google Fonts (Inter + JetBrains Mono)
- GitHub Pages (hosting)

## 📄 License

Free to use and modify for your personal portfolio!

---

**Built with ☕ and curiosity**

Happy coding! 🚀
