import { css } from "@emotion/react";
import styled from "@emotion/styled";

const baseColorRed = css`
  color: red;
`;

const baseColorBlue = css`
  color: blue;
`;

const EmotionHeader = styled.h2`
  ${baseColorRed}
`;

const EmotionParagraph = styled.p`
  ${baseColorBlue}
`;

const EmotionButton = styled.button`
  ${baseColorBlue};
  ${(props) =>
    props.primary &&
    css`
      ${baseColorRed}
    `}
`;

export { EmotionButton, EmotionHeader, EmotionParagraph };
