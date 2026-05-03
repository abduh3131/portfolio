const PageTransition = ({ children, className = '' }) => (
  <main className={`page page-fade ${className}`.trim()}>
    {children}
  </main>
)

export default PageTransition
