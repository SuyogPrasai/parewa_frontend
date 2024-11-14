import React from 'react';
import instagramIcon from '../assets/imgs/instagram.svg';
import linkedinIcon from '../assets/imgs/linkedin.svg';

const ProfileCard = ({ name, photo, instagram, linkedin }) => (
  <div className="bg-white z-10 rounded-lg shadow-lg p-6 flex items-center w-[500px] h-[75px]">
    {/* Profile Image */}
    <img
      src={photo}
      alt={`${name}'s profile`}
      className="w-14 h-14 rounded-full object-cover border-4 border-blue-500"
    />

    {/* Info Section */}
    <div className="ml-6 flex-grow">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
    </div>

    {/* Social Links with Imported SVG Icons */}
    <div className="ml-auto flex space-x-4 p-5">
      {instagram && (
        <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
          <img src={instagramIcon} alt="Instagram" className="h-8 w-8" />
        </a>
      )}
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
          <img src={linkedinIcon} alt="LinkedIn" className="h-8 w-8" />
        </a>
      )}
    </div>
  </div>
);

export default ProfileCard;