import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-xl font-bold text-blue-700">
        MBBS Georgia
      </div>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
          Home
        </Link>
        <Link
          to="/apply"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-300"
        >
          Apply Now
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
