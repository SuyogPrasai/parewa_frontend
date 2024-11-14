import React, { useState } from 'react';

const NoticeCard = ({ title, description, author, date, onClick }) => {
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
      className="flex justify-between p-4 bg-white border border-gray-200 shadow-lg rounded-lg mb-4 
                  transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out cursor-pointer"
    >
      <div className="flex-grow">
        <div className="mb-1 text-gray-500 text-xs">
          <span>{date}</span> &bull; <span>Posted by {author}</span>
        </div>
        <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="flex flex-col items-center justify-center pl-4 space-y-1">
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
