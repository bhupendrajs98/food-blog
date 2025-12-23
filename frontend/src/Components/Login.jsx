import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:7000/recipe/login", { email, password })
      .then((res) => {
        localStorage.setItem("authToken", res.data.token);
        navigate("/");
      })
      .catch(() => alert("Invalid Credentials"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 to-green-600 p-5">

      {/* Card */}
      <form
        onSubmit={handleLogin}
        className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/40"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
          Login to RecipeHub
        </h2>

        {/* Email */}
        <div className="flex flex-col mb-4">
          <label className="text-green-800 font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="flex flex-col mb-6">
          <label className="text-green-800 font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Login Button */}
        <button
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all"
        >
          Login
        </button>
      </form>
    </div>
  );
}
