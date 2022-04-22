import { motion } from "framer-motion";
import { down, up, between } from "styled-breakpoints";
import styled from "styled-components";
import { Box } from "../../UI/Box";
import { Center } from "../../UI/Center";
import { Stack } from "../../UI/Stack";

export const CustomStack = styled(Stack)((props) => ({
  position: "relative",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  [down("md")(props)]: {
    transform: "rotate(90deg)",
  },
}));

export const Container = styled(Box)((props) => ({
  [down("md")(props)]: {
    transform: "rotate(270deg)",
    zIndex: 3,
  },
}));

export const CircleBox = styled(Center)((props) => ({
  position: "relative",
  zIndex: 2,
  [up("lg")(props)]: {
    width: "538px",
    "> svg": {
      width: "100%",
    },
  },
  [down("lg")(props)]: {
    width: "400px",
    "> svg": {
      width: "100%",
    },
  },
  [down("md")(props)]: {
    width: "300px",
    "> svg": {
      width: "100%",
    },
  },
  "&.purple-circle": {
    [down("md")(props)]: {
      top: "1.5rem",
    },
    [up("md")(props)]: {
      left: "2.5rem",
    },
  },
  "&.blue-circle": {
    [down("md")(props)]: {
      bottom: "1.5rem",
    },
    [up("md")(props)]: {
      right: "2.5rem",
    },
  },
  ...props,
}));

export const LogoBox = styled(Center)((props) => ({
  zIndex: 4,
  position: "absolute",
  width: "100%",
  top: "46%",
  "> svg": {
    width: "100%",
    maxWidth: "30px",
  },
  [down("md")(props)]: {
    transform: "rotate(270deg)",
  },
  ...props,
}));

export const GlobeVideo = styled(motion.video)((props) => ({
  position: "absolute",
  borderRadius: "100%",
  backgroundImage: "/background.png",
  [down("sm")(props)]: {
    width: "100%",
    maxWidth: "200px",
    transform: "rotate(270deg)",
  },
  [up("sm")(props)]: {
    width: "100%",
    maxWidth: "250px",
    transform: "rotate(270deg)",
  },
  [up("md")(props)]: {
    width: "100%",
    maxWidth: "350px",
  },
  [up("lg")(props)]: {
    width: "100%",
    maxWidth: "400px",
  },
  ...props,
}));

export const GlobeBackground = styled(motion.img)((props) => ({
  zIndex: 3,
  padding: 0,
  display: "block",
  margin: "0 auto",
  width: "100%",
  maxHeight: "100%",
  [down("sm")(props)]: {
    maxWidth: "80%",
  },
  [up("sm")(props)]: {
    maxWidth: "70%",
  },
  ...props,
}));

export const GlobeGradientLine = styled(motion.img)((props) => ({
  position: "absolute",
  [down("md")(props)]: {
    transform: "rotate(90deg)",
  },
  [down("md")(props)]: {
    maxWidth: "450px",
  },
  [between("md", "lg")(props)]: {
    maxWidth: "650px",
  },
  [up("lg")(props)]: {
    maxWidth: "750px",
  },
  ...props,
}));

export const Genes = styled(motion.img)((props) => ({
  position: "absolute",
  opacity: 0.4,
  [up("sm")(props)]: {
    maxwidth: "538px",
    width: "100%",
  },
  [down("md")(props)]: {
    padding: "2rem",
    width: "100%",
    maxWidth: "576px",
    transform: "rotate(90deg)",
  },
  ...props,
}));

export const Title = styled(motion.p).attrs((props) => ({
  className: props.className,
}))`
  font-weight: bold;
  &.yellowTitle {
    background: linear-gradient(315deg, #f7bc2d 0%, #ffee62 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% auto;
  }
  &.blueTitle {
    background: linear-gradient(315deg, #73c9ff 0%, #73c9ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% auto;
  }
  &.purpleTitle {
    background: linear-gradient(315deg, #ec4ef3 0%, #ec4ef3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% auto;
  }
  ${between("sm", "lg")} {
    padding-left: 5rem;
    padding-right: 5rem;
  }
  ${up("sm")} {
    font-size: 1.875rem;
  }
  ${down("sm")} {
    font-size: 1.5rem;
  }
`;

export const OverlayTextContainer = styled(motion.div).attrs((props) => ({
  className: props.className,
}))`
  top: 0;
  bottom: 0;
  z-index: 10;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  ${down("md")} {
    transform: rotate(270deg);
    width: 100%;
    right: 0;
    left: 0;
  }
  ${up("md")} {
    width: 50%;
  }
  &.supply {
    ${up("md")} {
      left: 2.45rem;
    }
  }
  &.demand {
    ${up("md")} {
      right: 2.45rem;
    }
  }
`;

export const Subtitle = styled(motion.p)((props) => ({
  color: "white",
  [up("md")(props)]: {
    fontSize: "1rem",
  },
  [down("md")(props)]: {
    fontSize: "0.875rem",
    margin: "0 3rem",
  },
  ...props,
}));

export const CircleContainer = styled(motion.div)`
  position: absolute;
  transition: all 1s ease;
`;

export const Img = styled(motion.img)`
  width: ${({ size }) => `${size}px`};
  transition: all 1s ease;
`;

export const CircleProduct = styled(motion.div)`
  height: 100%;
  width: 100%;
  transition: all 1s ease;
  transform: ${({ deg, translate }) =>
    `rotate(${deg}deg) translate(${translate}) rotate(-${deg}deg)`};
`;
