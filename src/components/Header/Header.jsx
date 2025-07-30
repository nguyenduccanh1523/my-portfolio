import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import { useContext } from "react";
import Switch from "../../pages/ui-verse/dark-mode.jsx";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { dark, setDark } = useContext(ThemeContext);
  return (
    <div className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-md shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3 text-gray-900 dark:text-white">
        <h1 className="text-xl font-bold">NDC</h1>

        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li>
            <a href="#about" className="hover:text-purple-600">
              About
            </a>
          </li>
          <li>
            <a href="#service" className="hover:text-purple-600">
              Service
            </a>
          </li>
          <li>
            <a href="#work" className="hover:text-purple-600">
              Work
            </a>
          </li>
          <li>
            <a href="#resume" className="hover:text-purple-600">
              Resume
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-purple-600">
              Blog
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-purple-600">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => i18n.changeLanguage("en")}
            className="text-sm px-2 py-1 rounded hover:bg-blue-100 dark:hover:bg-gray-700"
          >
            EN
          </button>
          <button
            onClick={() => i18n.changeLanguage("vi")}
            className="text-sm px-2 py-1 rounded hover:bg-blue-100 dark:hover:bg-gray-700"
          >
            VI
          </button>

          <Switch dark={dark} setDark={setDark} />
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded bg-white text-blue-600"
            >
              {menuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 px-6 pb-6 text-white bg-blue-500 pt-4">
          <li><a href="#about" className="hover:text-purple-600">About</a></li>
          <li><a href="#service" className="hover:text-purple-600">Service</a></li>
          <li><a href="#work" className="hover:text-purple-600">Work</a></li>
          <li><a href="#resume" className="hover:text-purple-600">Resume</a></li>
          <li><a href="#blog" className="hover:text-purple-600">Blog</a></li>
          <li><a href="#contact" className="hover:text-purple-600">Contact</a></li>
        </ul>
      )}
    </div>
  );
};

export default Header;
