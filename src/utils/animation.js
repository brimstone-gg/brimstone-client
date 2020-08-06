export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.03
    }
  }
}

export const fadeInUp = {
  initial: {
    y: 24,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [ 0.42, 0, 0.58, 1 ]
    }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: [ 0.42, 0, 0.58, 1 ]
    }
  }
}

export const fadeIn = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  }
}
