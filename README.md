# Official_Sameen Portfolio

Personal portfolio for Saminu Aminu highlighting experience in frontend development, cybersecurity, and full-stack projects. The site is built with plain HTML, CSS, and JavaScript, making it easy to deploy on any static host (GitHub Pages, Netlify, Vercel, etc.).

## Features
- Animated hero with dynamic role typing and quick access to resume/socials.
- Dedicated sections for About, Experience, Projects, Certifications, and Contact.
- Certification gallery that renders stylized previews of earned credentials directly in the browser.
- Project summaries split between live demos (with screenshots) and text-based case studies for in-progress apps.
- Responsive layout with glassmorphism styling, matching neon accent colors used across all pages.

## Structure
```
├── index.html          # Landing page
├── about.html          # Professional summary, background, soft skills
├── experience.html     # Experience timeline + achievements
├── projects.html       # Live demos, project write-ups, certifications
├── contact.html        # Contact links + Formspree form
├── style.css           # Global styling
├── script.js           # Typing effect + helpers
└── assets/             # Images, resume PDF, certificate Image
```

## Local Development
1. Clone or download the repository.
2. Open any of the HTML files directly in a browser, or serve the folder with a simple HTTP server:
   ```bash
   # Windows PowerShell example
   python -m http.server 5500
   ```
3. Navigate to `https://my-portfolio-5vcx.onrender.com` to preview the site.

## Customization
- Replace images inside `assets/` (profile photo, certificate previews, project screenshots) and update the file paths in the HTML files if needed.
- Update the content of the cards/paragraphs in `projects.html` and `experience.html` as your portfolio grows.
- Tweak the color palette or layout inside `style.css` to fit a new brand.

## Deployment
Because the site is fully static, it can be hosted on GitHub Pages:
1. Push the repository to GitHub.
2. Enable **Pages** under repository settings, selecting the `main` branch and `/root` directory.
3. Wait for the build to finish; your portfolio will be available at `https://<username>.github.io/Portfolio/`.

Feel free to fork and adapt this structure to keep your achievements up to date.
