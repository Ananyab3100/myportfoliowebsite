import React from 'react';
import Skill from './Skill';
import HandDrawnLine from './Line';

const SkillSection = () => {
  return (
    <>
      <div className="py-6">
          <p className="text-center font-extrabold text-4xl md:text-5xl font-playpen">MY SKILLS</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 space-x-6 my-10">
          <Skill source="https://skillicons.dev/icons?i=js" name="JavaScript"/>
          <Skill source="https://skillicons.dev/icons?i=react" name="React"/>
          <Skill source="https://skillicons.dev/icons?i=ts" name="TypeScript"/>
          <Skill source="https://skillicons.dev/icons?i=nextjs" name="Next.js"/>
          <Skill source="https://skillicons.dev/icons?i=redux" name="Redux"/>
          <Skill source="https://skillicons.dev/icons?i=nodejs" name="Node.js"/>
          <Skill source="https://skillicons.dev/icons?i=expressjs" name="Express.js"/>
          <Skill source="https://skillicons.dev/icons?i=mongodb" name="MongoDB"/>
          <Skill source="https://skillicons.dev/icons?i=mysql" name="MySQL"/>
          <Skill source="https://skillicons.dev/icons?i=tailwind" name="Tailwind"/>
          <Skill source="https://skillicons.dev/icons?i=html" name="HTML5"/>
          <Skill source="https://skillicons.dev/icons?i=css" name="CSS3"/>
          <Skill source="https://skillicons.dev/icons?i=github" name="Github"/>
          <Skill source="https://skillicons.dev/icons?i=git" name="Git"/>
        
          </div>
          

        </div>
    </>
  )
}

export default SkillSection
