# 📧 Email Setup Guide for Contact Form

The contact form is now configured to send emails to **setyusuf236@gmail.com** when someone submits it.

## Setup Instructions

Since you can't send emails directly from HTML/JavaScript (for security reasons), you need to use EmailJS, which is a free service.

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Free plan includes 200 emails per month (enough for most websites)

### Step 2: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** as your email service
4. Connect your Gmail account: `setyusuf236@gmail.com`
5. This will generate a **Service ID** (looks like `service_xxxxx`)

### Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

**Template Name:** `contact_form`

**Subject:** New Contact Message from Srov Website

**Content:**
```
From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Save the template - you'll get a **Template ID** (looks like `template_xxxxx`)

### Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Copy your **Public Key** (looks like `xxxxxxxxxxxxxx`)

### Step 5: Update Your Website

Open `index.html` and replace these placeholders:

**Line 313:** Replace `YOUR_PUBLIC_KEY` with your actual EmailJS Public Key

Example:
```javascript
emailjs.init("abc123xyz789"); // Your actual public key
```

Open `script.js` and replace these placeholders:

**Line 74:** Replace `YOUR_SERVICE_ID` with your EmailJS Service ID

Example:
```javascript
await emailjs.send('service_abc123', 'YOUR_TEMPLATE_ID', {
```

**Line 74:** Replace `YOUR_TEMPLATE_ID` with your EmailJS Template ID

Example:
```javascript
await emailjs.send('service_abc123', 'template_xyz789', {
```

### Step 6: Test It!

1. Open your website in a browser
2. Go to the Contact section
3. Fill out the form and submit
4. Check your email: **setyusuf236@gmail.com**

## Alternative: Using a Contact Form Service

If you don't want to set up EmailJS, you can use these alternatives:

### Option 1: Formspree
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up (free tier: 50 submissions/month)
3. Add this to your form in `index.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Getform.io
1. Go to [https://getform.io/](https://getform.io/)
2. Sign up (free tier: 50 submissions/month)
3. Add the action URL to your form

### Option 3: Backend Server
Create a backend API (Node.js, PHP, etc.) to handle form submissions

## Summary

**Your email:** setyusuf236@gmail.com ✓  
**Contact form:** Configured ✓  
**Next step:** Set up EmailJS following steps above

Once you complete the EmailJS setup, all contact form submissions will be emailed directly to setyusuf236@gmail.com!

