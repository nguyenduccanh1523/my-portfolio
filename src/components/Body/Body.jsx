import React from "react";

const Body = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white min-h-[60vh] flex items-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Welcome to My Portfolio
          </h2>
          <p className="text-lg md:text-xl">
            Here you can find my projects and contact information.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Body;
