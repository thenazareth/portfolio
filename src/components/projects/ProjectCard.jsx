import ProjectTag from './ProjectTag';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  const {
    id,
    category,
    title,
    description,
    tags = [],
    demoUrl,
    githubUrl,
  } = project;

  return (
    <div className="project-card">
      <div className="project-card-top">
        <div className="project-card-header">
          <span className="project-card-category">{category}</span>
          <span className="project-card-id">#{id}</span>
        </div>
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description" title={description}>
          {description}
        </p>
      </div>

      <div className="project-card-bottom">
        <div className="project-card-tags">
          {tags.map((tag) => (
            <ProjectTag key={tag}>{tag}</ProjectTag>
          ))}
        </div>

        <div className="project-card-actions">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="project-card-btn project-card-btn--primary"
            >
              <span className="material-symbols-outlined project-card-btn-icon">
                open_in_new
              </span>
              Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="project-card-btn project-card-btn--secondary"
            >
              <span className="material-symbols-outlined project-card-btn-icon">
                code
              </span>
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}