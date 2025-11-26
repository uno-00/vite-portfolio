# EmailJS Setup Guide

Para makapag-send ng email diretso sa inbox mo, kailangan mo ng EmailJS account (FREE).

## Step 1: Sign up sa EmailJS
1. Pumunta sa https://www.emailjs.com/
2. Click "Sign Up" (FREE account)
3. I-login ang account mo

## Step 2: Create Email Service
1. Sa dashboard, pumunta sa **Email Services**
2. Click **Add New Service**
3. Piliin ang email provider mo (Gmail recommended)
4. Sundin ang instructions para i-connect ang Gmail account mo
5. Copy ang **Service ID** (halimbawa: `service_abc123`)

## Step 3: Create Email Template
1. Pumunta sa **Email Templates**
2. Click **Create New Template**
3. Gamitin ang template na ito:

**Sa "Subject" field (sa left column, sa taas):**
```
New Message from {{name}}
```

**Sa "Content" field (sa left column, sa ilalim ng Subject):**
- Click ang **"Edit Content"** button (may pencil icon)
- Gamitin ang template na ito (pwede mo gamitin ang default template ng EmailJS o customize):
```
You received a new message from your portfolio website:

{{name}}
{{time}}

{{message}}
```

**O kung gusto mo ng mas detailed format:**
```
You received a new message from your portfolio website:

Name: {{name}}
Email: {{email}}
Time: {{time}}

Message:
{{message}}

---
Reply to: {{email}}
```

**⚠️ IMPORTANT:** Dapat may {{name}}, {{time}}, at {{message}} sa template mo para gumana.

**Sa right column:**
- **To Email** field: Ilagay `ysrvictorio@gmail.com`
- **From Name** field: Ilagay `{{name}}`
- **Reply To** field: Ilagay `{{email}}`
- **From Email**: I-check ang "Use Default Email Address" checkbox

4. I-save ang template
5. Copy ang **Template ID** (halimbawa: `template_xyz789`) - makikita mo ito sa template name o sa URL

## Step 4: Get Public Key
1. Pumunta sa **Account** → **General**
2. Hanapin ang **Public Key**
3. Copy ang Public Key (halimbawa: `abcdefghijklmnop`)

## Step 5: Create .env file
1. Sa root folder ng project, gumawa ng file na `.env`
2. Ilagay ang credentials mo:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Halimbawa:**
```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

## Step 6: Restart Dev Server
1. I-stop ang dev server (Ctrl+C)
2. I-start ulit: `npm run dev`

## Testing
1. Pumunta sa contact form
2. Mag-fill out ng test message
3. I-submit
4. Check ang email mo (ysrvictorio@gmail.com) - dapat may natanggap ka na!

---

**Note:** Ang free tier ng EmailJS ay may 200 emails/month limit, pero sapat na yan para sa portfolio website.

