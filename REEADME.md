🧳 Travel Together - Travel Buddy Finder
🎯 About
A web platform where travel enthusiasts can find and join travel groups, chat in real-time, and plan trips together.

🚀 Quick Start

1. Clone & Setup
git clone https://github.com/yourusername/travel-together.git
cd travel-together

2. Backend (Django)
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

3. Frontend (React)
bash
cd frontend
npm install
npm start

4. Database (MySQL)
CREATE DATABASE travel_together_db;

🔗 Access
Frontend: http://localhost:3000
Backend API: http://localhost:8000
Admin: http://localhost:8000/admin

📦 Tech Stack
Backend: Django + MySQL + JWT
Frontend: React + Tailwind CSS
Real-time: WebSocket
Auth: JWT Tokens

✨ Features
✅ User Registration/Login
✅ Create/Join Travel Groups
✅ Real-time Group Chat
✅ Search & Filter Groups
✅ Admin Dashboard
✅ Responsive Design

👥 Test Users

Admin: admin / Admin@123
User: traveler1 / Travel@123

📁 Structure
travel-together/
├── backend/     # Django API
├── frontend/    # React App
├── database/    # MySQL scripts
└── docs/        # Documentation

🛠️ Requirements
Python 3.8+
Node.js 16+
MySQL 8.0+
Git
