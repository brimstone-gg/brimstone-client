module.exports = {
  container: {
    width: '100%',
    marginLeft: '2rem',
    position: 'relative'
  },
  input: {
    backgroundColor: '#151e32',
    height: '2.5rem',
    width: '100%',
    padding: '0 2.5rem 0 1.25rem',
    borderRadius: '0.5rem',
    color: '#89a0b5',
    fontSize: '0.875rem',
    borderWidth: 1,
    borderColor: '#222c3c',
    letterSpacing: '0.05em',
    transitionProperty: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
    transitionDuration: '100ms',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
  },
  sectionContainer: {
    borderRadius: '0.5rem'
  },
  sectionTitle: {
    color: '#accfe4',
    padding: '0.25rem 1rem',
    fontSize: '0.75rem',
    userSelect: 'none'
  },
  suggestionsList: {
    display: 'block',
    color: '#89a0b5'
  },
  suggestion: {
    display: 'flex',
    padding: '0.35rem 1rem',
    fontSize: '1rem',
    fontWeight: '800',
    color: '#ecefff'
  },
  suggestionHighlighted: {
    background: '#3C366B',
    color: 'white',
    cursor: 'pointer'
  }
}
