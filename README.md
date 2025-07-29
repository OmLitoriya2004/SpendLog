# 💸 SpendLog

SpendLog is a full-stack MERN (MongoDB, Express.js, React, Node.js) web application that helps users track income and expenses with insightful visualizations and features.
<img width="1849" height="972" alt="image" src="https://github.com/user-attachments/assets/c57e9ee6-78c0-41a9-b4ab-8228473e0dc8" />

---
### 🔗 Live Site: [https://spendlog-frontend.pages.dev](https://spendlog-frontend.pages.dev)
## 🚀 Features

- 🔐 User Authentication (JWT-based)
- ➕ Add & ➖ Delete Income / Expenses
- 📊 Dashboard with charts & analytics
- 📁 Export to Excel (.xlsx)
- 🖼️ Profile image upload support
- 🎯 Responsive design with Tailwind CSS
- ⚡ Vite-powered frontend
- ☁️ Deployed on Render & GitHub Pages

---

## 📁 Project Structure
```bash
  backend/
│
├── client/ # Production build of frontend (Vite dist)
├── controllers/ # Route handler logic
├── models/ # Mongoose schemas
├── routes/ # API routes
├── middleware/ # Auth & error handling
├── uploads/ # Uploaded images (profile, etc.)
├── .env # Backend environment variables
├── server.js # Entry point of the backend server
└── package.json # Backend dependencies & scripts

frontend/viteproj/
├── public/ # Static assets
├── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page-level components (Dashboard, Login, etc.)
│ ├── utils/ # API base URL and helper functions
│ └── App.jsx # Main app component
├── .env.production # Vite production environment variables
├── vite.config.js # Vite configuration
└── package.json # Frontend dependencies & scripts
```


---

## 🌐 Deployment Guide

### ✅ 1. Build Frontend

```bash
cd frontend/viteproj
npm install
npm run build
```
###✅ 2. Replace old frontend build (if any)
```bash
Remove-Item -Recurse -Force ../../backend/client/*
Copy-Item -Recurse -Force dist/* ../../backend/client/
```

### ✅ 3.Run Backend Server
```bash
cd backend
npm install
node server.js
```
