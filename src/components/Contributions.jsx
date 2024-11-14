import React from 'react';
import ProfileCard from './ProfileCard';

const contributors = [
  {
    name: 'John Doe',
    photo: 'https://via.placeholder.com/150',
    instagram: 'https://instagram.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
  },
  {
    name: 'John Doe',
    photo: 'https://via.placeholder.com/150',
    instagram: 'https://instagram.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
  },
  // More contributors...
];

const ContributorsSection = () => (
  <section id="contributors" className="mt-20 py-16 px-4 md:px-12 lg:px-20 bg-white relative overflow-hidden shadow-xl rounded-xl max-w-6xl mx-auto">
    {/* Decorative Background Shapes */}
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      {/* Adjusted Bubbles for Better Responsiveness */}
      <svg className="absolute top-10 left-10 w-24 h-24 md:w-32 md:h-32" fill="rgba(59, 130, 246, 0.3)">
        <circle cx="50%" cy="50%" r="50%" />
      </svg>
      <svg className="absolute top-20 right-10 w-32 h-32 md:w-40 md:h-40" fill="rgba(59, 130, 246, 0.3)">
        <circle cx="50%" cy="50%" r="50%" />
      </svg>
      <svg className="absolute top-10 left-1/3 w-10 h-10 md:w-12 md:h-12" fill="rgba(59, 130, 246, 0.2)">
        <circle cx="50%" cy="50%" r="50%" />
      </svg>
      <svg className="absolute top-40 left-1/5 w-6 h-6 md:w-8 md:h-8" fill="rgba(59, 130, 246, 0.2)">
        <circle cx="50%" cy="50%" r="50%" />
      </svg>
      <svg className="absolute top-1/2 left-2/3 w-8 h-8 md:w-10 md:h-10" fill="rgba(59, 130, 246, 0.2)">
        <circle cx="50%" cy="50%" r="50%" />
      </svg>
      <svg className="absolute bottom-20 left-1/4 w-8 h-8 md:w-10 md:h-10" fill="rgba(59, 130, 246, 0.2)">
        <circle cx="50%" cy="50%" r="50%" />
      </svg>
    </div>

    {/* Section Title with White Background */}
    <div className="text-center mb-12 relative z-10">
      <h2 className="inline-block bg-white text-gray-700 shadow-lg text-2xl font-bold mb-4 px-8 py-3 rounded-xl">
        Meet Our <span className="text-blue-600">Contributors</span>
      </h2>
    </div>

    {/* Contributors Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
      {contributors.map((contributor, index) => (
        <ProfileCard
          key={index}
          name={contributor.name}
          photo={contributor.photo}
          instagram={contributor.instagram}
          linkedin={contributor.linkedin}
        />
      ))}
    </div>
  </section>
);

export default ContributorsSection;
