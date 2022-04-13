import { motion } from "framer-motion";
import { memo } from "react";
import styled from "styled-components";

const UnstyledGlowDot = ({ variant = "purple", ...props }) => {
  const fill = variant === "purple" ? "#ec4ef3" : "#73c9ff";
  return (
    <motion.div {...props}>
      <svg
        width="248"
        height="248"
        clipRule="evenodd"
        fillRule="evenodd"
        viewBox="0 0 248 248"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle transform="matrix(1 0 0 1 9.5 9.5)" fill={fill} r="4" />
        <g fill="none" stroke={fill} transform="matrix(1 0 0 1 9.5 9.5)">
          <circle r="4.5" />
          <circle r="6.5" strokeOpacity=".3" />
          <circle r="8.5" strokeOpacity=".1" />
        </g>
      </svg>
    </motion.div>
  );
};

export const StyledGlowDot = styled(UnstyledGlowDot)(
  ({ variant = "purple", ...rest }) => ({
    position: "absolute",
    borderRadius: "100%",
    width: "9px",
    height: "9px",
    overflow: "visible",
    boxShadow:
      variant === "purple"
        ? "0px 0px 10px 0px rgba(236, 78, 243, 0.7),0px 0px 100px 50px rgba(154, 42, 126, 0.9)"
        : "0px 0px 10px 0px #73c9ff, 0px 0px 100px 50px rgba(0, 106, 169, 0.9)",
    svg: {
      position: "relative",
      top: "calc(50% - 9.5px)",
      left: "calc(50% - 9.5px)",
    },
    ...rest,
  })
);

export const GlowDot = memo(StyledGlowDot);
