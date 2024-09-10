import React from 'react'
import project1image from "../assets/images/farm2door_image.png"
import project2image from "../assets/images/musclify_image.png"
import project3image from "../assets/images/giffinder_image.png"
import project4image from "../assets/images/spotify_image.png"
import HandDrawnLine from './Line'
import HandDrawnLine2 from './Line2';
import Button from './Button';
import ProjectCard from './ProjectCard';


const Projects = () => {
  return (
    <div className="py-6">
    <p className="text-center font-extrabold text-4xl md:text-5xl font-playpen">PROJECTS</p>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 space-x-2 my-10">
     
     {/*Card 1 */}
     <ProjectCard projectname="Farm2Door"
     description ="The purpose of creating Farm2Door was to develop a fully functional e-commerce solution that integrates a responsive front end with an efficient back end, enabling seamless online grocery shopping and secure transactions."
     imagesrc={project1image}
     href1="https://farm2-door-frontend.vercel.app/"
     href2= "https://github.com/Ananyab3100/Farm2Door"
     techStack={["ReactJs", "NodeJs", "ExpressJs", "Redux", "Tailwind", "MongoDB"]}
     />

      {/*Card 2 */}
      <ProjectCard projectname="Musclify"
     description ="Musclify was designed to offer an interactive exercise platform with detailed workout information and integrated YouTube videos, using React.js and Material UI for a seamless and engaging user experience."
     imagesrc={project2image}
     href1="https://musclifywithgoldsgym.netlify.app/"
     href2= "https://github.com/Ananyab3100/my-gym-app"
     techStack={["ReactJs", "Material UI"]}
     />
    

      {/*Card 3 */}
      <ProjectCard projectname="GIFinder"
     description ="The purpose of building GIFinder was to design an interactive platform where users can search for and view trending GIFs, focusing on implementing real-time data fetching and improving skills in front-end development with API integration."
     imagesrc={project3image}
     href1="https://gifff-finder.netlify.app/"
     href2= "https://github.com/Ananyab3100/GIFinder"
     techStack={["ReactJs", "Tailwind"]}
     />

      {/*Card 4 */}
      <ProjectCard projectname="Spotify-Clone"
     description ="The purpose of creating the Spotify clone was to build a full-stack music streaming app, implementing secure user authentication, global state management, and efficient media storage for seamless playback."
     imagesrc={project4image}
     href1="https://spotify-clone-frontend-nine.vercel.app/"
     href2= "https://github.com/Ananyab3100/Spotify-clone"
     techStack={["ReactJs", "NodeJs", "ExpressJs", "Redux", "Tailwind", "MongoDB"]}
     />


     

    </div>

    <HandDrawnLine className="mt-10" />
    </div>
  )
}

export default Projects
