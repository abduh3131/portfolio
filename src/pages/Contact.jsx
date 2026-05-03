import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'
import SplitText from '../components/SplitText.jsx'

const channels = [
  { icon: <FiMail />, label: 'Email', value: 'abhanoosh@gmail.com', href: 'mailto:abhanoosh@gmail.com', external: false },
  { icon: <FiGithub />, label: 'GitHub', value: '@abduh3131', href: 'https://github.com/abduh3131', external: true },
  { icon: <FiLinkedin />, label: 'LinkedIn', value: '/in/abdullah-hanoosh', href: 'https://www.linkedin.com/in/abdullah-hanoosh-3aa3901b8/', external: true },
]

const Contact = () => (
  <PageTransition>
    <section className="contact">
      <div className="contact__hero">
        <Reveal as="span" className="eyebrow">contact · 05 / 05</Reveal>
        <h1 className="contact__title" aria-label="Let's build something good.">
          <SplitText text="Let's build" element="span" stagger={0.04} />
          <br />
          <SplitText text="something " element="span" delay={0.4} stagger={0.04} />
          <em><SplitText text="good." element="span" delay={0.7} stagger={0.05} /></em>
        </h1>
        <Reveal as="p" className="lede" delay={1.2}>
          Open to founding-engineer roles, full-time positions, contracts, and high-impact collaborations — most interested
          in teams shipping ambitious software in healthcare, AI, or robotics. Email is the fastest channel.
        </Reveal>
        <Reveal delay={1.4}>
          <a className="contact__email" href="mailto:abhanoosh@gmail.com">
            abhanoosh@gmail.com →
          </a>
        </Reveal>
      </div>

      <div className="contact__channels">
        {channels.map((c, i) => (
          <Reveal
            key={c.label}
            threshold={0.2}
            delay={1.4 + i * 0.08}
            as="a"
            className="contact__channel"
            {...{ href: c.href, ...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}) }}
          >
            <span className="contact__channel-icon">{c.icon}</span>
            <span className="contact__channel-label">{c.label}</span>
            <span className="contact__channel-value">{c.value}</span>
          </Reveal>
        ))}
      </div>
    </section>
  </PageTransition>
)

export default Contact
