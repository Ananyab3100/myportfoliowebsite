// src/components/ProjectCard.jsx
import React from 'react';
import FadeInWrapper from './FadeInWrapper'; // Import the new component
import HandDrawnLine2 from './Line2';
import Button from './Button';
import TechStackButton from './TechStackButton';

const ProjectCard = ({ projectname, description, imagesrc, href1, href2, techStack }) => {
  return (
    <div className="font-playpen">
      {/* Wrap only the image with FadeInWrapper */}
      <FadeInWrapper>
        <img src={imagesrc} alt={projectname} />
      </FadeInWrapper>
      <h3 className="text-3xl font-extrabold mb-2">{projectname}</h3>
      <HandDrawnLine2 />
      <p className="text-md">{description}</p>
      <div className="flex flex-wrap gap-2 my-3">
        {techStack.map((tech, index) => (
          <TechStackButton key={index} text={tech} />
        ))}
      </div>
      <div className="flex gap-4 my-2">
        <Button href={href1} text="View App" />
        <Button href={href2} text="View Code" />
      </div>
    </div>
  );
};

export default ProjectCard;
