import React from 'react'

const Button = ({href,text}) => {
  return (
   <div className='transition ease-in-out duration-300 hover:scale-110  '>
    <a 
        href={href}
        className="border-black border-2 rounded-sm border-dashed inline-block p-3 hover:border-amber-50 hover:bg-black hover:border-dashed hover:border-2 hover:text-amber-50 "
        target="_blank" 
        rel="noopener noreferrer"
      >
        {text}
      </a>
   </div>
  )
}

export default Button
