# ស្រូវ - Srov Website

A modern, professional, and responsive website for **Srov**, an agricultural trading platform designed to connect farmers, buyers, and traders.

## 🌟 Features

- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with earthy green and brown agricultural tones
- **Smooth Animations**: Engaging hover effects and scroll animations
- **Contact Form**: Interactive contact form with validation
- **Easy to Edit**: Clear comments throughout the code showing exactly where to make changes

## 📁 Project Structure

```
web_explain/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript for interactivity
└── README.md          # This file
```

## 🎨 Design Elements

- **Color Palette**: 
  - Primary Green: `#2d5016`
  - Secondary Green: `#4a7c2c`
  - Light Green: `#8dbf5e`
  - Accent Brown: `#8b6f47`
  - Light Brown: `#d4a574`

- **Typography**: Poppins (Google Fonts)

## ✉️ Contact Form Setup

The contact form is now configured to send emails to **setyusuf236@gmail.com**.

**Important:** You need to set up EmailJS (free) for the contact form to work. See `EMAIL_SETUP.md` for detailed instructions.

Quick setup:
1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Connect your Gmail: setyusuf236@gmail.com
3. Get your Public Key, Service ID, and Template ID
4. Replace the placeholders in `index.html` and `script.js`

See `EMAIL_SETUP.md` for complete setup guide.

## 📝 How to Edit

### Text Content
All text content is marked with comments like `<!-- 💬 To edit: -->`. Simply search for these comments to find editable sections.

### Hero Section
- **File**: `index.html`
- **Look for**: `<!-- 💬 To edit: Change hero text in <h1> and <p> -->`
- **Change**: The hero title, slogan, and description

### Images

**Hero Image (Main Background):**
The rice planting image you sent is perfect for the hero section!
1. Save your image as `hero.jpg`
2. Place it in: `C:\Users\Set Yusuf\Desktop\web_explain\images\hero.jpg`
3. The image will automatically appear behind the title when you open the website!

**Other Images:**
For additional images (about.jpg, feature1.jpg, etc.):
1. Add your images to the `/images/` folder
2. Replace the placeholder divs with `<img>` tags

Example:
```html
<!-- Replace this: -->
<div class="placeholder-image" data-image="images/about.jpg"></div>

<!-- With this: -->
<img src="images/about.jpg" alt="About Srov">
```

**Quick Guide:** See `IMAGE_SAVE_INSTRUCTIONS.txt` for detailed steps!

### Download Links
- **File**: `index.html`
- **Section**: App Download Section
- **Update**: Replace `href="#"` with actual Google Play and App Store URLs

### Contact Information
- **File**: `index.html`
- **Section**: Contact Section
- **Update**: Email, phone, address, and social media links

### Social Media Links
- **File**: `index.html`
- **Section**: Footer and Contact Section
- **Update**: Add your actual social media URLs

## 🚀 Getting Started

1. **Open the website**:
   - Simply open `index.html` in any modern web browser
   - Or use a local server: `python -m http.server` (Python 3)

2. **Customize**:
   - Edit `index.html` for content and structure
   - Edit `styles.css` for colors, fonts, and layout
   - Edit `script.js` for interactive features

3. **Add Images**:
   - Create an `images/` folder
   - Add your images with the names referenced in the HTML

## 📦 Sections Included

1. **Hero Section** - Eye-catching banner with call-to-action
2. **About Section** - Introduction to Srov and its mission
3. **Features Section** - 4 key features with icons and descriptions
4. **How It Works** - Step-by-step visual guide (4 steps)
5. **Download Section** - App store download buttons
6. **Contact Section** - Contact form and information
7. **Footer** - Links, newsletter, and copyright

## 🔧 Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- JavaScript (Vanilla JS)
- Google Fonts (Poppins)

## 💡 Key Features

- **Mobile Responsive**: Works on all screen sizes
- **Smooth Scrolling**: Navigation links scroll smoothly to sections
- **Interactive Forms**: Contact form and newsletter signup
- **Modern Animations**: Fade-in and slide-up effects on scroll
- **Accessible**: Semantic HTML and ARIA labels

## 📧 Contact Form Setup

Currently, the contact form shows an alert message. To connect to a backend:

1. Edit `script.js`
2. Find the comment: `💬 Add your form submission logic here`
3. Add your API endpoint

Example:
```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

© 2024 Srov (ស្រូវ). All rights reserved.

---

**Need Help?** Check the comments in the code marked with 💬 for guidance on what to edit.

