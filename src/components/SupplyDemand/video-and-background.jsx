import React from "react";
import { Center } from "../UI/Center";
import { GlobeBackground, GlobeVideo } from "./styles";

export const VideoAndBackground = ({ state, isSmall }) => {
  return (
    <Center position="absolute">
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
        transition={{ duration: 0.75 }}
        playsInline={true}
        autoPlay={true}
        muted={true}
        loop={true}
      >
        <source src="/globe.mp4" type="video/mp4" />
      </GlobeVideo>
    </Center>
  );
};

export default VideoAndBackground;
