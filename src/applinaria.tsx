import { css } from "@linaria/core";
import { styled } from "@linaria/react";

const baseColorRed = css`
  color: red;
`;

const baseColorBlue = css`
  color: blue;
`;

const LinariaHeader = styled.h2`
  ${baseColorRed}
`;

const LinariaParagraph = styled.p`
  ${baseColorBlue}
`;

const LinariaButton = styled.button`
  ${baseColorBlue};
  ${(props) =>
    props.primary &&
    css`
      ${baseColorRed}
    `}
`;

export { LinariaButton, LinariaHeader, LinariaParagraph };
