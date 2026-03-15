# ⚡ Quick Start Guide - Gazi Online

## Get Started in 5 Minutes

### Step 1: Create Project Folder
```bash
mkdir gazi-online && cd gazi-online

Step 2: Create All Directories

mkdir -p frontend/src/app/"[locale]"/{about,services,contact,admin/dashboard}
mkdir -p frontend/src/components/{ui,layout,sections,providers}
mkdir -p frontend/src/lib/i18n
mkdir -p frontend/messages
mkdir -p backend/{config,models,routes,middleware}

Step 3: Copy All Code Files
Copy the 41 code files I provided into their respective locations.
Step 4: Install & Run

# Backend
cd backend
npm install
npm start

# Frontend (new terminal)
cd frontend
npm install
npm run dev

Step 5: Open Browser
Go to http://localhost:3000
Customization Checklist
[ ] Update WhatsApp number in frontend/src/lib/utils.ts
[ ] Update Google Maps in ContactForm.tsx
[ ] Update business info in Footer.tsx
[ ] Create admin user via API

Create Admin User
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"yourpassword"}'

Then login at http://localhost:3000/admin
