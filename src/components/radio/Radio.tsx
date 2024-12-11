import React, { FC, forwardRef } from "react";
import { RadioProps } from "./types";
import { StyledRadioError, StyledRadioCheck, StyledRadioLabel, StyledRadioMain } from "./styles";

export const Radio: FC<RadioProps> = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { error, disabled, label, className, asBlock, size = "large", ...restProps },
  ref,
) {
  const commonProps = { size, error, disabled };
  return (
    <div className={className}>
      <StyledRadioLabel {...commonProps}>
        {label}
        <StyledRadioMain type="radio" disabled={disabled} ref={ref} {...restProps} />
        <StyledRadioCheck {...commonProps}></StyledRadioCheck>
      </StyledRadioLabel>

      {(error || asBlock) && <StyledRadioError {...commonProps}>{error}</StyledRadioError>}
    </div>
  );
});

export default Radio;
