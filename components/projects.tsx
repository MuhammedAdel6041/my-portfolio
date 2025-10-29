
import React from 'react';
import SectionHeading from './section-Heading';
import { projectsData } from '@/lib/data';
import Project from './project';


export default function Projects() {
  return (
    <section id="projects">
      <SectionHeading>Projects</SectionHeading>

      <div className="flex flex-col gap-16 mt-10 w-full max-w-5xl">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
