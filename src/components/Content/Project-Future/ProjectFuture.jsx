import React from "react";
import { useTranslation } from "react-i18next";

import ProjectFutureCard from "./ProjectFutureCard";
import { getProjectFutureData } from "./projectFutureData";

const ProjectFuture = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const projectData = getProjectFutureData(lang);

  return (
    <section className="max-w-7xl mx-auto mt-12 py-12 text-center px-4">
      <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
        {t("newProject")}
      </span>
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 dark:text-blue-300">
        {t("Project Future")}
      </h2>
      <p className="text-sm md:text-base text-gray-600 mb-6 dark:text-gray-300 w-3/4 mx-auto">
        {t("projectfutureDescription")}
      </p>

      {/* Project Cards Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2  gap-6 ${
          projectData.length <= 2 ? "md:grid-cols-2" : "md:grid-cols-3"
        }`}
      >
        {projectData.map((project, index) => (
          <ProjectFutureCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectFuture;
