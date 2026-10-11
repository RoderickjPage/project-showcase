// ProjectList.jsx - renders one ProjectCard per project.
// Shows a helpful message when nothing matches.
import ProjectCard from "./ProjectCard";

function ProjectList({ projects, hasSearch }) {
  if (projects.length === 0) {
    return (
      <p className="empty">
        {hasSearch
          ? "No projects match your search. Try a different word."
          : "No projects yet. Add your first one above."}
      </p>
    );
  }

  return (
    <ul className="project-list">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
        />
      ))}
    </ul>
  );
}

export default ProjectList;
