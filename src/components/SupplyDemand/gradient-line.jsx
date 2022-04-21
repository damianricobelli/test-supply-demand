import React from "react";
import { GlobeGradientLine } from "./styles";

export const GradientLine = ({ state, elementsVariants }) => {
  return (
    <GlobeGradientLine
      initial="hidden"
      animate={state >= 3 ? "globe_gradient_line_show" : "hidden"}
      variants={elementsVariants}
      custom={state}
      exit={{
        scale: state < 3 ? 0 : state === 3 ? [1, 0] : [1.05, 1],
      }}
      transition={{ duration: 0.75 }}
      src="/globe-gradient-line.svg"
      alt="Globe gradient"
    />
  );
};

export default GradientLine;
