# EmailJS Setup Guide

To enable direct email sending from your contact form, follow these steps:

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service
1. After logging in, go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Click "Connect Account" and authorize with `komaldissanayaka.work@gmail.com`
5. Copy the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template:

**Template Content:**
```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
Reply to: {{reply_to}}
```

4. Save the template and copy the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `abc123XYZ-`)

## Step 5: Update Your Code
Open `src/App.js` and find the `handleSubmit` function around line 530.

Replace these placeholder values:
```javascript
const serviceID = 'service_qb5plfc';     // Replace with your Service ID
const templateID = 'template_ojsg1wn';   // Replace with your Template ID  
const publicKey = 'VKHkQqmX2pODopYgG';     // Replace with your Public Key
```

Example:
```javascript
const serviceID = 'service_abc123';
const templateID = 'template_xyz789';
const publicKey = 'abc123XYZ-';
```

## Step 6: Test
1. Save the file
2. The website will auto-reload
3. Fill out the contact form and click "Send Message"
4. Check `komaldissanayaka.work@gmail.com` for the email!

## Free Tier Limits
- 200 emails per month
- Perfect for a portfolio website

## Troubleshooting
- If emails don't arrive, check your EmailJS dashboard for error logs
- Make sure you authorized the correct Gmail account
- Check spam folder in your email

## Security Note
The public key is safe to expose in frontend code - EmailJS uses domain restrictions and rate limiting to prevent abuse.
