import { Genes } from "../styles";
import { useBreakpoint } from "styled-breakpoints/react-styled";
import { down } from "styled-breakpoints";

const images = {
  supply: {
    src: {
      portrait: "/supply-genes-portrait.svg",
      normal: "/supply-genes.svg",
    },
    alt: "Supply genes",
  },
  demand: {
    src: {
      portrait: "/demand-genes-portrait.svg",
      normal: "/demand-genes.svg",
    },
    alt: "Demand genes",
  },
};

export const GenesComponent = ({ type, ...props }) => {
  const isSmall = useBreakpoint(down("md"));
  return (
    <Genes
      {...props}
      src={isSmall ? images[type].src.portrait : images[type].src.normal}
      alt={images[type].alt}
    />
  );
};
