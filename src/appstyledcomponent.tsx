import styled, { css } from "styled-components";

const baseColorRed = css`
  color: red;
`;

const baseColorBlue = css`
  color: blue;
`;

const StyledComponentHeader = styled.h2`
  ${baseColorRed}
`;
const StyledComponentParagraph = styled.p`
  ${baseColorBlue}
  font-weight: bold;
`;
const StyledComponentButton = styled.button`
  ${baseColorBlue}
  ${(props) =>
    props.primary &&
    css`
      ${baseColorRed}
    `};
`;

export {
  StyledComponentHeader,
  StyledComponentParagraph,
  StyledComponentButton,
};
