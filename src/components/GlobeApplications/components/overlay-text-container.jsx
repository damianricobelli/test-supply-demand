import React from "react";
import { OverlayTextContainer, Subtitle, Title } from "../styles";
import { Box } from "../../UI/Box";

export const OverlayTextContainerComponent = ({
  state,
  elementsVariants,
  isSmall,
  title,
}) => {
  let config = {
    initial: "without_opacity",
    className: "blueTitle",
    animate:
      state < 3
        ? "without_opacity"
        : state === 3
        ? "text_blue_translate"
        : "text_blue_translate_plus",
  };
  if (title === "SUPPLY") {
    config = {
      initial: "without_opacity",
      className: "purpleTitle",
      animate:
        state < 3
          ? "without_opacity"
          : state === 3
          ? "text_purple_translate"
          : "text_purple_translate_plus",
    };
  }
  return (
    <OverlayTextContainer className={title.toLowerCase()}>
      <Box textAlign="center">
        <Title {...config} variants={elementsVariants} custom={isSmall}>
          {title}
        </Title>
        <Subtitle style={{ opacity: 0 }}>Subtitle text</Subtitle>
      </Box>
    </OverlayTextContainer>
  );
};

export default OverlayTextContainerComponent;
