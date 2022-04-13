import styled from "styled-components";

export const Box = styled.div((props) => ({
  boxSizing: "border-box",
  ...props,
}));
