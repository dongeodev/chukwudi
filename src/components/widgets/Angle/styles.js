import styled, { css, keyframes } from "styled-components";

export const Svg = styled.svg`
  ${(props) =>
    props.rote &&
    css`
      transform: rotate(-90deg);
    `}

  ${(props) =>
    props.open &&
    css`
      ${GoRote()}
    `}
`;
const GoRoteKeyframes = keyframes`
from{
  transform: rotateZ(0);
  
}
to{
  transform: rotateZ(180deg);
  
}
`;
export const GoRote = ({
  time = "0.5s",
  type = "ease",
  delay = "",
  fill = "forwards",
} = {}) =>
  css`
    animation: ${time} ${GoRoteKeyframes} ${type} ${delay} ${fill};
  `;
