import React, { FC, forwardRef } from "react";
import { RadioProps } from "./types";
import { StyledRadioError, StyledRadioCheck, StyledRadioLabel, StyledRadioMain, StyledRadioContainer } from "./styles";

export const Radio: FC<RadioProps> = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { error, showError = true, disabled, label, className, asBlock, size = "large", ...restProps },
  ref,
) {
  const commonProps = { size, error, disabled };

  return (
    <StyledRadioContainer className={className}>
      <StyledRadioLabel {...commonProps}>
        {label}
        <StyledRadioMain type="radio" disabled={disabled} ref={ref} {...restProps} />
        <StyledRadioCheck {...commonProps}></StyledRadioCheck>
      </StyledRadioLabel>

      {showError && (error || asBlock) && <StyledRadioError {...commonProps}>{error}</StyledRadioError>}
    </StyledRadioContainer>
  );
});

export default Radio;
