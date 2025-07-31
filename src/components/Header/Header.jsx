import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import { useContext } from "react";
import Switch from "../../pages/ui-verse/dark-mode.jsx";
import { FaArrowUp } from "react-icons/fa";
import Flag from "react-world-flags";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState();
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
      setShowScroll(window.scrollY > 50);
      // Xác định section đang active
      const sections = [
        "about",
        "services",
        "projects",
        "skills",
        "experience-education",
        "project-future",
        "contact",
      ];
      let current = sections[0];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // Hàm scroll đến section
  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setMenuOpen(false);
    }
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
            <button
              className={`hover:text-purple-900 ${
                activeSection === "about"
                  ? "font-bold text-purple-900"
                  : ""
              }`}
              onClick={() => handleNavClick("about")}
            >
              {t("about")}
            </button>
          </li>
          <li>
            <button
              className={`hover:text-purple-900 ${
                activeSection === "services"
                  ? "font-bold text-purple-900"
                  : ""
              }`}
              onClick={() => handleNavClick("services")}
            >
              {t("services")}
            </button>
          </li>
          <li>
            <button
              className={`hover:text-purple-900 ${
                activeSection === "projects"
                  ? "font-bold text-purple-900"
                  : ""
              }`}
              onClick={() => handleNavClick("projects")}
            >
              {t("projects")}
            </button>
          </li>
          <li>
            <button
              className={`hover:text-purple-900 ${
                activeSection === "skills"
                  ? "font-bold text-purple-900"
                  : ""
              }`}
              onClick={() => handleNavClick("skills")}
            >
              {t("skills")}
            </button>
          </li>
          <li>
            <button
              className={`hover:text-purple-900 ${
                activeSection === "experience-education"
                  ? "font-bold text-purple-900"
                  : ""
              }`}
              onClick={() => handleNavClick("experience-education")}
            >
              {t("experience&education")}
            </button>
          </li>
          <li>
            <button
              className={`hover:text-purple-900 ${
                activeSection === "project-future"
                  ? "font-bold text-purple-900"
                  : ""
              }`}
              onClick={() => handleNavClick("project-future")}
            >
              {t("Project Future")}
            </button>
          </li>
          <li>
            <button
              className={`hover:text-purple-900 ${
                activeSection === "contact"
                  ? "font-bold text-purple-900"
                  : ""
              }`}
              onClick={() => handleNavClick("contact")}
            >
              {t("contact")}
            </button>
          </li>
        </ul>

        <div className="flex items-center space-x-2">
          <div className="relative">
            <button
              onClick={() => setOpenLanguage(!openLanguage)}
              className="flex items-center gap-2 px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {currentLanguage === "vi" ? (
                <Flag code="VN" style={{ width: 20, height: 14 }} />
              ) : (
                <Flag code="GB" style={{ width: 20, height: 14 }} />
              )}
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
                  <Flag code="VN" style={{ width: 20, height: 14 }} /> Tiếng
                  Việt
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
            <button
              className={`hover:text-purple-600 ${
                activeSection === "about"
                  ? "font-bold text-purple-900"
                  : ""
              }`}
              onClick={() => handleNavClick("about")}
            >
              About
            </button>
          </li>
          <li>
            <button
              className={`hover:text-purple-600 ${
                activeSection === "services"
                  ? "font-bold text-purple-900"
                  : ""
              }`}
              onClick={() => handleNavClick("services")}
            >
              Service
            </button>
          </li>
          <li>
            <button
              className={`hover:text-purple-600 ${
                activeSection === "projects"
                  ? "font-bold text-purple-900"
                  : ""
              }`}
              onClick={() => handleNavClick("projects")}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className={`hover:text-purple-600 ${
                activeSection === "skills"
                  ? "font-bold text-purple-900"
                  : ""
              }`}
              onClick={() => handleNavClick("skills")}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              className={`hover:text-purple-600 ${
                activeSection === "experience-education"
                  ? "font-bold text-purple-900"
                  : ""
              }`}
              onClick={() => handleNavClick("experience-education")}
            >
              Experience & Education
            </button>
          </li>
          <li>
            <button
              className={`hover:text-purple-600 ${
                activeSection === "project-future"
                  ? "font-bold text-purple-900"
                  : ""
              }`}
              onClick={() => handleNavClick("project-future")}
            >
              Project Future
            </button>
          </li>
          <li>
            <button
              className={`hover:text-purple-600 ${
                activeSection === "contact"
                  ? "font-bold text-purple-900"
                  : ""
              }`}
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
