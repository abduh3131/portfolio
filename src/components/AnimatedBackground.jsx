const dots = Array.from({ length: 36 })

const AnimatedBackground = () => (
  <div className="background" aria-hidden="true">
    <div className="background__grid" />
    <div className="background__glow" />
    <div className="background__overlay" />
    <div className="background__dots">
      {dots.map((_, index) => (
        <span key={index} style={{ '--i': index }} />
      ))}
    </div>
  </div>
)

export default AnimatedBackground
