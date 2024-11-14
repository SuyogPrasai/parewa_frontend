import React from 'react';

const Sidebar = ({ sidebarItems, onClick, activeComponent, isTabletOrMobile }) => {
  return (
    <div
      className={`${
        isTabletOrMobile
          ? 'w-[98%] mx-auto flex justify-around bg-white shadow-2xl rounded-3xl border-b border-gray-300 py-4'
          : 'mr-[1em]  w-1/4 h-[73vh] bg-white p-6 shadow-2xl rounded-3xl border border-gray-200 flex flex-col space-y-3'
      }`}
    >
      {!isTabletOrMobile && (
        <div>
          <h2 className="text-gray-600 text-lg font-semibold mb-4 font-title">Categories</h2>
          <hr className="border-t-2 border-gray-300 mb-4" />
        </div>
      )}
      {sidebarItems.map((item) => (
        <button
          key={item.component}
          onClick={() => onClick(item.component)}
          className={`${
            activeComponent === item.component
              ? 'bg-blue-100 text-blue-600 font-semibold'
              : 'text-gray-700 hover:bg-gray-100'
          } ${
            isTabletOrMobile
              ? 'flex flex-col items-center space-y-1 p-2 rounded-md transition duration-200'
              : 'flex items-center space-x-3 p-1 rounded-md transition duration-200'
          }`}
        >
          <span className="text-2xl">{item.text.slice(0, 2)}</span>
          {!isTabletOrMobile && <span>{item.text.slice(2)}</span>}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
