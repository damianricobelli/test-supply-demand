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
  circle_box_hidden: (position) => ({
    x: position === "left" ? -120 : 120,
    scale: 0,
  }),
  globe_gradient_line_show: (step) => ({
    scale: step === 3 ? 0.9 : 1.05,
    opacity: 1,
  }),
  show_scale_dot_purple: (step) => ({
    scale: 1,
    opacity: 1,
    x: step === 3 ? 195 : 140,
    transition: { duration: 1 },
  }),
  show_scale_dot_blue: (step) => ({
    scale: 1,
    opacity: 1,
    x: step === 3 ? -195 : -140,
    transition: { duration: 1 },
  }),
  hidden_scale_dot_purple: {
    x: 160,
    scale: 0,
    opacity: 0,
    transition: { duration: 1, delay: 0.4 },
  },
  hidden_scale_dot_blue: {
    x: -160,
    scale: 0,
    opacity: 0,
    transition: { duration: 1, delay: 0.4 },
  },
  text_translate: (position) => ({
    x: position === "left" ? -165 : 175,
    y: 18,
    scale: 0.6,
    opacity: [0.5, 1],
    transition: { duration: 1 },
  }),
  text_translate_plus: (position) => ({
    x: position === "left" ? -220 : 230,
    y: 18,
    scale: 0.6,
    opacity: 1,
    transition: { duration: 1 },
  }),
};
