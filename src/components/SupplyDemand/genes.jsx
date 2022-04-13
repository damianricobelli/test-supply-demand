import { Genes } from "./styles";

const images = {
  supply: {
    src: "/supply-genes.svg",
    alt: "Supply genes",
  },
  demand: {
    src: "/demand-genes.svg",
    alt: "Demand genes",
  },
};

export const GenesComponent = ({ type, ...props }) => {
  return <Genes {...props} src={images[type].src} alt={images[type].alt} />;
};
