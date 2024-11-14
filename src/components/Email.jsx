import React from 'react';

const Email = () => (
  <div
    className="mt-10 flex justify-center items-center w-full bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 bg-gray-100"
    id="email"
  >
    <div className="w-full max-w-screen-lg bg-white rounded-lg shadow-2xl p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center lg:items-stretch">
      
      {/* Text Section */}
      <div className="lg:w-1/2 lg:pr-8 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-blue-600 sm:text-4xl text-center lg:text-left">
          Subscribe to Our Newsletter!
        </h1>
        <p className="mt-4 text-gray-600 text-center lg:text-left">
          Stay updated with the latest events and news from BNKS outside of school. Join our mailing list today!
        </p>
      </div>

      {/* Form Section */}
      <form action="#" className="lg:w-1/2 mt-8 lg:mt-0 space-y-6">
        <div className="relative">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border-gray-300 rounded-lg p-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition duration-150 ease-in-out"
            placeholder="Enter your email"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500 focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 shadow-md transition duration-150 ease-in-out"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  </div>
);

export default Email;
