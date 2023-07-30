import React from 'react';

const WhyChooseUS = () => {
   return (
     <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
       <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
         <div>
         </div>
         <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
           Why Choose US?
         </h2>
         <p className="text-base text-gray-700 md:text-lg">
           There maybe a lot of company like us. So you might be wondering why
           choose us among them? To answer your question here are some of our
           points.Ek bar khaile jibonew vhulben na
         </p>
       </div>
       <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
         <div className="p-5 duration-300 transform bg-white border-2 rounded shadow-sm border-purple-400 hover:-translate-y-2">
           <div className="flex items-center mb-2">
             <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-violet-700">
               1
             </p>
             <p className="text-lg font-bold leading-5">
               Biggest Stock In The City
             </p>
           </div>
           <p className="text-sm text-gray-900">
             We have the biggest stock of any kind of foods you want. None of
             our competitors can offer you that much stock.
           </p>
         </div>
         <div className="p-5 duration-300 transform bg-white border-2 rounded shadow-sm border-purple-400  hover:-translate-y-2">
           <div className="flex items-center mb-2">
             <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-violet-700">
               2
             </p>
             <p className="text-lg font-bold leading-5">Fast Delivery</p>
           </div>
           <p className="text-sm text-gray-900">
             Our second best key selling point is our delivery system. We have a
             24/7 delivery system lead by our company.
           </p>
         </div>
         <div className="relative p-5 duration-300 transform bg-white border-2 rounded shadow-sm border-purple-400  hover:-translate-y-2">
           <div className="flex items-center mb-2">
             <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-violet-700">
               3
             </p>
             <p className="text-lg font-bold leading-5">Online Payment</p>
           </div>
           <p className="text-sm text-gray-900">
             We accept all kind of payment system in our website starting from
             international VISA Card to Local Bkash/Nagad etc. So no worries
             with the payment issue.
           </p>
           <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-deep-purple-accent-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
             <svg
               className="text-white w-7"
               stroke="currentColor"
               viewBox="0 0 24 24"
             >
               <polyline
                 fill="none"
                 strokeWidth="2"
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeMiterlimit="10"
                 points="6,12 10,16 18,8"
               />
             </svg>
           </p>
         </div>
       </div>
     </div>
   );
};

export default WhyChooseUS;