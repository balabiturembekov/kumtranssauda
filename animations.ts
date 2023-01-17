export const container = {
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeInOut", duration: 0.6 },
  },
};
