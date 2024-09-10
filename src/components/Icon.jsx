import React from 'react';
import { Link } from 'react-router-dom';

const Icon = ({to,color,isActive, onClick}) => {
  const handleScroll = (e) => {
    e.preventDefault();
    const section = document.querySelector(to);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    onClick();
  };
  return (
    <Link to={to}  onClick={handleScroll}>
    <div className= {` w-8 md:w-12  ${color} ${isActive ? 'h-16 md:h-32' : ' h-14 md:h-20'}  rounded-b-full cursor-pointer shadow-lg transition-all duration-200 md:hover:h-32 hover:h-20 `}>
      
    </div>
    </Link>

  )
}

export default Icon
