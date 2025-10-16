import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

export default function Signup() {
  const navigate = useNavigate();
  const { signup } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signup(name, email, password);
      console.log("Signup result:", result);

      if (result.success) {
        navigate("/login", {
          state: { successMessage: "Account created successfully!" },
        });
      } else {
        setError(result.message);
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError("Unexpected error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-2xl w-[400px]">
        <h2 className="text-3xl font-semibold text-center mb-6">Create Account</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition disabled:opacity-60"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>

          <p className="text-sm text-center mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
