import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import cssfounder from "../../../assets/html-css/css-founder.png";
import product from "../../../assets/html-css/product-review.png";
import testimonial from "../../../assets/html-css/testimonial-grid.png";

const Project = () => {
  const { t } = useTranslation();
  const categories = [
    { key: "all", label: t("all") },
    { key: "html", label: t("html") },
    { key: "web", label: t("web") },
    { key: "javascript", label: t("javascript") },
  ];
  const projectData = [
    {
      title: t("designProject1"),
      image: cssfounder,
      category: "html",
      description: t("designProject1Description"),
      link: "https://example.com/design-project-1",
      github: "https://example.com/design-project-1",
    },
    {
      title: t("marketingCampaign"),
      image: product,
      category: "web",
      description: t("marketingCampaignDescription"),
      link: "https://example.com/marketing-campaign",
      github: "https://example.com/marketing-campaign",
    },
    {
      title: t("photographyPortfolio"),
      image: "/images/project3.jpg",
      category: "javascript",
      description: t("photographyPortfolioDescription"),
      github: "https://example.com/photography-portfolio",
    },
    {
      title: t("designProject2"),
      image: testimonial,
      category: "html",
      description: t("designProject2Description"),
      link: "https://example.com/design-project-2",
      github: "https://example.com/design-project-2",
    },
    // Add more items if needed
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0].key);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "all"
      ? projectData
      : projectData.filter((item) => item.category === activeCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

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
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            onClick={() => openModal(project)}
          />
        ))}
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
