const CodeIcon = props => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* > */}
    <polyline points="3 6 9 12 3 18" />

    {/* < */}
    <polyline points="21 6 15 12 21 18" />
  </svg>
)

export default CodeIcon
