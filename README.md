# 🏪 Gazi Online - Digital Service Center

A modern, responsive business website for Gazi Online - a local digital and banking service center in Bangladesh.

![Version](https://img.shields.io/badge/version-1.0.0-green)
![Next.js](https://img.shields.io/badge/Next.js-15-black)

## ✨ Features

- **Glass Morphism UI** - Modern frosted glass effects
- **Green + Blue Theme** - Professional color scheme
- **Responsive Design** - Mobile-first approach
- **Animated Background** - Floating gradient blobs
- **Dark Mode** - Full dark/light theme support
- **i18n** - Bengali (default) + English
- **12 Service Cards** - All services with icons
- **Contact Form** - MongoDB storage
- **WhatsApp Integration** - Floating chat button
- **Google Maps** - Embedded location
- **Admin Dashboard** - JWT-secured

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB Atlas account

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/gazi-online.git
cd gazi-online

# Install frontend
cd frontend
npm install

# Install backend
cd ../backend
npm install

Setup Environment
Backend (.env):

MONGODB_URI=mongodb://localhost:27017/gazi-online
JWT_SECRET=your-secret-key
PORT=5000
FRONTEND_URL=http://localhost:3000

Start Development

# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend
cd frontend
npm run dev

Open http://localhost:3000
🛠️ Tech Stack
Frontend: Next.js 15, TypeScript, Tailwind CSS, Framer Motion, next-intl
Backend: Express.js, MongoDB, JWT, bcryptjs, Helmet
📞 Support
Next.js Docs: https://nextjs.org/docs
MongoDB Atlas: https://docs.atlas.mongodb.com
Made with ❤️ for Gazi Online
