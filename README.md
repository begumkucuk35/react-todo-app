# React Todo App — Web & Mobile 🎯

A modern, interactive **Todo application** built in two versions:
Web (React + Vite)
Mobile (React Native + Expo)

Both apps allow users to add tasks, mark them as complete, and delete them.
🎉 A confetti animation celebrates when all tasks are completed!

## 📑 Table of Contents
- Web Application
- Mobile Application
- Features
- Installation & Setup

## 🌐 Web Application
- Technologies: React, Vite, CSS, react-confetti
- Folder: web
- Design inspiration: Figma Community Design

## Run Web App
```bash
cd web
npm install
npm run dev

Open in browser: http://localhost:5173
```

## 📱 Mobile Application
- Technologies: React Native (Expo), react-native-confetti-cannon, FlatList
- Folder: mobile
- Works on both iOS and Android

## Run Mobile App
```bash
cd mobile
npm install
expo start

Scan QR code with Expo Go app (iOS / Android)
Or run in a simulator/emulator
```

## ✅ Features (Both Versions)
- Clean UI inspired by Figma Community Design
- Add tasks via input field and button (or Enter key on Web)
- Mark tasks as completed ✅
- Delete tasks ❌
- Confetti animation triggers when all tasks are completed 🎉
- Real-time task counter showing remaining tasks

## ⚡ Installation & Setup (Root Level)
```bash
# Clone repository
git clone https://github.com/begumkucuk35/react-todo-app.git
cd react-todo-app

# Run Web App
cd web
npm install
npm run dev

# Run Mobile App
cd ../mobile
npm install
expo start
