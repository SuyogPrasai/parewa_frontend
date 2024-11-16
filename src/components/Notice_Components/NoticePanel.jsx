import React, { useState } from 'react';

const NoticeDetail = ({ title, description, author, date, tag, onBack }) => {
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
    <div className="flex flex-col bg-white border border-gray-200 shadow-lg rounded-lg p-6 transition-transform transform hover:shadow-xl duration-300 ease-in-out">
      {/* Back Link */}
      <button onClick={onBack} className="text-blue-500 hover:text-blue-700 text-sm mb-4">
        &larr; Back to Notices
      </button>

      {/* Notice Content */}
      <h2 className="text-2xl font-semibold text-primary mb-2">{title}</h2>
      <div className="text-gray-500 text-sm mb-4">
        Posted by <span className="font-medium">{author}</span> | {date}
      </div>
      <p className="text-gray-700 mb-4">{description}</p>

      {/* Tag */}
      {tag && (
        <span
          className="inline-block px-3 py-1 text-xs font-medium text-white rounded-full mb-4"
          style={{
            backgroundColor: tag === 'Important' ? '#FF6347' : tag === 'Event' ? '#20B2AA' : '#4682B4',
          }}
        >
          {tag}
        </span>
      )}

      {/* Voting Section */}
      <div className="flex items-center space-x-4 mt-4">
        <button
          onClick={handleUpvote}
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
          onClick={handleDownvote}
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

export default NoticeDetail;
