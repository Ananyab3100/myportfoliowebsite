import React from 'react'
import HandDrawnLine from './Line.jsx'

const Header = () => {
  return (
    <div >
      <HandDrawnLine/>
      <div className="font-playpen flex justify-between items-center">
      <h1 className=" font-bold  text-xl md:text-3xl ">Ananya B.</h1>
      <div>
        <div className="flex gap-4 md:gap-6 items-center">
          <div className="transition ease-in-out duration-300 hover:scale-110 ">
           <a
                href="/ANANYA_BHAGAT_resume.pdf"
                download
                className="bg-black text-amber-50 rounded-full py-2 px-2"
              >
                Download CV
              </a>
          </div>

          <div className="hidden md:flex gap-4">
       
        <a
              href="https://www.linkedin.com/in/ananya-bhagat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline hover:text-gray-500 "
            >
              MyLinkedIn
            </a>
            <a
              href="https://github.com/Ananyab3100"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline hover:text-gray-500 "
            >
              MyGithub
            </a>
            </div>
        </div>
      </div>
      </div>
      
     <HandDrawnLine/>
      
    </div>
  )
}

export default Header
