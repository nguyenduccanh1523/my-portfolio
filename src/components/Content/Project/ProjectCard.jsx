import React from "react";

const ProjectCard = ({ image, title, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <div className="group transition-transform transform hover:-translate-y-1 hover:scale-105">
        {/* Wrapper khung có bo góc và overflow */}
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img src={image} alt={title} className="w-full h-60 object-cover" />
          {/* Overlay title khi hover */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-lg font-bold drop-shadow-lg">
              {title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
