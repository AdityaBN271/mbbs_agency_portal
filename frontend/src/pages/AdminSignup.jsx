import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminSignup() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:8000/admin/signup", formData);
      if (res.status === 200) {
        alert("✅ Admin account created successfully!");
        navigate("/admin-login");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || "Signup failed");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Admin Signup
        </h2>

        {error && <p className="text-red-600 text-sm text-center mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block mb-1">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Create Admin
        </button>
      </form>
    </section>
  );
}

export default AdminSignup;
