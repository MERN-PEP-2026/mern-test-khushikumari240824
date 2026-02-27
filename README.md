# Student Course Management System (MERN)

A full MERN stack project with JWT authentication and course management.

## Tech Stack

- Backend: Node.js, Express.js, MongoDB, Mongoose
- Auth: JWT + bcryptjs
- Frontend: React (functional components + hooks), React Router DOM, Axios

## Backend Structure

backend/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── courseController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── Student.js
│   └── Course.js
├── routes/
│   ├── authRoutes.js
│   └── courseRoutes.js
├── .env
├── package.json
└── server.js

## Frontend Structure

frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── ProtectedRoute.js
│   ├── pages/
│   │   ├── Register.js
│   │   ├── Login.js
│   │   └── Dashboard.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
└── package.json

## API Endpoints

### Auth
- POST /api/auth/register
- POST /api/auth/login

### Courses (Protected)
- POST /api/courses
- GET /api/courses
- DELETE /api/courses/:id

> Search courses by name:
>
> GET /api/courses?search=keyword

## Environment Variables (backend/.env)

Add these values:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

## How to Run

### 1) Install dependencies

Backend:

cd backend
npm install

Frontend:

cd frontend
npm install

### 2) Start backend

cd backend
npm run dev

### 3) Start frontend

cd frontend
npm start

Frontend runs at: http://localhost:3000

Backend runs at: http://localhost:5000

## Features

- Student registration and login with JWT
- Password hashing with bcryptjs
- Protected course routes using auth middleware
- Create, list, and delete courses
- Search courses by course name
- JWT stored in localStorage
- Protected dashboard route
- Simple responsive UI