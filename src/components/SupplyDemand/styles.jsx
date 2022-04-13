import { motion } from "framer-motion";
import { down, up, between } from "styled-breakpoints";
import styled, { keyframes } from "styled-components";
import { Center } from "../UI/Center";

export const ResponsiveCenter = styled(Center)((props) => ({
  [up("sm")(props)]: {
    flexDirection: "row",
  },
  [down("sm")(props)]: {
    flexDirection: "column",
  },
  ...props,
}));

export const CircleBox = styled(Center)((props) => ({
  position: "relative",
  zIndex: 2,
  [up("sm")(props)]: {
    width: "538px",
    "> svg": {
      width: "100%",
    },
  },
  [down("sm")(props)]: {
    padding: "2rem",
    width: "100%",
    "> svg": {
      maxWidth: "576px",
    },
  },
  "&.purple-circle": {
    [between("sm", "md")(props)]: {
      left: "1.5rem",
    },
    [up("md")(props)]: {
      left: "2.5rem",
    },
    [down("sm")(props)]: {
      top: "3.5rem",
    },
  },
  "&.blue-circle": {
    [between("sm", "md")(props)]: {
      right: "1.5rem",
    },
    [up("md")(props)]: {
      right: "2.5rem",
    },
    [down("sm")(props)]: {
      bottom: "3.5rem",
    },
  },
  ...props,
}));

export const LogoBox = styled(Center)((props) => ({
  zIndex: 3,
  position: "absolute",
  width: "100%",
  top: "48.5%",
  "> svg": {
    width: "100%",
    maxWidth: "30px",
  },
  ...props,
}));

export const GlobeVideo = styled(motion.video)((props) => ({
  position: "absolute",
  borderRadius: "100%",
  backgroundImage: "/background.png",
  [down("md")(props)]: {
    width: "100%",
    maxWidth: "350px",
  },
  [between("md", "lg")(props)]: {
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
  [down("md")(props)]: {
    width: "600px",
  },
  [between("md", "lg")(props)]: {
    width: "600px",
  },
  [up("lg")(props)]: {
    width: "700px",
  },
  ...props,
}));

export const GlobeGradientLine = styled(motion.img)((props) => ({
  position: "absolute",
  [down("sm")(props)]: {
    transform: "rotate(90deg)",
  },
  [down("md")(props)]: {
    maxWidth: "500px",
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

export const Subtitle = styled(motion.p)((props) => ({
  color: "white",
  [between("sm", "lg")(props)]: {
    paddingLeft: "5rem",
    paddingRight: "5rem",
  },
  [up("sm")(props)]: {
    fontSize: "1rem",
  },
  [down("sm")(props)]: {
    fontSize: "0.875rem",
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
