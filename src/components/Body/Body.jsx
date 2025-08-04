import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Portfolio from "../Content/Portfolio/Portfolio";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import Service from "../Content/Service/Service";
import Project from "../Content/Project/Project";
import Experience from "../Content/Experience/Experience";
import Skill from "../Content/Skill/Skill";
import ProjectFuture from "../Content/Project-Future/ProjectFuture";
import Contact from "../Content/Contact/Contact";

const Body = () => {
  const { t } = useTranslation();
  const portfolioRef = useRef(null);
  const serviceRef = useRef(null);
  const projectRef = useRef(null);
  const experienceRef = useRef(null);
  const skillRef = useRef(null);
  const projectFutureRef = useRef(null);
  const contactRef = useRef(null);

  const portfolioInView = useInView(portfolioRef, { once: true, amount: 0.2 });
  const serviceInView = useInView(serviceRef, { once: true, amount: 0.2 });
  const projectInView = useInView(projectRef, { once: true, amount: 0.2 });
  const experienceInView = useInView(experienceRef, {
    once: true,
    amount: 0.2,
  });
  const skillInView = useInView(skillRef, { once: true, amount: 0.2 });
  const projectFutureInView = useInView(projectFutureRef, {
    once: true,
    amount: 0.2,
  });
  const contactInView = useInView(contactRef, { once: true, amount: 0.2 });
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
                href="https://www.facebook.com/nguyen.uc.canh.186227/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 border border-gray-300 text-gray-900 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaFacebookF size={18} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/nguyenduccanh1523"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 border border-gray-300 text-gray-900 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaGithub size={18} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/duccank19_0_o/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 border border-gray-300 text-gray-900 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaInstagram size={18} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/c%E1%BA%A3nh-nguy%E1%BB%85n-648a79268/"
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
        id="about"
        ref={portfolioRef}
        initial={{ opacity: 0, y: 50 }}
        animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Portfolio />
      </motion.div>

      <motion.div
        id="services"
        ref={serviceRef}
        initial={{ opacity: 0, y: 50 }}
        animate={serviceInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Service />
      </motion.div>

      <motion.div
        id="projects"
        ref={projectRef}
        initial={{ opacity: 0, y: 50 }}
        animate={projectInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Project />
      </motion.div>

      <motion.div
        id="skills"
        ref={skillRef}
        initial={{ opacity: 0, y: 50 }}
        animate={skillInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Skill />
      </motion.div>

      <motion.div
        id="experience-education"
        ref={experienceRef}
        initial={{ opacity: 0, y: 50 }}
        animate={experienceInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Experience />
      </motion.div>

      <motion.div
        id="project-future"
        ref={projectFutureRef}
        initial={{ opacity: 0, y: 50 }}
        animate={projectFutureInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <ProjectFuture />
      </motion.div>

      <motion.div
        id="contact"
        ref={contactRef}
        initial={{ opacity: 0, y: 50 }}
        animate={contactInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Contact />
      </motion.div>
    </div>
  );
};

export default Body;
