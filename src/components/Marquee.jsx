const Marquee = ({ items = [], reverse = false, mute = false }) => {
  const doubled = [...items, ...items]
  return (
    <div className={`marquee ${reverse ? 'marquee--reverse' : ''} ${mute ? 'marquee--mute' : ''}`} aria-hidden="true">
      <div className="marquee__track">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee__item">{item}</span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
