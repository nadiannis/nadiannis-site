import ProjectCard from './ProjectCard';

export default function ProjectList({ projects }) {
  return (
    <div className="flex flex-col gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
