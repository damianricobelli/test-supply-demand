import { AnimatePresence } from "framer-motion";
import React from "react";
import { GlowDot } from "./glow-dot";

export const DotsComponent = ({ state, isSmall, elementsVariants }) => {
  return (
    <AnimatePresence>
      <GlowDot
        initial="hidden_scale_dot_purple"
        animate={
          state < 3
            ? "hidden_scale_dot_purple"
            : state === 3
            ? "show_scale_dot_purple"
            : "show_scale_dot_purple_plus"
        }
        custom={isSmall}
        exit={{ scale: [1, 0] }}
        variants={elementsVariants}
        variant="purple"
        left="0"
      />
      <GlowDot
        initial="hidden_scale_dot_blue"
        animate={
          state < 3
            ? "hidden_scale_dot_blue"
            : state === 3
            ? "show_scale_dot_blue"
            : "show_scale_dot_blue_plus"
        }
        custom={isSmall}
        exit={{ scale: [1, 0] }}
        variants={elementsVariants}
        variant="blue"
        right="0"
      />
    </AnimatePresence>
  );
};

export default DotsComponent;
