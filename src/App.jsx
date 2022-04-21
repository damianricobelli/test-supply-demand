/* eslint-disable @next/next/no-img-element */
import { Box } from "./components/UI/Box";
import { Center } from "./components/UI/Center";
import { LogoBox, CustomStack } from "./components/SupplyDemand/styles";
import ParrotLogo from "./components/SupplyDemand/parrot-logo";
import { useTransform, useViewportScroll } from "framer-motion";
import { useRef, useState } from "react";

import { elementsVariants } from "./components/SupplyDemand/animations";
import { useBreakpoint } from "styled-breakpoints/react-styled";
import { down } from "styled-breakpoints";
import { default as OverlayTextContainer } from "./components/SupplyDemand/overlay-text-container";
import { default as CircleComponent } from "./components/SupplyDemand/circles";
import { default as VideoAndBackground } from "./components/SupplyDemand/video-and-background";
import { default as CircleProducts } from "./components/SupplyDemand/circle-products";
import { default as CircleSolutions } from "./components/SupplyDemand/circle-solutions";
import { default as DotsComponent } from "./components/SupplyDemand/dots";
import { default as GradientLine } from "./components/SupplyDemand/gradient-line";

export default function Home() {
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
