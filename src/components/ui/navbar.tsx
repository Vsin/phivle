import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "./navigation-menu"
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-6 items-center">
          {/* Home */}
          <NavigationMenuItem>
            <Link to="/" className="text-xl font-bold">Phivle</Link>
          </NavigationMenuItem>

          {/* Blog Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex flex-col bg-white shadow-md p-2 rounded-md">
                <Link to="/blog/latest" className="p-2 hover:bg-gray-200 rounded">Latest Posts</Link>
                <Link to="/blog/categories" className="p-2 hover:bg-gray-200 rounded">Categories</Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Portfolio Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Portfolio</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex flex-col bg-white shadow-md p-2 rounded-md">
                <Link to="/portfolio" className="p-2 hover:bg-gray-200 rounded">Projects</Link>
                <Link to="/portfolio/code" className="p-2 hover:bg-gray-200 rounded">Code Samples</Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Resume */}
          <NavigationMenuItem>
            <Link to="/resume" className="text-lg hover:underline">Resume</Link>
          </NavigationMenuItem>

          {/* Contact */}
          <NavigationMenuItem>
            <Link to="/contact" className="text-lg hover:underline">Contact</Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

