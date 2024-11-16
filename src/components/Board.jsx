import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import NoticeCard from './Notice_Components/NoticeCard';
import '../assets/styles/board.css';

const Board = () => {
  const [activeComponent, setActiveComponent] = useState('General');
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(window.innerWidth < 1024);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [votes, setVotes] = useState(0);
  const [userVote, setUserVote] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsTabletOrMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const categoryContent = {
    General: [
      {
        date: '2024-11-12',
        postedBy: 'Admin',
        title: 'School Announcement',
        content: 'There will be an assembly on Monday.',
        tag: 'Important',
        image: '/mnt/data/image.png', // Add path for image here
      },
      // Add other notices here as needed
    ],
    School: [
      {
        date: '2024-11-12',
        postedBy: 'Admin',
        title: 'School Announcement',
        content: 'There will be an assembly on Monday.',
        tag: 'Important',
        image: '/mnt/data/image.png', // Add path for image here
      },
    ],
  };

  const sidebarItems = [
    { text: '📒 General', component: 'General' },
    { text: '📕 School', component: 'School' },
    { text: '📤 Departments', component: 'Departments' },
    { text: '🎼 Clubs', component: 'Clubs' },
  ];

  const handleComponentSwitch = (component) => {
    setActiveComponent(component);
    setSelectedNotice(null); // Reset selected notice when switching categories
  };

  return (
    <div className="flex flex-col lg:flex-row items-start w-full max-w-5xl mx-auto bg-gray-100 p-4 lg:p-0">
      <Sidebar
        sidebarItems={sidebarItems}
        onClick={handleComponentSwitch}
        activeComponent={activeComponent}
        isTabletOrMobile={isTabletOrMobile}
      />
      <main
        className={`${
          isTabletOrMobile ? 'w-full' : 'flex-1'
        } h-[73vh] p-6 bg-white shadow-2xl rounded-2xl border border-gray-200 overflow-auto mt-4 lg:mt-0 custom-scrollbar`}
      >
        <h1 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
          <span>{sidebarItems.find((item) => item.component === activeComponent).text.slice(0, 2)}</span>
          <span>{activeComponent}</span>
        </h1>
        <hr className="border-t-2 border-gray-300 mb-4" />
        
        {selectedNotice ? (
          <div className="space-y-4 relative">
            <button
              onClick={() => setSelectedNotice(null)}
              className="text-gray-600 hover:text-primary flex items-center mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 mr-1"
              >
                <path d="M15 19l-7-7 7-7v14z" />
              </svg>
              Back
            </button>

            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-primary mb-1">{selectedNotice.title}</h2>
              {selectedNotice.tag && (
                <span
                  className="inline-block px-2 py-1 text-xs font-medium text-white rounded"
                  style={{
                    backgroundColor: selectedNotice.tag === 'Important' ? '#FF6347' : selectedNotice.tag === 'Event' ? '#20B2AA' : '#4682B4',
                  }}
                >
                  {selectedNotice.tag}
                </span>
              )}
            </div>

            <div className="text-gray-500 text-sm italic">
              {selectedNotice.date} • Posted by {selectedNotice.postedBy}
            </div>

            {selectedNotice.image && (
              <img src={selectedNotice.image} alt="Notice" className="w-full h-auto rounded-md mb-4" />
            )}

            <p className="text-gray-700 leading-relaxed">{selectedNotice.content}</p>

            <div className="absolute bottom-4 right-4 flex items-center space-x-2">
              <button
                onClick={handleUpvote}
                className={`transition-transform duration-200 ${
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
                className={`transition-transform duration-200 ${
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
        ) : (
          categoryContent[activeComponent].map((notice, index) => (
            <NoticeCard
              key={index}
              title={notice.title}
              description={notice.content}
              author={notice.postedBy}
              date={notice.date}
              tag={notice.tag}
              onClick={() => {
                setSelectedNotice(notice);
                setVotes(0);
                setUserVote(null);
              }}
            />
          ))
        )}
      </main>
    </div>
  );
};

export default Board;
