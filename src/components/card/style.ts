// @ts-nocheck

import styled from "styled-components";
import type { CardProps, CardTitleProps, CardFooterProps } from "./types";

export const StyledCard = styled.div<CardProps>`
  ${(props) => props?.theme.components.card.default},
  ${(props) => !!props?.border && `${props.border}` !== "false" && props?.theme.components.card.border},
`;

export const StyledCardTitle = styled.div<CardTitleProps>`
  ${(props) => props?.theme.components.card.title},
`;

export const StyledCardFooter = styled.div<CardFooterProps>`
  ${(props) => props?.theme.components.card.footer},
  border-top: ${(props) => props.align};
`;
