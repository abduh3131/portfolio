import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'
import MagneticButton from '../components/MagneticButton.jsx'

const NotFound = () => (
  <PageTransition>
    <section className="notfound">
      <Reveal as="span" className="eyebrow">error · 404</Reveal>
      <h1 className="notfound__code">404</h1>
      <Reveal as="h2" className="notfound__title">
        This page <em>doesn't exist.</em>
      </Reveal>
      <Reveal as="p" className="lede">
        Whatever you were looking for either moved, never existed, or got mistyped. The rest of the site is intact.
      </Reveal>
      <Reveal className="notfound__actions">
        <MagneticButton to="/" variant="primary">Back to home</MagneticButton>
        <MagneticButton to="/projects">Selected work</MagneticButton>
      </Reveal>
    </section>
  </PageTransition>
)

export default NotFound
