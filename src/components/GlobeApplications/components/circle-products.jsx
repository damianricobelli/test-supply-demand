import { AnimatePresence } from "framer-motion";
import React from "react";
import { Center } from "../../UI/Center";
import { CircleContainer, CircleProduct, Img } from "../styles";

export const CircleProducts = ({
  state,
  isSmall,
  elementsVariants,
  products,
}) => {
  return (
    <AnimatePresence>
      <Center
        position="absolute"
        initial="hidden"
        animate={state >= 3 && state !== 5 ? "show" : "hidden"}
        exit={{ scale: [1, 0] }}
        transition={{ duration: 0.75 }}
        variants={elementsVariants}
      >
        {products.map((product, index) => {
          const deg = (360 / products.length) * index;
          const calculateBase = 100 * (isSmall ? (state > 3 ? 0.4 : 0.7) : 1);
          const size =
            products.length > 12
              ? calculateBase - [(products.length - 12) * 4]
              : calculateBase;
          return (
            <CircleContainer key={index}>
              <CircleProduct
                deg={deg}
                translate={
                  state > 3
                    ? isSmall
                      ? "200px"
                      : "315px"
                    : isSmall
                    ? "130px"
                    : "230px"
                }
              >
                <Img size={size} src="/product.svg" label={product} />
              </CircleProduct>
            </CircleContainer>
          );
        })}
      </Center>
    </AnimatePresence>
  );
};

export default CircleProducts;
