import React from "react";

const ProjectCard = ({ image, title, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <div className="relative shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl hover:scale-105 group">
        <img src={image} alt={title} className="w-full h-60 object-cover" />
        {/* Overlay title khi hover */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg font-bold drop-shadow-lg">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
