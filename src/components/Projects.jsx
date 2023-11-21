import ProjectsCard from './ProjectsCard';
import { reactProjects, wordpressProjects } from '../data';
import SectionTitle from './SectionTitle';
import SubSectionTitle from './SubSectionTitle';

const Projects = () => {
  return (
    <section className='py-20 align-element' id='projects'>
      <SectionTitle text='web creations' />
        <SubSectionTitle text='wordpress' />
        <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
          {wordpressProjects.map((project) => {
            return <ProjectsCard key={project.id} {...project} />;
          })}
        </div>

        <SubSectionTitle text='react - self leaning projects' />
        <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
          {reactProjects.map((project) => {
            return <ProjectsCard key={project.id} {...project} />;
          })}
        </div>
    </section>
  );
};
export default Projects;
