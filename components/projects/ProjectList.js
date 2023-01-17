import ProjectCard from './ProjectCard';

export default function ProjectList({ projects }) {
  return (
    <div className="flex flex-col gap-7 md:gap-9">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
