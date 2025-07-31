import React from "react";
import { useTranslation } from "react-i18next";
import cssfounder from "../../../assets/html-css/css-founder.png";
import product from "../../../assets/html-css/product-review.png";
import testimonial from "../../../assets/html-css/testimonial-grid.png";
import ProjectFutureCard from "./ProjectFutureCard";

const ProjectFuture = () => {
  const { t } = useTranslation();
  const projectData = [
    {
      title: t("designProject1"),
      image: cssfounder,
      description: t("designProject1Description"),
      link: "https://example.com/design-project-1",
      github: "https://example.com/design-project-1",
    },
    {
      title: t("marketingCampaign"),
      image: product,
      description: t("marketingCampaignDescription"),
      link: "https://example.com/marketing-campaign",
      github: "https://example.com/marketing-campaign",
    },
    {
      title: t("photographyPortfolio"),
      image: "/images/project3.jpg",
      description: t("photographyPortfolioDescription"),
      github: "https://example.com/photography-portfolio",
    },
    {
      title: t("designProject2"),
      image: testimonial,
      description: t("designProject2Description"),
      link: "https://example.com/design-project-2",
      github: "https://example.com/design-project-2",
    },
    // Add more items if needed
  ];



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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {projectData.map((project, index) => (
          <ProjectFutureCard
            key={index}
            {...project}
          />
        ))}
      </div>

      
    </section>
  );
};

export default ProjectFuture;