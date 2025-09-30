import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

const Projects = () => (
  <PageTransition className="projects">
    <header className="projects__intro">
      <div className="section-heading">
        <Reveal as="span" delay={0.1} distance={8}>
          projects
        </Reveal>
        <Reveal as="h2" delay={0.18}>
          Selected work in AI, full-stack, and systems.
        </Reveal>
        <Reveal as="p" delay={0.26}>
          I build fast, reliable products with clear UX and maintainable code. Entries are data-driven—update the projects data file and they render here instantly.
        </Reveal>
      </div>
    </header>
    <div className="projects__grid">
      {projects.map((project, index) => (
        <Reveal key={project.id ?? project.title ?? index} threshold={0.2} delay={index * 0.05}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  </PageTransition>
)

export default Projects
