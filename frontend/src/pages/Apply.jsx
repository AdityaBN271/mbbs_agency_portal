import { useState } from "react";
import axios from "axios";

function Apply() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    neet_score: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // null | "success" | "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/apply", {
        ...formData,
        neet_score: parseInt(formData.neet_score),
      });
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        neet_score: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Apply Now</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="neet_score"
          placeholder="NEET Score"
          value={formData.neet_score}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Additional Message (optional)"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit Application
        </button>
      </form>

      {status === "success" && (
        <p className="mt-4 text-green-600">🎉 Application submitted successfully!</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-600">❌ Something went wrong. Try again.</p>
      )}
    </div>
  );
}

export default Apply;
