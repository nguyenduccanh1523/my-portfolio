import React from "react";
import { Modal, Button } from "antd";

const ProjectModal = ({ visible, onClose, project }) => {
  if (!project) return null;
  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      width={600}
      bodyStyle={{ padding: 0 }}
    >
      <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover mb-4 rounded-t-xl"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 whitespace-pre-line">
            {project.description}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {project.note}
          </p>
          <div className="flex gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Demo
              </a>
            )}
            {project.json && (
              <a
                href={project.json}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 dark:text-white transition"
              >
                Download JSON
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
