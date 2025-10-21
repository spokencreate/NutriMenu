// src/components/Navbar.tsx
import { Menu, Home, Calendar, Utensils, Leaf } from 'lucide-react';
import type { FC } from 'react';

type Page = 'home' | 'planner' | 'recipes';

type NavbarProps = {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
};

const Navbar: FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const navItems: { name: string; icon: React.ElementType; page: Page }[] = [
    { name: 'Home', icon: Home, page: 'home' },
    { name: 'Planner', icon: Calendar, page: 'planner' },
    { name: 'Recipes', icon: Utensils, page: 'recipes' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white shadow-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-amber-700 tracking-wider flex items-center">
          <Leaf className="mr-2 text-emerald-600" size={24} />
          NutriMenu
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex space-x-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(item.page);
              }}
              className={`flex items-center px-3 py-2 text-sm font-medium transition duration-150 rounded-md
                ${currentPage === item.page
                  ? 'bg-amber-100 text-amber-700'
                  : 'text-gray-600 hover:bg-stone-100'
                }`}
            >
              <item.icon size={18} className="mr-1" />
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden">
          <Menu className="text-gray-700 cursor-pointer" size={24} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
