import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { saveAs } from "file-saver";

function AdminDashboard() {
  const [students, setStudents] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin-login");
      return;
    }

    axios.get("http://localhost:8000/admin/applications", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => {
        setStudents(res.data);
        setFiltered(res.data);
      })
      .catch(err => console.error("Error fetching students:", err));
  }, []);

  useEffect(() => {
    const term = search.toLowerCase();
    const filteredData = students.filter(s =>
      s.name.toLowerCase().includes(term) ||
      s.email.toLowerCase().includes(term) ||
      s.city.toLowerCase().includes(term)
    );
    setFiltered(filteredData);
  }, [search, students]);

  const handleExport = () => {
    const csvRows = [
      ["Name", "Email", "Phone", "NEET Score", "City", "Applied On"],
      ...filtered.map(s => [
        s.name,
        s.email,
        s.phone,
        s.neet_score,
        s.city,
        new Date(s.created_at).toLocaleDateString()
      ])
    ];
    const blob = new Blob([csvRows.map(row => row.join(",")).join("\n")], {
      type: "text/csv;charset=utf-8;",
    });
    saveAs(blob, "student_applications.csv");
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  return (
    <section className="min-h-screen bg-gray-100 py-10 px-6">
      {/* Logout Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Admin Dashboard
      </h1>

      {/* Search + Export */}
      <div className="max-w-6xl mx-auto mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Search by name, email, or city"
          className="px-4 py-2 border rounded shadow w-full sm:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleExport}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow"
        >
          Export CSV
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">NEET Score</th>
              <th className="p-4 text-left">City</th>
              <th className="p-4 text-left">Applied On</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No student applications found.
                </td>
              </tr>
            ) : (
              filtered.map((student, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-4">{student.name}</td>
                  <td className="p-4">{student.email}</td>
                  <td className="p-4">{student.phone}</td>
                  <td className="p-4">{student.neet_score}</td>
                  <td className="p-4">{student.city}</td>
                  <td className="p-4">
                    {new Date(student.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AdminDashboard;
