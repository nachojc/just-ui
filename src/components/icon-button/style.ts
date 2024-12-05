// @ts-nocheck

import styled from "styled-components";
import type { IconButtonProps } from "./types";
import { StyledButton } from "../button/style";

export const StyledIconButton = styled<PropsWithChildren<IconButtonProps>>(StyledButton)`
  flex-direction: column;
  padding: ${(props) => `${props?.theme.size["xl"]} ${props?.theme.size["xxl"]}`}
    ${(props) => {
      switch (props.size) {
        case "small":
          return { padding: `${props?.theme.size["md"]} ${props?.theme.size["xl"]}` };
        case "large":
          return { width: "100%" };
      }
    }};
`;
