import React from 'react';

const Email = () => (
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mt-[2em] mb-[4rem]" id="email">
    <div className="mx-auto max-w-lg">
      <h1 className="text-center text-2xl font-bold text-blue-500 sm:text-3xl">Sign up to Our Email Newsletter!</h1>

      <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
        Signing up in our notice system allows you to have access to the events going on in bnks outside of school!
      </p>

      <form action="#" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-2xl sm:p-6 lg:p-8">
        <p className="text-center text-lg font-medium">Enter your Email if you Haven't!</p>

        <div>
          <label htmlFor="email" className="sr-only">Email</label>

          <div className="relative">
            <input
              type="email"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-2xl"
              placeholder="Enter email"
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 text-gray-400"
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
        </div>

        <button
          type="submit"
          className="block w-full rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white shadow-2xl hover:bg-blue-400 transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
);

export default Email;
