/* eslint-disable @next/next/no-img-element */
import { LargeCircle } from "./components/SupplyDemand/large-circle";
import { Box } from "./components/UI/Box";
import {
  CircleBox,
  GlobeBackground,
  GlobeGradientLine,
  GlobeVideo,
  LogoBox,
  ResponsiveCenter,
  CircleProduct,
  CircleContainer,
  Container,
  Img,
  Subtitle,
  Title,
  CustomStack,
} from "./components/SupplyDemand/styles";
import ParrotLogo from "./components/SupplyDemand/parrot-logo";
import { GlowDot } from "./components/SupplyDemand/glow-dot";
import {
  AnimatePresence,
  useElementScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useRef, useState } from "react";
import { GenesComponent } from "./components/SupplyDemand/genes";

import { useRect } from "./hooks/useRect";
import { elementsVariants } from "./components/SupplyDemand/animations";
import { useBreakpoint } from "styled-breakpoints/react-styled";
import { down } from "styled-breakpoints";

export default function Home() {
  const isSmall = useBreakpoint(down("md"));

  const [state, setState] = useState(1);
  const products = ["TV", "Movie", "Brand", "Game", "Sports", "Talent"];

  const supplyText = useRect();
  const demandText = useRect();

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
      <Box height="200vh" />
      <Box backgroundColor="black">
        <Box position="absolute" left="0">
          <button onClick={() => setState(1)}>Estado 1</button>
          <button onClick={() => setState(2)}>Estado 2</button>
          <button onClick={() => setState(3)}>Estado 3</button>
          <button onClick={() => setState(4)}>Estado 4</button>
          <button onClick={() => setState(5)}>Estado 5</button>
        </Box>
        <ResponsiveCenter height="500vh" width="auto" ref={containerRef}>
          <CustomStack>
            <Container>
              <AnimatePresence>
                <CircleBox
                  className="purple-circle"
                  initial="show"
                  animate={
                    state < 3
                      ? "show"
                      : {
                          x: isSmall ? 0 : -120,
                          y: isSmall ? -50 : 0,
                          scale: 0,
                        }
                  }
                  variants={elementsVariants}
                  exit={{ x: -150, scale: [1, 0] }}
                  transition={{ duration: 1 }}
                >
                  <AnimatePresence>
                    <GenesComponent
                      initial="hidden"
                      animate={state >= 2 ? "genes_show" : "hidden"}
                      exit={{ scale: [1, 0] }}
                      transition={{ duration: 1 }}
                      variants={elementsVariants}
                      type="supply"
                    />
                  </AnimatePresence>
                  <LargeCircle variant="purple" />
                  <Box
                    ref={supplyText.ref}
                    position="absolute"
                    textAlign="center"
                  >
                    <Title
                      className="yellowTitle"
                      animate={state >= 3 ? "hidden" : "show"}
                      exit={{ scale: [1, 0] }}
                      transition={{ duration: 0 }}
                      variants={elementsVariants}
                    >
                      SUPPLY
                    </Title>
                    <Subtitle
                      animate={state >= 2 ? { opacity: 0 } : "show"}
                      transition={{ duration: 0.4 }}
                      variants={elementsVariants}
                    >
                      100m+ metadata tags from all markets & platforms
                    </Subtitle>
                  </Box>
                </CircleBox>
              </AnimatePresence>
            </Container>
            <Container>
              <AnimatePresence>
                <CircleBox
                  className="blue-circle"
                  initial="show"
                  animate={
                    state < 3
                      ? "show"
                      : {
                          x: isSmall ? 0 : 120,
                          y: isSmall ? 50 : 0,
                          scale: 0,
                        }
                  }
                  variants={elementsVariants}
                  exit={{
                    x: 150,
                    scale: [1, 0],
                  }}
                  transition={{ duration: 1 }}
                >
                  <AnimatePresence>
                    <GenesComponent
                      initial="hidden"
                      animate={state === 2 ? "genes_show" : "hidden"}
                      exit={{ scale: [1, 0] }}
                      transition={{ duration: 1 }}
                      variants={elementsVariants}
                      type="demand"
                    />
                  </AnimatePresence>
                  <LargeCircle variant="blue" />
                  <Box
                    ref={demandText.ref}
                    position="absolute"
                    textAlign="center"
                  >
                    <Title
                      className="yellowTitle"
                      animate={state >= 3 ? "hidden" : "show"}
                      exit={{ scale: [1, 0] }}
                      transition={{ duration: 0 }}
                      variants={elementsVariants}
                    >
                      DEMAND
                    </Title>
                    <Subtitle
                      animate={state >= 2 ? { opacity: 0 } : "show"}
                      transition={{ duration: 0.4 }}
                      variants={elementsVariants}
                    >
                      Behavioral data from 2B+ consumers globally
                    </Subtitle>
                  </Box>
                </CircleBox>
              </AnimatePresence>
            </Container>
            {/* Logo */}
            <LogoBox>
              <ParrotLogo />
            </LogoBox>
            {/* Background + Video + Gradient line */}
            <ResponsiveCenter position="absolute">
              <GlobeBackground
                state={state}
                src="/background.png"
                alt="Globe background image"
              />
              <GlobeVideo
                animate={
                  state > 4
                    ? { scale: [1, 1.2], rotate: isSmall ? 270 : 0 }
                    : { scale: 1, rotate: isSmall ? 270 : 0 }
                }
                transition={{ duration: 1 }}
                playsInline={true}
                autoPlay={true}
                muted={true}
                loop={true}
              >
                <source src="/globe.mp4" type="video/mp4" />
              </GlobeVideo>
            </ResponsiveCenter>
            <GlobeGradientLine
              initial="hidden"
              animate={state >= 3 ? "globe_gradient_line_show" : "hidden"}
              variants={elementsVariants}
              custom={state}
              exit={{
                scale: state < 3 ? 0 : state === 3 ? [1, 0] : [1.05, 1],
              }}
              transition={{ duration: 1 }}
              src="/globe-gradient-line.svg"
              alt="Globe gradient"
            />
            {/* Dots */}
            <AnimatePresence>
              <GlowDot
                initial="hidden_scale_dot_purple"
                animate={
                  state < 3
                    ? "hidden_scale_dot_purple"
                    : state === 3
                    ? "show_scale_dot_purple"
                    : "show_scale_dot_purple_plus"
                }
                custom={isSmall}
                exit={{ scale: [1, 0] }}
                variants={elementsVariants}
                variant="purple"
                left="0"
              />
              <GlowDot
                initial="hidden_scale_dot_blue"
                animate={
                  state < 3
                    ? "hidden_scale_dot_blue"
                    : state === 3
                    ? "show_scale_dot_blue"
                    : "show_scale_dot_blue_plus"
                }
                custom={isSmall}
                exit={{ scale: [1, 0] }}
                variants={elementsVariants}
                variant="blue"
                right="0"
              />
            </AnimatePresence>
            {/* Circle Products */}
            <AnimatePresence>
              <ResponsiveCenter
                position="absolute"
                initial="hidden"
                animate={state >= 3 && state !== 5 ? "show" : "hidden"}
                exit={{ scale: [1, 0] }}
                transition={{ duration: 1 }}
                variants={elementsVariants}
              >
                {products.map((product, index) => {
                  const deg = (360 / products.length) * index;
                  const calculateBase =
                    100 * (isSmall ? (state > 3 ? 0.4 : 0.7) : 1);
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
              </ResponsiveCenter>
            </AnimatePresence>
            <AnimatePresence>
              <ResponsiveCenter
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
                {products.map((product, index) => {
                  const deg = (360 / products.length) * index;
                  const width = state > 4 ? 100 : 70;
                  const size =
                    products.length > 12
                      ? width - [(products.length - 12) * 4]
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
                        <Img size={size} src="/solution.svg" label={product} />
                      </CircleProduct>
                    </CircleContainer>
                  );
                })}
              </ResponsiveCenter>
            </AnimatePresence>
          </CustomStack>
          {/* Text animated */}
          <AnimatePresence>
            <Box
              position="absolute"
              zIndex="3"
              textAlign="center"
              width={supplyText.rect.width}
              height={supplyText.rect.height}
              top={supplyText.rect.top}
              bottom={supplyText.rect.bottom}
              left={isSmall ? supplyText.rect.left + 8 : supplyText.rect.left}
              right={supplyText.rect.right}
            >
              <Title
                initial="without_opacity"
                className="purpleTitle"
                animate={
                  state < 3
                    ? "without_opacity"
                    : state === 3
                    ? "text_purple_translate"
                    : "text_purple_translate_plus"
                }
                variants={elementsVariants}
                custom={isSmall}
              >
                SUPPLY
              </Title>
            </Box>
            <Box
              position="absolute"
              zIndex="3"
              textAlign="center"
              width={demandText.rect.width}
              height={demandText.rect.height}
              top={demandText.rect.top}
              bottom={demandText.rect.bottom}
              left={isSmall ? demandText.rect.left + 8 : demandText.rect.left}
              right={demandText.rect.right}
            >
              <Title
                initial="without_opacity"
                className="blueTitle"
                animate={
                  state < 3
                    ? "without_opacity"
                    : state === 3
                    ? "text_blue_translate"
                    : "text_blue_translate_plus"
                }
                variants={elementsVariants}
                custom={isSmall}
              >
                DEMAND
              </Title>
            </Box>
          </AnimatePresence>
        </ResponsiveCenter>
      </Box>
      <Box height="200vh" />
    </>
  );
}
