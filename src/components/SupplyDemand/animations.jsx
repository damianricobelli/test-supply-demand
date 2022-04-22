export const elementsVariants = {
  without_opacity: {
    opacity: 0,
    scale: 1,
    transition: { duration: 0 },
  },
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
  },
  genes_show: {
    scale: 1,
    opacity: 0.4,
  },
  circle_box_hidden: ({ position }) => ({
    x: position === "left" ? -120 : 120,
    scale: 0,
  }),
  globe_gradient_line_show: (step) => ({
    scale: step === 3 ? 0.9 : 1.05,
    opacity: 1,
  }),
  hidden_scale_dot_purple: {
    x: -338,
    scale: 0,
    opacity: 0,
    transition: { duration: 0.75, delay: 0.4 },
  },
  show_scale_dot_purple: (isSmall) => ({
    scale: 1,
    opacity: 1,
    x: isSmall ? -203 : -338,
    transition: { duration: 0.75 },
  }),
  show_scale_dot_purple_plus: (isSmall) => ({
    scale: 1,
    opacity: 1,
    x: isSmall ? -235 : -395,
    transition: { duration: 0.75 },
  }),
  hidden_scale_dot_blue: {
    x: 338,
    scale: 0,
    opacity: 0,
    transition: { duration: 0.75, delay: 0.4 },
  },
  show_scale_dot_blue: (isSmall) => ({
    scale: 1,
    opacity: 1,
    x: isSmall ? 203 : 338,
    transition: { duration: 0.75 },
  }),
  show_scale_dot_blue_plus: (isSmall) => ({
    scale: 1,
    opacity: 1,
    x: isSmall ? 235 : 395,
    transition: { duration: 0.75 },
  }),
  text_purple_translate: (isSmall) => ({
    x: !isSmall ? -165 : 0,
    y: !isSmall ? 18 : -90,
    scale: !isSmall ? 0.6 : 0.7,
    opacity: [0.5, 1],
    transition: { duration: 0.75 },
  }),
  text_purple_translate_plus: (isSmall) => ({
    x: !isSmall ? -220 : 0,
    y: !isSmall ? 18 : -125,
    scale: !isSmall ? 0.6 : 0.7,
    opacity: 1,
    transition: { duration: 0.75 },
  }),
  text_blue_translate: (isSmall) => ({
    x: !isSmall ? 175 : 6,
    y: !isSmall ? 18 : 125,
    scale: !isSmall ? 0.6 : 0.7,
    opacity: [0.5, 1],
    transition: { duration: 0.75 },
  }),
  text_blue_translate_plus: (isSmall) => ({
    x: !isSmall ? 230 : 6,
    y: !isSmall ? 18 : 160,
    scale: !isSmall ? 0.6 : 0.7,
    opacity: 1,
    transition: { duration: 0.75 },
  }),
};
