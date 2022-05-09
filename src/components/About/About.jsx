import React from 'react';
import { Button } from 'react-bootstrap';
import img from '../../img/logo.png'

const About = () => {
   return (
     <>
       <section className="grid container sm:grid-cols-1 md:grid-cols-2">
         <div className="font-mono text-3xl font-semibold mt-20">
           <h1 className="text-6xl text-pink-500">Khai-Dai.Com</h1>
           <h2>Online Platform For Best Food Stocks</h2>
           <br />
           <p className="text-base font-sans">
             Khai-Dai.Com founded in 2022, is a onliner Food Inventory platform
             in Bangladesh. The company offers its services via a website and
             mobile app for Android and iOS. Khai-Dai.Com started as an online
             food service, and has since gone on to redefine supply chains,
             ease commodity trade, support refugee camps, and reduce food
             wastage by building technology into the supply chain, all the way
             back to the farms.
           </p>
           <br />
           <Button className="bg-blue-500 hover:text-blue-700 text-white font-bold mb-4 py-2 px-4 rounded-full text-xl">
             <a
               target="_blank"
               href="https://www.linkedin.com/in/hassan-mehdi11/"
             ></a>
             Explore More
           </Button>
         </div>
         <div className="sm:mt-4">
           <img className="w-50" src={img} alt="" />
         </div>
       </section>
     </>
   );
};

export default About;