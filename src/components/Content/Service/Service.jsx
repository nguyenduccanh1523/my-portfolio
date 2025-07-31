import React from "react";
import { useTranslation } from "react-i18next";
import { SiN8N } from "react-icons/si";
import { IoMdLaptop } from "react-icons/io";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { DiResponsive } from "react-icons/di";
import { IoInvertMode, IoExtensionPuzzle } from "react-icons/io5";

const Service = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-7xl mx-auto mt-12 py-12 text-center">
      <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
        {t("what")}
      </span>
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 dark:text-blue-300">
        {t("services")}
      </h2>
      <p className="text-sm md:text-base text-gray-600 mb-6 dark:text-gray-300 w-3/4 mx-auto">
        {t("serviceDescription")}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="group p-4 border rounded-lg shadow hover:border-b-4 hover:border-blue-500 hover:shadow-lg dark:hover:border-blue-400 transition-shadow">
          <IoMdLaptop className="text-4xl text-blue-600 mb-2 mx-auto" />
          <h3 className="text-lg font-semibold mb-2 dark:text-gray-300 group-hover:text-blue-600 transition-colors">
            {t("webDesign")}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {t("webDesignDescription")}
          </p>
        </div>
        <div className="group p-4 border rounded-lg shadow hover:border-b-4 hover:border-blue-500 hover:shadow-lg dark:hover:border-blue-400 transition-shadow">
          <HiWrenchScrewdriver className="text-4xl text-blue-600 mb-2 mx-auto" />
          <h3 className="text-lg font-semibold mb-2 dark:text-gray-300 group-hover:text-blue-600 transition-colors">
            {t("frontEndDevelopment")}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {t("frontEndDevelopmentDescription")}
          </p>
        </div>
        <div className="group p-4 border rounded-lg shadow hover:border-b-4 hover:border-blue-500 hover:shadow-lg dark:hover:border-blue-400 transition-shadow">
          <IoExtensionPuzzle className="text-4xl text-blue-600 mb-2 mx-auto" />
          <h3 className="text-lg font-semibold mb-2 dark:text-gray-300 group-hover:text-blue-600 transition-colors">
            {t("backEndDevelopment")}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {t("backEndDevelopmentDescription")}
          </p>
        </div>
        <div className="group p-4 border rounded-lg shadow hover:border-b-4 hover:border-blue-500 hover:shadow-lg dark:hover:border-blue-400 transition-shadow">
          <SiN8N className="text-4xl text-blue-600 mb-2 mx-auto" />
          <h3 className="text-lg font-semibold mb-2 dark:text-gray-300 group-hover:text-blue-600 transition-colors">
            {t("automation")}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {t("automationDescription")}
          </p>
        </div>
        <div className="group p-4 border rounded-lg shadow hover:border-b-4 hover:border-blue-500 hover:shadow-lg dark:hover:border-blue-400 transition-shadow">
          <DiResponsive className="text-4xl text-blue-600 mb-2 mx-auto" />
          <h3 className="text-lg font-semibold mb-2 dark:text-gray-300 group-hover:text-blue-600 transition-colors">
            {t("responsiveDesign")}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {t("responsiveDesignDescription")}
          </p>
        </div>
        <div className="group p-4 border rounded-lg shadow hover:border-b-4 hover:border-blue-500 hover:shadow-lg dark:hover:border-blue-400 transition-shadow">
          <IoInvertMode className="text-4xl text-blue-600 mb-2 mx-auto" />
          <h3 className="text-lg font-semibold mb-2 dark:text-gray-300 group-hover:text-blue-600 transition-colors">
            {t("multiLanguage")}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {t("multiLanguageDescription")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
