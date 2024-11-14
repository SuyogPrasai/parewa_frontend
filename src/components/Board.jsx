import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import NoticeCard from './Notice_Components/NoticeCard'; // Import NoticeCard component

const Board = () => {
  const [activeComponent, setActiveComponent] = useState('General');
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsTabletOrMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categoryContent = {
    General: [
      { date: '2024-11-12', postedBy: 'Admin', title: 'School Announcement', content: 'There will be an assembly on Monday.' },
      { date: '2024-11-10', postedBy: 'Tech Club', title: 'Club Event', content: 'Join us for a special coding workshop.' },
    ],
    // Add content for other categories as necessary
  };

  const sidebarItems = [
    { text: '📒 General', component: 'General' },
    { text: '📕 School', component: 'School' },
    { text: '📤 Departments', component: 'Departments' },
    { text: '🎼 Clubs', component: 'Clubs' },
  ];

  const handleComponentSwitch = (component) => {
    setActiveComponent(component);
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
        } h-[73vh] p-6 bg-white shadow-2xl rounded-2xl border border-gray-200 overflow-auto mt-4 lg:mt-0`}
      >
        <h1 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
          <span>{sidebarItems.find((item) => item.component === activeComponent).text.slice(0, 2)}</span>
          <span>{activeComponent}</span>
        </h1>
        <hr className="border-t-2 border-gray-300 mb-4" />
        
        {/* Render NoticeCard for each notice in the active category */}
        {categoryContent[activeComponent] ? (
          categoryContent[activeComponent].map((notice, index) => (
            <NoticeCard
              key={index}
              title={notice.title}
              description={notice.content}
              author={notice.postedBy}
              date={notice.date}
              onClick={() => console.log(`Notice clicked: ${notice.title}`)}
            />
          ))
        ) : (
          <p className="text-gray-700">No content available for this category.</p>
        )}
      </main>
    </div>
  );
};

export default Board;
