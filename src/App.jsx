import { useTranslation } from "react-i18next";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

function App() {
  const { t, i18n } = useTranslation();
  const { dark, setDark } = useContext(ThemeContext);
  return (
    <>
      <div>
        <p>{t("greeting")} John</p>
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        <button onClick={() => i18n.changeLanguage("vi")}>VI</button>

        <button onClick={() => setDark(!dark)}>{dark ? "☀️" : "🌙"}</button>
        <nav className="flex justify-between items-center p-4">
          <h1 className="text-xl font-bold dark:text-white">Portfolio</h1>
          <ul className="hidden md:flex space-x-4 text-sm">
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="md:hidden">☰</div>
        </nav>
      </div>
    </>
  );
}

export default App;
