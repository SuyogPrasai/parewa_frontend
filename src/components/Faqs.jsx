import React from 'react';

const Faqs = () => (
  <>
    <div className="space-y-4 w-[80%] mx-auto mt-[3em]" id="faqs">
      <details className="group [&_summary::-webkit-details-marker]:hidden " open>
        <summary
          className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-blue-500 p-4 text-gray-900"
        >
          <h2 className="font-medium text-white">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"  // Set stroke color to white
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>

        </summary>

        <p className="mt-4 px-4 leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
          recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
          consequuntur distinctio corporis earum similique!
        </p>
      </details>

    </div>
  </>
);

export default Faqs;
