# Afghan Community of Puget Sound - Community Center Website

A modern, responsive website for the Afghan Association of Puget Sound's community center fundraising campaign, optimized for GitHub Pages hosting.

## 🚀 Quick Start

### Option 1: Deploy to GitHub Pages

1. **Create a new GitHub repository** (or use an existing one)
   - Name it: `afghancommunity` or `community-center` (or whatever you prefer)

2. **Add files to your repository**
   - If deploying to `username.github.io`:
     - Upload all files to the root directory
   - If deploying to a project repository:
     - Upload all files to a `docs/` folder, or to the root if you prefer
     - Go to Settings → Pages → Choose source (either `main` branch with `docs/` folder or `gh-pages` branch)

3. **Enable GitHub Pages**
   - Go to Repository Settings → Pages
   - Select the branch and folder where your files are located
   - Your site will be live at `https://username.github.io` (or `https://username.github.io/repo-name`)

### Option 2: Local Testing

Simply open `index.html` in any web browser. No server required!

## 📁 File Structure

```
.
├── index.html          # Main website file
├── js/
│   └── script.js       # JavaScript for interactivity
├── README.md           # This file
└── .nojekyll          # Tells GitHub to serve static files directly
```

## ✨ Features

- **Fully Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Modern, Professional Look** - Built with Tailwind CSS for clean styling
- **No Build Required** - Pure HTML, CSS, and JavaScript
- **Fast Loading** - Uses CDN for styles and icons
- **Accessible** - Semantic HTML and ARIA labels
- **SEO Optimized** - Meta tags and structured content

## 🎨 Sections Included

1. **Navigation Header** - Fixed header with mobile menu
2. **Hero Section** - Eye-catching banner with call-to-action buttons
3. **About Section** - Organization info, stats, and core values
4. **Project Section** - Community center features and vision
5. **Progress Section** - Fundraising progress tracker
6. **Donation Section** - Multiple donation methods and options
7. **Contact Section** - Contact form and information
8. **Footer** - Links, social media, and newsletter signup

## 🔧 Customization

### Update Organization Name, Contact Info, and Links

Edit `index.html` and replace:
- Organization name and descriptions
- Contact email and phone number
- Social media links in the footer
- Donation amounts and methods

### Change Colors

The color scheme uses Tailwind CSS classes. To change from amber/orange to another color:
1. Replace `amber-600`, `amber-400`, `amber-50`, etc. with other Tailwind colors
2. Options: `blue`, `green`, `purple`, `red`, `pink`, etc.

### Add Your Own Images

Replace the image URL in the Hero section background:
```html
backgroundImage: 'url(YOUR_IMAGE_URL_HERE)'
```

## 📧 Contact Form

The contact form currently shows an alert. To make it functional:
1. Use a service like [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com)
2. Update the form submission handler in `js/script.js`

## 🌐 Domain Setup

For a custom domain (e.g., `afghancommunity.org`):
1. Purchase a domain from a registrar
2. Update DNS records to point to GitHub Pages
3. Add a `CNAME` file with your domain name to the repository
4. Enable custom domain in repository Settings → Pages

## ✅ Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Optimization

- Responsive navigation with mobile hamburger menu
- Touch-friendly buttons and links
- Optimized images for all screen sizes
- Readable text on all devices

## 🔒 Privacy & Security

- No data collection by default
- All contact form submissions require custom backend setup
- HTTPS automatically enabled on GitHub Pages

## 📄 License

This website template is provided as-is for use by Afghan Association of Puget Sound and similar community organizations.

## 🤝 Support & Questions

For help deploying or customizing:
1. Check GitHub Pages documentation: https://pages.github.com
2. Review Tailwind CSS docs: https://tailwindcss.com
3. Reach out to your technical support contact

---

**Last Updated:** April 2026
**Version:** 1.0
