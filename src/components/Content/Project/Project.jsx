import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import { getProjectData } from "./projectData";

const Project = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language; // 'en' hoặc 'vi'
  const categories = [
    { key: "all", label: t("all") },
    { key: "html", label: t("html") },
    { key: "web", label: t("web") },
    { key: "javascript", label: t("javascript") },
    { key: "n8n", label: t("n8n") },
  ];
  const projectData = getProjectData(lang);

  const [activeCategory, setActiveCategory] = useState(categories[0].key);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const ITEMS_PER_PAGE = 8;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredProjects =
    activeCategory === "all"
      ? projectData
      : projectData.filter((item) => item.category === activeCategory);

  // Chỉ hiển thị số lượng item theo visibleCount
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  // Reset visibleCount khi đổi category
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [activeCategory]);

  return (
    <section className="max-w-7xl mx-auto mt-12 py-12 text-center px-4">
      <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
        {t("work")}
      </span>
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 dark:text-blue-300">
        {t("projects")}
      </h2>
      <p className="text-sm md:text-base text-gray-600 mb-6 dark:text-gray-300 w-3/4 mx-auto">
        {t("projectDescription")}
      </p>

      {/* Category Tabs */}
      <div className="flex justify-center space-x-3 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={classNames(
              "px-4 py-2 rounded-full text-sm font-medium transition",
              {
                "bg-blue-600 text-white": activeCategory === cat.key,
                "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-600":
                  activeCategory !== cat.key,
              }
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            onClick={() => openModal(project)}
          />
        ))}
      </div>

      <div>
        {visibleCount < filteredProjects.length && (
          <button
            onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
            className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            {t("readmore")}
          </button>
        )}
      </div>

      {/* Modal chi tiết dự án dùng Ant Design */}
      <ProjectModal
        visible={modalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
};

export default Project;
