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
    name: 'Jane Smith',
    photo: 'https://via.placeholder.com/150',
    instagram: 'https://instagram.com/janesmith',
    linkedin: 'https://linkedin.com/in/janesmith',
  },
  {
    name: 'Jane Smith',
    photo: 'https://via.placeholder.com/150',
    instagram: 'https://instagram.com/janesmith',
    linkedin: 'https://linkedin.com/in/janesmith',
  },
  {
    name: 'Jane Smith',
    photo: 'https://via.placeholder.com/150',
    instagram: 'https://instagram.com/janesmith',
    linkedin: 'https://linkedin.com/in/janesmith',
  },
  {
    name: 'Jane Smith',
    photo: 'https://via.placeholder.com/150',
    instagram: 'https://instagram.com/janesmith',
    linkedin: 'https://linkedin.com/in/janesmith',
  },
  {
    name: 'Jane Smith',
    photo: 'https://via.placeholder.com/150',
    instagram: 'https://instagram.com/janesmith',
    linkedin: 'https://linkedin.com/in/janesmith',
  },
  {
    name: 'Jane Smith',
    photo: 'https://via.placeholder.com/150',
    instagram: 'https://instagram.com/janesmith',
    linkedin: 'https://linkedin.com/in/janesmith',
  },
  {
    name: 'Jane Smith',
    photo: 'https://via.placeholder.com/150',
    instagram: 'https://instagram.com/janesmith',
    linkedin: 'https://linkedin.com/in/janesmith',
  },
  // Add more contributors as needed
];

const ContributorsSection = () => (
  <section id="contributors" className="mt-20 py-16 px-[7em] bg-white relative overflow-hidden shadow-xl rounded-xl width-[75%]">
    {/* Decorative Background Shapes */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      {/* Large Blue Bubble on the Left */}
      <svg className="absolute top-10 left-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="80" r="30" fill="rgba(59, 130, 246, 0.3)" />
      </svg>
      {/* Large Blue Bubble on the Right */}
      <svg className="absolute top-20 right-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="90" cy="90" r="40" fill="rgba(59, 130, 246, 0.3)" />
      </svg>
      {/* Smaller Blue Bubbles */}
      <svg className="absolute top-10 left-40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="10" fill="rgba(59, 130, 246, 0.2)" />
      </svg>
      <svg className="absolute top-40 left-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="6" fill="rgba(59, 130, 246, 0.2)" />
      </svg>
      <svg className="absolute top-50 left-60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="35" r="8" fill="rgba(59, 130, 246, 0.2)" />
      </svg>
      <svg className="absolute top-70 left-30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="50" r="7" fill="rgba(59, 130, 246, 0.2)" />
      </svg>
    </div>

    <div className="max-w-3xl mx-auto text-center mb-12">
      {/* Section Title */}
      <h2 className="bg-white text-grey-300 shadow-2xl text-[1.5rem] font-bold mb-4 text-gray-700 px-[4em] py-[0.75em] rounded-3xl"> Meet Our <span className='text-blue-600'>Contributors</span> </h2>

    </div>

    {/* Contributors Grid */}
    <div className="grid grid-cols-1 md:grid-cols-1 md:place-items-center lg:grid-cols-2 gap-y-8 gap-x-10 max-w-5xl mx-auto">
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
