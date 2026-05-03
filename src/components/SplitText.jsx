const SplitText = ({ text, delay = 0, stagger = 0.04, className = '', element: El = 'span' }) => {
  const chars = Array.from(text)
  return (
    <El className={`split ${className}`}>
      {chars.map((c, i) => (
        <span
          key={i}
          className="split__char"
          style={{
            animationDelay: `${delay + i * stagger}s`,
            whiteSpace: c === ' ' ? 'pre' : 'normal',
          }}
        >
          {c}
        </span>
      ))}
    </El>
  )
}

export default SplitText
