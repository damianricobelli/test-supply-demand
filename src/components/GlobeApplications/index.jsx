import { useRef, useState } from "react";

//UI
import { Box } from "../UI/Box";
import { Center } from "../UI/Center";

//Styles
import { LogoBox, CustomStack } from "./styles";
import { useBreakpoint } from "styled-breakpoints/react-styled";
import { down } from "styled-breakpoints";

//Animations
import { useTransform, useViewportScroll } from "framer-motion";
import { elementsVariants } from "./animations";

//Components
import {
  ParrotLogo,
  OverlayTextContainer,
  CircleComponent,
  VideoAndBackground,
  CircleProducts,
  CircleSolutions,
  DotsComponent,
  GradientLine,
} from "./components";

export default function GlobeApplications() {
  const isSmall = useBreakpoint(down("md"));

  const [state, setState] = useState(1);
  const products = ["TV", "Movie", "Brand", "Game", "Sports", "Talent"];

  const containerRef = useRef(null);

  const { scrollY } = useViewportScroll();

  const frame = useTransform(
    scrollY,
    [0, 300, 600, 900, 1200, 1500],
    ["one", "two", "three", "four", "five", "six"]
  );

  console.log(frame.get());

  return (
    <>
      <Box backgroundColor="black">
        <Box position="absolute" left="0">
          <button onClick={() => setState(1)}>Estado 1</button>
          <button onClick={() => setState(2)}>Estado 2</button>
          <button onClick={() => setState(3)}>Estado 3</button>
          <button onClick={() => setState(4)}>Estado 4</button>
          <button onClick={() => setState(5)}>Estado 5</button>
        </Box>
        <Center height="100vh" width="auto" ref={containerRef}>
          <CustomStack>
            {/* Overlay Texts */}
            <OverlayTextContainer
              isSmall={isSmall}
              elementsVariants={elementsVariants}
              state={state}
              title="SUPPLY"
            />
            <OverlayTextContainer
              isSmall={isSmall}
              elementsVariants={elementsVariants}
              state={state}
              title="DEMAND"
            />
            {/* Circles */}
            <CircleComponent
              isSmall={isSmall}
              elementsVariants={elementsVariants}
              state={state}
              type="supply"
            />
            <CircleComponent
              isSmall={isSmall}
              elementsVariants={elementsVariants}
              state={state}
              type="demand"
            />
            {/* Logo */}
            <LogoBox>
              <ParrotLogo />
            </LogoBox>
            {/* Background + Video */}
            <VideoAndBackground isSmall={isSmall} state={state} />
            {/* Gradient line */}
            <GradientLine elementsVariants={elementsVariants} state={state} />
            {/* Dots */}
            <DotsComponent
              isSmall={isSmall}
              elementsVariants={elementsVariants}
              state={state}
            />
            {/* Circle Products */}
            <CircleProducts
              isSmall={isSmall}
              elementsVariants={elementsVariants}
              state={state}
              products={products}
            />
            <CircleSolutions
              isSmall={isSmall}
              elementsVariants={elementsVariants}
              state={state}
              solutions={products}
            />
          </CustomStack>
        </Center>
      </Box>
    </>
  );
}
