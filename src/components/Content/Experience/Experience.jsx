import React from "react";
import { FaPencilAlt, FaBriefcase, FaProjectDiagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const TimelineItem = ({ icon, time, title, description }) => (
  <div className="flex items-start relative pb-12 last:pb-0">
    <div className="flex flex-col items-center mr-6 relative z-10">
      <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
        {icon}
      </div>
    </div>
    <div className="text-left">
      <h4 className="text-blue-700 font-bold text-sm mb-1 dark:text-blue-400">
        {time}
      </h4>
      <h3 className="font-semibold text-lg mb-1 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm max-w-md">
        {description}
      </p>
    </div>
  </div>
);

const Experience = () => {
  const { t } = useTranslation();

  const education = [
    {
      time: "2021 - 2025",
      title: t("education"),
      description: t("educationDescription"),
      icon: <FaPencilAlt />,
    },
    {
      time: "2021 - 2025",
      title: t("gpa"),
      description: t("gpaDescription"),
      icon: <FaPencilAlt />,
    },
  ];

  const projectMain = [
    {
      time: "2024 - 2025",
      title: t("socialWebsite"),
      description: t("socialWebsiteDescription"),
      icon: <FaProjectDiagram />,
    },
    {
      time: "2025",
      title: t("portfolioWeb"),
      description: t("portfolioWebDescription"),
      icon: <FaProjectDiagram />,
    },
  ];

  const experience = [
    {
      time: "2024 - 2025",
      title: t("company"),
      description: t("companyDescription"),
      icon: <FaBriefcase />,
    }
  ];

  return (
    <section className="max-w-7xl mx-auto mt-12 py-12 px-4 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-12 dark:text-blue-300">
        {t("experience&education")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
        {/* Education timeline column */}
        <div className="relative">
          <div className="absolute left-6 top-0 w-1 bg-blue-600 h-full z-0" />
          {education.map((item, index) => (
            <TimelineItem
              key={index}
              {...item}
              isLast={index === education.length - 1}
            />
          ))}
        </div>
        {/* Project timeline column */}
        <div className="relative">
          <div className="absolute left-6 top-0 w-1 bg-blue-600 h-full z-0" />
          {projectMain.map((item, index) => (
            <TimelineItem
              key={index}
              {...item}
              isLast={index === projectMain.length - 1}
            />
          ))}
        </div>
        {/* Experience timeline column */}
        <div className="relative">
          <div className="absolute left-6 top-0 w-1 bg-blue-600 h-full z-0" />
          {experience.map((item, index) => (
            <TimelineItem
              key={index}
              {...item}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
