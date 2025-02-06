import { css } from "@linaria/core";
import { styled } from "@linaria/react";

const baseColorRed = css`
  color: red;
`;

const baseColorBlue = css`
  color: blue;
`;

const LinariaHeader = styled.h2`
  color: red;
`;

const LinariaParagraph = styled.p`
  color: blue;
`;

const LinariaButton = styled.button`
  color: ${(props) => (props.primary ? "red" : "blue")};
`;

export { LinariaButton, LinariaHeader, LinariaParagraph };
