# 🍴 Food Blog & Recipe Sharing App

A full-stack **MERN (MongoDB, Express, React, Node.js)** application where users can **share, discover, and save recipes**. Perfect for food enthusiasts who love exploring and sharing culinary ideas!

---

## 🚀 Features

- **User Authentication**: Sign up, login, and secure access.
- **Share Recipes**: Add new recipes with ingredients, steps, and images.
- **Browse Recipes**: View all recipes or search by category/cuisine.
- **Edit & Delete**: Manage your own recipes anytime.
- **Responsive Design**: Works smoothly on desktop and mobile.
- **Optional Features** (can add later):
  - Like or favorite recipes  
  - Comment on recipes  
  - Filter by categories or popularity

---

## 🛠 Tech Stack

- **Frontend**: React, Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: JWT (JSON Web Tokens)  
- **Others**: Axios for API calls, React Router for navigation

---

## 🎬 Screenshots

![Home Page](link-to-screenshot)
![Recipe Details](link-to-screenshot)
![Add Recipe](link-to-screenshot)

> Replace the placeholders with your actual screenshots or GIFs.

---

## ⚡ Installation & Setup

1. **Clone the repo**

```bash
git clone https://github.com/<your-username>/food-blog.git
cd food-blog

2. Install dependencies

# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install

3. Environment Variables

Create a .env file in backend/:

PORT=7000
CONNECTION_STRING="mongodb://localhost:27017/foodRecipe"

4.Run the app

# Start backend
cd backend
npm run dev

# Start frontend
cd ../frontend
npm start
