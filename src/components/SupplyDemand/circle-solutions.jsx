import { AnimatePresence } from "framer-motion";
import React from "react";
import { Center } from "../UI/Center";
import { CircleContainer, CircleProduct, Img } from "./styles";

export const CircleSolutions = ({
  state,
  isSmall,
  elementsVariants,
  solutions,
}) => {
  return (
    <AnimatePresence>
      <Center
        position="absolute"
        initial="hidden"
        animate={
          state === 4
            ? "show"
            : state === 5
            ? isSmall
              ? "hidden"
              : "show"
            : "hidden"
        }
        exit={{ scale: [1, 0] }}
        transition={{ duration: 1 }}
        variants={elementsVariants}
      >
        {solutions.map((solution, index) => {
          const deg = (360 / solutions.length) * index;
          const width = state > 4 ? 100 : 70;
          const size =
            solutions.length > 12
              ? width - [(solutions.length - 12) * 4]
              : width;
          return (
            <CircleContainer key={index}>
              <CircleProduct
                deg={deg}
                translate={
                  state > 4
                    ? isSmall
                      ? "200px"
                      : "260px"
                    : isSmall
                    ? "130px"
                    : "205px"
                }
              >
                <Img size={size} src="/solution.svg" label={solution} />
              </CircleProduct>
            </CircleContainer>
          );
        })}
      </Center>
    </AnimatePresence>
  );
};

export default CircleSolutions;
