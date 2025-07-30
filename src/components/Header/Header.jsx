import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import { useContext } from "react";
import Switch from "../../pages/ui-verse/dark-mode.jsx";
import { FaArrowUp } from "react-icons/fa";
import Flag from 'react-world-flags';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { dark, setDark } = useContext(ThemeContext);
  const [isSticky, setIsSticky] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const currentLanguage = i18n.language;

  const handleLanguageChange = async (lang) => {
    await i18n.changeLanguage(lang);
    setOpenLanguage(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className={`top-0 w-full z-50 transition-all duration-300 ${
        isSticky
          ? "fixed left-0 right-0 bg-white shadow text-gray-900 dark:bg-gray-900 dark:text-white"
          : "relative bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto flex justify-between items-center px-6 py-3 ${
          isSticky ? "text-gray-900" : "text-white"
        } dark:text-white`}
      >
        <h1 className="text-xl font-bold">NDC</h1>

        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li>
            <a href="#about" className="hover:text-purple-900">
              {t("about")}
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-purple-900">
              {t("projects")}
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-purple-900">
              {t("skills")}
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-purple-900">
              {t("experience")}
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-purple-900">
              {t("education")}
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-purple-900">
              {t("Project Future")}
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-purple-900">
              {t("contact")}
            </a>
          </li>
        </ul>

        <div className="flex items-center space-x-2">
          <div className="relative">
            <button
              onClick={() => setOpenLanguage(!openLanguage)}
              className="flex items-center gap-2 px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {currentLanguage === "vi" ? <Flag code="VN" style={{ width: 20, height: 14 }} /> : <Flag code="GB" style={{ width: 20, height: 14 }} />}
              {currentLanguage.toUpperCase()}
              <svg
                className="w-3 h-3 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M5.25 7.25l4.5 4.5 4.5-4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </button>

            {openLanguage && (
              <div className="absolute right-0 mt-2 w-28 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded shadow-lg z-10">
                <button
                  onClick={() => handleLanguageChange("en")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white flex items-center gap-2"
                >
                  <Flag code="GB" style={{ width: 20, height: 14 }} /> English
                </button>
                <button
                  onClick={() => handleLanguageChange("vi")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white flex items-center gap-2"
                >
                  <Flag code="VN" style={{ width: 20, height: 14 }} /> Tiếng Việt
                </button>
              </div>
            )}
          </div>

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

        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all z-50"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        )}
      </nav>
      {menuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 px-6 pb-6 text-white bg-blue-500 pt-4">
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
      )}
    </div>
  );
};

export default Header;
