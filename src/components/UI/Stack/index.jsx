import styled from "styled-components";

export const Stack = styled.div((props) => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: props.direction,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  ...props,
}));
