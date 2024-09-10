import React from 'react';
import HandDrawnLine from './Line';
import HandDrawnRectangle from './Rectangle';
import SkillSection from './SkillSection';
import Button from './Button';


const Home = () => {
  return (
    <>
      {/* Name Intro */}
      <div className="flex flex-col py-2 font-playpen">
        <div className="py-2">
          <p className="text-md font-playpen my-2 md:mt-4 md:mb-4">Hi,</p>
          <p className=" font-bold text-5xl md:text-7xl font-playpen my-2 md:my-4">I am Ananya Bhagat.</p>
          </div>
          
          <p className=" font-semibold  text-2xl md:text-4xl font-playpen my-4">a fullstack web developer</p>
          <p className="text-lg font-playpen my-4">
            I like to make things for the web. It all started out of curiosity. But now, it has become a passion. I love making
            <br />
            Mandala art too!
          </p>
        </div>
        <HandDrawnLine className="mt-8" />

        {/* Skills */}
      <SkillSection/>

        <HandDrawnLine className="mt-8" />

        <div>
          <image src="../assets/images/photoframe.png"/>
         
        </div>
      
    </>
  );
};

export default Home;
