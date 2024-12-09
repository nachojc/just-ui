import { cloneElement, forwardRef, isValidElement, useEffect, useRef, useState } from "react";
import type { InputProps } from "./types";
import {
  StyledInput,
  StyledInputContainer,
  StyledInputError,
  StyledInputLabel,
  StyledInputLeft,
  StyledInputMain,
  StyledInputRight,
} from "./style";

export const Input = forwardRef<HTMLInputElement, InputProps>(function Button(
  { asBlock, label, left, right, error, disabled, className, size, ...restProps },
  ref,
) {
  const divRef = useRef<HTMLDivElement>(null);
  const [inputRef, setInputRef] = useState<HTMLInputElement | null>(null);
  const leftElem = isValidElement(left) ? cloneElement(left, { className: "left" }) : left;
  const rightElem = isValidElement(right) ? cloneElement(right, { className: "right" }) : right;
  const handleOnFocus = () => {
    inputRef?.focus();
  };
  useEffect(() => {
    if (divRef.current) {
      const input = divRef.current.getElementsByTagName("input");
      if (input.length > 0) setInputRef(input[0]);
    }
  }, []);
  const commonProps = { size, error, disabled, onClick: handleOnFocus };
  return (
    <StyledInput className={className}>
      {(label || asBlock) && <StyledInputLabel {...commonProps}>{label}</StyledInputLabel>}
      <StyledInputContainer ref={divRef} {...commonProps}>
        {leftElem && <StyledInputLeft {...commonProps}>{leftElem}</StyledInputLeft>}
        <StyledInputMain ref={ref} {...commonProps} {...restProps} />
        {rightElem && <StyledInputRight {...commonProps}>{rightElem}</StyledInputRight>}
      </StyledInputContainer>
      {(error || asBlock) && <StyledInputError {...commonProps}>{error}</StyledInputError>}
    </StyledInput>
  );
});

export default Input;
