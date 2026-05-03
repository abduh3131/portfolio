const ProjectCard = ({ project }) => {
  const { title, tagline, description, highlights = [], technologies = [], repo, live, images = [] } = project

  return (
    <article className="project-card">
      <div className="project-card__header">
        <span className="project-card__tag">{tagline}</span>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        {highlights.length > 0 && (
          <ul className="project-card__highlights">
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}
        {technologies.length > 0 && (
          <div className="project-card__meta">
            {technologies.map((tech) => (
              <span key={tech} className="project-card__chip">
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="project-card__links">
          {repo && (
            <a href={repo} target="_blank" rel="noopener noreferrer" aria-label={`${title} GitHub repository`}>
              <span>GitHub</span>
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" aria-label={`${title} live preview`}>
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
      <div className="project-card__media">
        {images.map((image) => (
          <figure key={image.src}>
            <img src={image.src} alt={image.alt} loading="lazy" />
            <figcaption>{image.alt}</figcaption>
          </figure>
        ))}
      </div>
    </article>
  )
}

export default ProjectCard
