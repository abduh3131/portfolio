import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'

const Contact = () => (
  <PageTransition className="contact">
    <header className="projects__intro">
      <div className="section-heading">
        <Reveal as="span" delay={0.1} distance={8}>
          contact
        </Reveal>
        <Reveal as="h2" delay={0.18}>
          Open channels for software engineering opportunities.
        </Reveal>
        <Reveal as="p" delay={0.26}>
          I’m actively connecting with employers and teams on internships, co-ops, and new grad software engineering roles. 
          Feel free to reach out through any of the methods below.
        </Reveal>
      </div>
    </header>

    <div className="contact__grid">
      <Reveal className="contact__panel" threshold={0.2}>
        <h3>Preferred signal</h3>
        <p className="contact__note">
          Email is the fastest way to reach me. Please include details about the role or opportunity so I can respond promptly.
        </p>
        <div className="contact__methods">
          <a href="mailto:abhanoosh@gmail.com">
            <span>
              <FiMail />
            </span>
            <span>
              <strong>Email</strong>
              <small>abhanoosh@gmail.com</small>
            </span>
          </a>
          <a href="https://github.com/abduh3131" target="_blank" rel="noopener noreferrer">
            <span>
              <FiGithub />
            </span>
            <span>
              <strong>GitHub</strong>
              <small>@abduh3131</small>
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/abdullah-hanoosh-3aa3901b8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <FiLinkedin />
            </span>
            <span>
              <strong>LinkedIn</strong>
              <small>/in/abdullah-hanoosh-3aa3901b8</small>
            </span>
          </a>
        </div>
      </Reveal>

      <Reveal className="contact__panel" threshold={0.2} delay={0.1}>
        <h3>Availability</h3>
        <p className="contact__signal">status: seeking software engineering roles</p>
        <p className="contact__note">
          Based in Ontario, Canada with full remote capability. I am open to internships, co-ops, and new graduate software engineering positions.
        </p>
        <p className="contact__note">
          My background includes full-stack development, AI/ML projects, and hands-on system design. I’m ready to contribute to high-impact engineering teams and grow with challenging real-world problems.
        </p>
      </Reveal>
    </div>
  </PageTransition>
)

export default Contact
