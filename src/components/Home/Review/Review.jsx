import React from 'react';

const Review = () => {
   return (
     <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
       <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl text-center md:mx-auto">
         Our Customer Reviews
       </h2>
       <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
         <div className="p-8 bg-white border rounded shadow-sm">
           <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
             <a
               href="/"
               className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
               aria-label="Category"
             >
               Posted
             </a>{" "}
             <span className="text-gray-600">— 1 Feb 2022</span>
           </p>
           <a
             href="/"
             aria-label="Article"
             title="Jingle Bells"
             className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
           >
             Satisfied ❤️
           </a>
           <p className="mb-5 text-gray-700">
             All the foods were in peak condition and the delivery was also very
             fast.
           </p>
           <div className="flex items-center">
             <a href="/" title="Author" className="mr-3">
               <img
                 src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                 alt="avatar"
                 className="object-cover w-10 h-10 rounded-full shadow-sm"
               />
             </a>
             <div>
               <a
                 href="/"
                 className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
               >
                 Rakib Rayhan
               </a>
             </div>
           </div>
         </div>
         <div className="p-8 bg-white border rounded shadow-sm">
           <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
             <a
               href="/"
               className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
               aria-label="Category"
             >
               Posted
             </a>{" "}
             <span className="text-gray-600">— 15 Mar 2022</span>
           </p>
           <a
             href="/"
             aria-label="Article"
             title="Happy new Year"
             className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
           >
             Pleasant ⭐
           </a>
           <p className="mb-5 text-gray-700">
             Got all the item timely and packaged very well. Would love to
             business with them again.
           </p>
           <div className="flex items-center">
             <a href="/" aria-label="Author" title="Author" className="mr-3">
               <img
                 src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                 alt="avatar"
                 className="object-cover w-10 h-10 rounded-full shadow-sm"
               />
             </a>
             <div>
               <a
                 href="/"
                 aria-label="Author"
                 title="Author"
                 className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
               >
                 Jihan Absar
               </a>
             </div>
           </div>
         </div>
         <div className="p-8 bg-white border rounded shadow-sm">
           <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
             <a
               href="/"
               className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
               aria-label="Category"
             >
               posted
             </a>{" "}
             <span className="text-gray-600">— 28 Apr 2022</span>
           </p>
           <a
             href="/"
             aria-label="Article"
             title="Why i love C++"
             className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
           >
             Exellent Quality 🌟
           </a>
           <p className="mb-5 text-gray-700">
             Very Professional and Dedicated to give the best Service. Highly Recommended.
           </p>
           <div className="flex items-center">
             <a href="/" aria-label="Author" title="Author" className="mr-3">
               <img
                 src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                 alt="avatar"
                 className="object-cover w-10 h-10 rounded-full shadow-sm"
               />
             </a>
             <div>
               <a
                 href="/"
                 aria-label="Author"
                 title="Author"
                 className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
               >
                 Beluga
               </a>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
};

export default Review;