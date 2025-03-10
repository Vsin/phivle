import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <Link to="/" className="text-xl font-bold">Phivle</Link>
      <div>
        <Link to="/blog" className="px-4">Blog</Link>
        <Link to="/portfolio" className="px-4">Portfolio</Link>
        <Link to="/resume" className="px-4">Resume</Link>
        <Link to="/contact" className="px-4">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;

