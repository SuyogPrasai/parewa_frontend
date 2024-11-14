import React from 'react';

const Info = () => (
  <section className="relative max-w-screen-xl mx-auto py-10 px-6 md:px-12 bg-white" id="info">
    {/* Overlay */}
    <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>

    <div className="relative z-10 gap-6 items-center lg:flex">
      {/* Left section */}
      <div className="flex-1 max-w-lg py-6 sm:mx-auto sm:text-center lg:max-w-md lg:text-left">
        <h3 className="text-3xl text-gray-900 font-semibold md:text-4xl">
        <span className="text-blue-500">Parewa:</span> Information Portal by +2 CS 6000E
        </h3>
        <p className="text-gray-600 leading-relaxed mt-4">
          Nam erat risus, sodales sit amet lobortis ut, finibus eget metus. Cras aliquam ante ut tortor posuere feugiat. Duis sodales nisi id porta lacinia.
        </p>
        <a
          className="mt-6 px-6 py-3 text-white font-medium bg-blue-500 hover:bg-transparent hover:border-blue-500 hover:text-blue-500 rounded-full inline-flex items-center transition duration-300 ease-in-out border-2"
          href="#">
          Try it out
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 transition duration-150 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>

      {/* Right section with image */}
      <div className="flex-1 mt-6 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
        <img 
          src="https://i.postimg.cc/kgd4WhyS/container.png" 
          alt="Website Design" 
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default Info;
