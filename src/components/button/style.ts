import styled from "styled-components";
import { ButtonProps } from "./types";

// export const StyledButton = styled.button<ButtonProps>`

// `;


export const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 10px;
  display: inline-block;
  color: ${(props) => (props.primary ? "#fff" : "#000")};
  background-color: ${(props) => (props.primary ? props.theme.palette.primary.main : props.theme.palette.secondary.main)};
  padding: ${(props) => (props.size === "small" ? "4px 8px" : props.size === "medium" ? "8px 16px" : "12px 24px")};

  margin: 8px;
  border-radius: ${props => props.theme.borderRadius};

  ${props => {
    switch (props.size) {
      case "small":
        return `
          color: ${props.theme.palette.secondary.contrastText};
          background-color: ${props.theme.palette.secondary.main};
        `;
      case "medium":
      default:
        return `
          color: ${props.theme.palette.primary.contrastText};
          background-color: ${props.theme.palette.primary.main};
        `;
    }
  }}
  &:hover {
    background-color: ${(props) => (!props.primary ? "#FF5655" : "#f4c4c4")};
    color: ${(props) => (!props.primary ? "#fff" : "#000")};
  }
`;
