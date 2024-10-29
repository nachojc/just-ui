import styled from "styled-components";
import { ButtonProps } from "./types";

// export const StyledButton = styled.button<ButtonProps>`

// `;

export const StyledButton = styled.button<ButtonProps>`
  border: 1;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 10px;
  display: inline-block;
  color: ${(props)=> props.theme.palette.};
  &:hover {
    background-color: ${(props) => (!props.primary ? "#FF5655" : "#f4c4c4")};
    color: ${(props) => (!props.primary ? "#fff" : "#000")};
  }
`;
