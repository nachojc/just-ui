import { forwardRef, useEffect, useRef, useState } from "react";
import type { TextAreaProps } from "./types";
import {
  StyledTextArea,
  StyledTextAreaContainer,
  StyledTextAreaError,
  StyledTextAreaLabel,
  StyledTextAreaMain,
} from "./style";

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  { asBlock, label, error, disabled, className, size, ...restProps },
  ref,
) {
  const divRef = useRef<HTMLDivElement>(null);
  const [TextAreaRef, setTextAreaRef] = useState<HTMLTextAreaElement | null>(null);

  const handleOnFocus = () => {
    TextAreaRef?.focus();
  };
  useEffect(() => {
    if (divRef.current) {
      const textArea = divRef.current.getElementsByTagName("textarea");
      if (TextArea.length > 0) setTextAreaRef(textArea[0]);
    }
  }, []);
  const commonProps = { size, error, disabled, onClick: handleOnFocus };
  return (
    <StyledTextArea className={className}>
      {(label || asBlock) && (
        <StyledTextAreaLabel data-testid="TextArea-label" {...commonProps}>
          {label}
        </StyledTextAreaLabel>
      )}
      <StyledTextAreaContainer ref={divRef} {...commonProps}>
        <StyledTextAreaMain ref={ref} {...commonProps} {...restProps} />
      </StyledTextAreaContainer>
      {(error || asBlock) && <StyledTextAreaError {...commonProps}>{error}</StyledTextAreaError>}
    </StyledTextArea>
  );
});

export default TextArea;
