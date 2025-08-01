import React from "react";

const ProjectFutureCard = ({ image, title, description, github }) => {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full transition-transform hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="flex-1 flex flex-col justify-between p-8">
        <div>
          <div className="text-blue-700 text-sm mb-2">
            October 21, 2025 <span className="mx-2">|</span>{" "}
            <span className="font-semibold text-gray-500">Lifestyle</span>
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-base">
            {description}
          </p>
        </div>
        <div className="mt-4 flex justify-center">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-gray-900 text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectFutureCard;
