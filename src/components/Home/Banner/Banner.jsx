import React from 'react';
import foodBg from '../../../img/foodBg.png'
import Delivery from "../../../img/delivery.png";
import I1 from "../../../img/i1.png";
import F1 from "../../../img/f1.png";
import C3 from "../../../img/c3.png";
import Fi1 from "../../../img/fi1.png";

const data = [
  {
    id: 1,
    name: "Icecream",
    decp: "Chocolate & vanilla",
    price: "5.25",
    imageSrc: I1,
  },
  {
    id: 2,
    name: "Strawberries",
    decp: "Fresh Strawberries",
    price: "10.25",
    imageSrc: F1,
  },
  {
    id: 3,
    name: "Chicken Kebab",
    decp: "Mixed Kebab Plate",
    price: "8.25",
    imageSrc: C3,
  },
  {
    id: 4,
    name: "Fish Kebab",
    decp: "Mixed Fish Kebab",
    price: "5.25",
    imageSrc: Fi1,
  },
];

const Banner = () => {
   return (
     <section
       className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
       id="home"
     >
       <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
         <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
           <div className="w-8 h-8 bg-white rounded-full  drop-shadow-xl hidden lg:block md:block">
             <img
               src={Delivery}
               className="w-full h-full object-contain "
               alt="delivery"
             />
           </div>
           <p className="text-base text-orange-500 font-semibold">
             24/7 Delivery
           </p>
         </div>

         <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
           The Best Food Inventory in
           <span className="text-orange-600 text-[3rem] lg:text-[5rem] ml-2">
             Your City
           </span>
         </p>

         <p className="text-base text-textColor text-center md:text-left md:w-[80%] font-sans font-medium">
           We khabar-Chai.com is an Online based food stock company. We have the
           best quality food reserve in our inventory. We provide every kind of
           Foods. If your food business needs any stock just call us. We deliver
           food 24/7 by our own delivery system.
         </p>

         <button
           type="button"
           className="bg-gradient-to-br bg-orange-300  w-full md:w-auto lg:justify-start px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 hover:bg-orange-500 font-medium sm:w-52 sm:mx-auto"
         >
           Order Now
         </button>
       </div>
       <div className="py-2 flex-1 flex items-center relative">
         <img
           src={foodBg}
           className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
           alt="hero-bg"
         />

         <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap grid grid-cols-2">
           {data &&
             data.map((n) => (
               <div
                 key={n.id}
                 className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
               >
                 <img
                   src={n.imageSrc}
                   className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                   alt="I1"
                 />
                 <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                   {n.name}
                 </p>

                 <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                   {n.decp}
                 </p>
               </div>
             ))}
         </div>
       </div>
     </section>
   );
};

export default Banner;