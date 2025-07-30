import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Portfolio from "../Content/Portfolio/Portfolio";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";

const Body = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <div>
      <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white min-h-[60vh] flex items-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t("welcome")}
          </h2>
          <p className="text-lg md:text-xl">{t("bio")}</p>
          <ul className="flex space-x-3 justify-center mt-6">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 border border-gray-300 text-gray-900 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaFacebookF size={18} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 border border-gray-300 text-gray-900 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaGithub size={18} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 border border-gray-300 text-gray-900 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaInstagram size={18} />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 border border-gray-300 text-gray-900 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaLinkedin size={18} />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Portfolio />
      </motion.div>
    </div>
  );
};

export default Body;
