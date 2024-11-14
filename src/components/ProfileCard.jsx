import React from 'react';
import instagramIcon from '../assets/imgs/instagram.svg';
import linkedinIcon from '../assets/imgs/linkedin.svg';

const ProfileCard = ({ name, photo, instagram, linkedin }) => (
  <div className="bg-white rounded-lg shadow-md p-4 flex items-center w-full sm:w-[90%] md:w-[80%] lg:w-[500px] mx-auto h-[120px]">
    {/* Profile Image */}
    <img
      src={photo}
      alt={`${name}'s profile`}
      className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-blue-500"
    />

    {/* Info Section */}
    <div className="ml-4 md:ml-6 flex-grow">
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
    </div>

    {/* Social Links */}
    <div className="flex ml-4 md:ml-6 space-x-4">
      {instagram && (
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-600"
        >
          <img src={instagramIcon} alt="Instagram" className="h-6 w-6 md:h-8 md:w-8" />
        </a>
      )}
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-800"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="h-6 w-6 md:h-8 md:w-8" />
        </a>
      )}
    </div>
  </div>
);

export default ProfileCard;
