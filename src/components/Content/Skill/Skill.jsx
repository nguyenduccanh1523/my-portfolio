import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

const Skill = () => {
  const { t } = useTranslation();
  const skills = [
    {
      title: t("language"),
      icon: <FaHtml5 size={20} />,
      items: ["JavaScript", "TypeScript", "C#", "HTML", "CSS", "C++"],
    },
    {
      title: t("library"),
      icon: <FaReact size={20} />,
      items: [
        "React",
        "Next.js",
        "Node.js, Express.js",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      title: t("database"),
      icon: <FaDatabase size={20} />,
      items: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"],
    },
    {
      title: t("tool"),
      icon: <FaNodeJs size={20} />,
      items: ["REST API", "GraphQL", "JWT Auth", "Webpack", "Vite"],
    },
    {
      title: t("other"),
      icon: <FaTools size={20} />,
      items: ["Git & GitHub", "Figma", "Docker", "n8n"],
    },
    {
      title: t("spokenLanguages"),
      icon: <FaTools size={20} />,
      items: [t("spoken1"), t("spoken2")],
    },
  ];
  return (
    <section className="max-w-7xl mx-auto mt-12 py-12 px-4 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-12 dark:text-blue-300">
        {t("skills")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
        {skills.map((group, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-md transition"
          >
            <div className="flex items-center mb-3 text-blue-600 dark:text-blue-400 font-semibold text-lg">
              {group.icon}
              <span className="ml-2">{group.title}</span>
            </div>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {group.items.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
