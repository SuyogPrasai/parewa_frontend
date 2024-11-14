import React, { useState } from 'react';

const NoticeCard = ({ title, description, author, date, tag, onClick }) => {
  const [votes, setVotes] = useState(0);
  const [userVote, setUserVote] = useState(null);

  const handleUpvote = () => {
    if (userVote === 'upvote') {
      setVotes(votes - 1);
      setUserVote(null);
    } else {
      setVotes(userVote === 'downvote' ? votes + 2 : votes + 1);
      setUserVote('upvote');
    }
  };

  const handleDownvote = () => {
    if (userVote === 'downvote') {
      setVotes(votes + 1);
      setUserVote(null);
    } else {
      setVotes(userVote === 'upvote' ? votes - 2 : votes - 1);
      setUserVote('downvote');
    }
  };

  return (
    <div 
      onClick={onClick}
      className="flex flex-col sm:flex-row justify-between p-4 bg-white border border-gray-200 shadow-lg rounded-lg mb-4 
                  transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out cursor-pointer relative"
    >
      <div className="flex-grow">
        <div className="mb-1 text-gray-500 text-xs">
          <span>{date}</span> &bull; <span>Posted by {author}</span>
        </div>
        <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 sm:mb-0">{description}</p>

        {/* Tag Styling - Below description in mobile, repositioned in desktop */}
        {tag && (
          <span 
            className="mt-10 sm:mt-0 sm:absolute sm:top-5 sm:right-14 px-2 py-1 text-xs font-medium text-white"
            style={{
              backgroundColor: tag === 'Important' ? '#FF6347' : tag === 'Event' ? '#20B2AA' : '#4682B4',
              color: 'white',
              fontFamily: 'Arial, sans-serif',
              borderRadius: '4px',
            }}
          >
            {tag}
          </span>
        )}
      </div>

      {/* Voting Section */}
      <div className="flex flex-row sm:flex-col items-center justify-center pl-4 space-x-4 sm:space-x-0 sm:space-y-1 mt-2 sm:mt-0">
        <button
          onClick={(e) => { e.stopPropagation(); handleUpvote(); }}
          className={`transition-transform duration-200 hover:-translate-y-1 ${
            userVote === 'upvote' ? 'text-blue-500 scale-110' : 'text-gray-500'
          }`}
          aria-label="Upvote"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12 4l-8 8h6v8h4v-8h6z" />
          </svg>
        </button>
        <span className="text-gray-700 font-semibold">{votes}</span>
        <button
          onClick={(e) => { e.stopPropagation(); handleDownvote(); }}
          className={`transition-transform duration-200 hover:translate-y-1 ${
            userVote === 'downvote' ? 'text-red-500 scale-110' : 'text-gray-500'
          }`}
          aria-label="Downvote"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12 20l8-8h-6V4h-4v8H4z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NoticeCard;
