# 🏃‍♂️ Athletic Hub - Client Side

**Athletic Hub** is a modern, responsive, and feature-rich web application for managing and showcasing sports-related services.  
This is the **frontend (client)** part of the full-stack Athletic Hub project.

---

## 🌐 Live Website

🔗 [https://athletic-hub-7dbfe.web.app/] 

---

## 📸 Screenshot

![Flora Nest Screenshot](https://i.postimg.cc/MGch6czW/athletic-hub.jpg)

---

## 🛠️ Tech Stack & Libraries

| Tool/Library          | Purpose                                  |
|-----------------------|------------------------------------------|
| React 19              | Frontend UI framework                    |
| Vite 6                | Fast build tool and dev server           |
| Tailwind CSS v4       | Utility-first CSS styling                |
| DaisyUI               | Pre-designed Tailwind component library |
| React Router v7       | Routing and navigation                   |
| Axios                 | HTTP client for API requests             |
| Firebase v11          | Authentication & hosting                 |
| React Icons           | Popular icon library                     |
| SweetAlert2           | Custom alert modals                      |
| ESLint                | Linting and code quality tool            |

---

## 🎯 Main Features

- 🧑‍💼 User and Admin dashboard
- 📅 Book and manage sports appointments
- 🔐 Firebase Authentication (Google Sign In)
- 🧾 Protected routes with role-based access
- 📊 Data visualizations and statistics
- 💬 Interactive modals and confirmation alerts
- 🌍 Fully responsive and mobile-friendly layout

---

## 📦 Project Structure

```text
Athletic-Hub-client/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── hooks/
│   ├── pages/
│   ├── routes/
│   ├── App.jsx
│   └── main.jsx
└── vite.config.js

------


##👟 How to run
You can run the following commands from the root directory:

npm run dev       # Start development server
npm run build     # Build the project
npm run preview   # Preview production build
npm run lint      # Run ESLint for code linting


--- terminal --- 
git clone https://github.com/md-arifur-rahman09/Athletic-Hub-client.git
cd Athletic-Hub-client
npm install

------


Create a .env.local file at the root of the project and add the following:

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id


--- terminal ---
npm run dev


