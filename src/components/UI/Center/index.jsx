import { motion } from "framer-motion";
import styled from "styled-components";

export const Center = styled(motion.div)((props) => ({
  boxSizing: "border-box",
  display: "flex",
  "-webkit-box-align": "center",
  alignItems: "center",
  "-webkit-box-pack": "center",
  justifyContent: "center",
  ...props,
}));
