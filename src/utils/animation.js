export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
}

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { ease: 'easeInOut' }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { ease: 'easeInOut' }
  }
}
