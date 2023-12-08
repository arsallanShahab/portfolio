const PARENT_VARIANTS_1 = {
  initial: {
    transition: {},
  },
  animate: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.05,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const PARENT_VARIANTS_2 = {
  initial: {
    transition: {},
  },
  animate: {
    transition: {
      delayChildren: 1.25,
      staggerChildren: 0.04,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const PARENT_VARIANTS_3 = {
  initial: {
    transition: {},
  },
  animate: {
    transition: {
      delayChildren: 2.25,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
};

const PARENT_VARIANTS_4 = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 2.4,
      staggerDirection: 1,
    },
  },
};
const PARENT_VARIANTS_5 = {
  initial: {
    opacity: 0,
    scaleX: 0,
    transformOrigin: "left",
  },
  animate: {
    opacity: 1,
    scaleX: 1,
    transformOrigin: "left",
    transition: {
      duration: 0.5,
      delayChildren: 5.35,
      delay: 5,
      staggerChildren: 0.02,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const CHILD_VARIANTS_1 = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.87, 0, 0.13, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.75,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const CHILD_VARIANTS_2 = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.87, 0, 0.13, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.8,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const CHILD_VARIANTS_3 = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.87, 0, 0.13, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.75,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};
const CHILD_VARIANTS_4 = {
  initial: {
    opacity: 0,
    transformOrigin: "left",
  },
  animate: {
    opacity: 1,
    x: 0,
    transformOrigin: "left",
    transition: {
      duration: 0.75,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const APP_ANIMATION_PARENT = {
  hidden: {
    scale: 1,
    transition: {
      staggerChildren: 0.15,
      staggerDirection: -1,
    },
  },
  show: {
    scale: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const APP_ANIMATION_CHILD = {
  hidden: {
    scaleY: 0,
    transition: {
      ease: [0.87, 0, 0.13, 1],
      duration: 0.65,
    },
  },
  show: {
    scaleY: 1,
    transition: {
      ease: [0.87, 0, 0.13, 1],
      duration: 1.2,
    },
  },
};

export const framerConfig = {
  PARENT_VARIANTS_1,
  PARENT_VARIANTS_2,
  PARENT_VARIANTS_3,
  PARENT_VARIANTS_4,
  PARENT_VARIANTS_5,
  CHILD_VARIANTS_1,
  CHILD_VARIANTS_2,
  CHILD_VARIANTS_3,
  CHILD_VARIANTS_4,
  APP_ANIMATION_PARENT,
  APP_ANIMATION_CHILD,
};
