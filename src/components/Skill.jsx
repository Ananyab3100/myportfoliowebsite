import React from 'react';
import HandDrawnRectangle from './Rectangle';

const Skill = ({source,name}) => {
  return (
    <>

 <div className="flex flex-col items-center space-y-1 mb-6"> 
            <HandDrawnRectangle>
              <img
                src={source}
                className="object-cover"
                alt="Git Icon"
              />
            </HandDrawnRectangle>
            <div className="text-xl font-playpen mt-1 ">
              <p>{name}</p>
            </div>
          </div>
    </>
  )
}

export default Skill
