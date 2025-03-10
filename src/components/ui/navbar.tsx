import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "./navigation-menu";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md w-full">
      <NavigationMenu>
        {/* ✅ Fix: Use `flex-row` to force horizontal layout */}
        <NavigationMenuList className="flex flex-row items-center justify-between px-8 h-16 space-x-8">
          {/* Logo/Home Link */}
          <NavigationMenuItem>
            <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition">
              Phi Le
            </Link>
          </NavigationMenuItem>

          {/* ✅ Fix: Wrap menu items in a flex container */}
          <div className="flex space-x-6">
            {/* Blog Dropdown */}
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition inline-flex items-center">
                Blog
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-40">
                <Link
                  to="/blog/latest"
                  className="block px-4 py-2 hover:bg-gray-100 transition"
                >
                  Latest Posts
                </Link>
                <Link
                  to="/blog/categories"
                  className="block px-4 py-2 hover:bg-gray-100 transition"
                >
                  Categories
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Portfolio Dropdown */}
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition inline-flex items-center">
                Portfolio
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-40">
                <Link
                  to="/portfolio"
                  className="block px-4 py-2 hover:bg-gray-100 transition"
                >
                  Projects
                </Link>
                <Link
                  to="/portfolio/code"
                  className="block px-4 py-2 hover:bg-gray-100 transition"
                >
                  Code Samples
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Resume */}
            <NavigationMenuItem>
              <Link
                to="/resume"
                className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition"
              >
                Resume
              </Link>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
              <Link
                to="/contact"
                className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition"
              >
                Contact
              </Link>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
