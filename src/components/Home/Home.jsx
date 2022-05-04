import React from 'react';
import Banner from './Banner/Banner';
import Faq from './FAQ/Faq';
import Review from './Review/Review';
import WhyChooseUS from './WhyChooseUS/WhyChooseUS';

const Home = () => {
   return (
      <div className='container'>
         <Banner></Banner>
         <WhyChooseUS></WhyChooseUS>
         <Review></Review>
         <Faq></Faq>
      </div>
   );
};

export default Home;