
### 43. DEPLOYMENT.md
```markdown
# 🚀 Gazi Online - Deployment Guide

## MongoDB Atlas Setup

1. Go to https://www.mongodb.com/atlas
2. Create free M0 cluster
3. Add database user
4. Whitelist IP (0.0.0.0/0 for all)
5. Copy connection string

## Backend Deployment (Railway)

1. Push code to GitHub
2. Go to https://railway.app
3. New Project → Deploy from GitHub
4. Add environment variables:
   - MONGODB_URI=your-atlas-uri
   - JWT_SECRET=strong-secret-key
   - FRONTEND_URL=your-vercel-url

## Frontend Deployment (Vercel)

1. Push frontend to GitHub
2. Go to https://vercel.com
3. Import repository
4. Add environment variable:
   - BACKEND_URL=your-railway-url
5. Deploy

## Custom Domain (Optional)

1. Buy domain from Namecheap/GoDaddy
2. Add to Vercel project settings
3. Update DNS records
4. Update FRONTEND_URL in backend

## Post-Deployment Checklist

- [ ] Test contact form
- [ ] Verify admin login
- [ ] Check language switching
- [ ] Test dark mode
- [ ] Verify WhatsApp button
- [ ] Check mobile responsive
- [ ] Submit sitemap to Google
