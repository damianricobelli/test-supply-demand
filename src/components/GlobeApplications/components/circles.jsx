import React from "react";
import { CircleBox, Container, Subtitle, Title } from "../styles";
import { Box } from "../../UI/Box";
import { AnimatePresence } from "framer-motion";
import { GenesComponent } from "./genes";
import { LargeCircle } from "./large-circle";

const texts = {
  supply: {
    title: "SUPPLY",
    subtitle: "100m+ metadata tags from all markets & platforms",
    className: "purple-circle",
    type: "supply",
    variant: "purple",
    x: -120,
    y: -50,
    exit: -150,
  },
  demand: {
    title: "DEMAND",
    subtitle: "Behavioral data from 2B+ consumers globally",
    className: "blue-circle",
    type: "demand",
    variant: "blue",
    x: 120,
    y: 50,
    exit: 150,
  },
};

export const CircleComponent = ({ state, elementsVariants, isSmall, type }) => {
  return (
    <Container>
      <AnimatePresence>
        <CircleBox
          className={texts[type].className}
          initial="show"
          animate={
            state < 3
              ? "show"
              : {
                  x: isSmall ? 0 : texts[type].x,
                  y: isSmall ? texts[type].y : 0,
                  scale: 0,
                }
          }
          variants={elementsVariants}
          exit={{
            x: texts[type].exit,
            scale: [1, 0],
          }}
          transition={{ duration: 0.75 }}
        >
          <AnimatePresence>
            <GenesComponent
              initial="hidden"
              animate={state === 2 ? "genes_show" : "hidden"}
              exit={{ scale: [1, 0] }}
              transition={{ duration: 0.75 }}
              variants={elementsVariants}
              type={texts[type].type}
            />
          </AnimatePresence>
          <LargeCircle variant={texts[type].variant} />
          <Box position="absolute" textAlign="center">
            <Title
              className="yellowTitle"
              animate={state >= 3 ? "hidden" : "show"}
              exit={{ scale: [1, 0] }}
              transition={{ duration: 0 }}
              variants={elementsVariants}
            >
              {texts[type].title}
            </Title>
            <Subtitle
              animate={state >= 2 ? { opacity: 0 } : "show"}
              transition={{ duration: 0.75 }}
              variants={elementsVariants}
            >
              {texts[type].subtitle}
            </Subtitle>
          </Box>
        </CircleBox>
      </AnimatePresence>
    </Container>
  );
};

export default CircleComponent;
