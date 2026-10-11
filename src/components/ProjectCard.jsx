// ProjectCard.jsx - one project row: a thumbnail tile, title, and description.
// The tile shows the project's first letter in place of an image.
function ProjectCard({ title, description }) {
  return (
    <li className="project">
      <div className="thumb" aria-hidden="true">
        {title.charAt(0).toUpperCase()}
      </div>
      <div className="project-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}

export default ProjectCard;
