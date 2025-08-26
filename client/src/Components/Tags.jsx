import React from 'react';

const TagsSection = () => {
  const tags = [
    { id: 1, name: "Innovative Solutions" },
    { id: 2, name: "Customer Satisfaction" },
    { id: 3, name: "24/7 Support" },
    { id: 4, name: "Reliable Service" },
    { id: 5, name: "Safety & Compliance" },
    { id: 6, name: "Efficient Operations" },
    { id: 7, name: "Expert Team" },
    { id: 8, name: "Quality Assurance" },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-indigo-800 dark:from-slate-800 dark:to-purple-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 leading-tight">
          Why Our Clients Choose Us
        </h2>
        <p className="text-lg text-white/90 max-w-xl mx-auto mb-14">
          We focus on delivering exceptional service and innovative solutions, ensuring top-quality results for all our clients.
        </p>

        {/* Tags Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="bg-white text-indigo-600 dark:bg-slate-700 dark:text-purple-400 px-6 py-3 rounded-full text-lg font-medium cursor-pointer transform transition-all hover:bg-indigo-600 hover:text-white hover:scale-105 hover:shadow-lg duration-300 ease-in-out"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TagsSection;
