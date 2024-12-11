import React, { FC, forwardRef } from "react";
import { CheckboxProps } from "./types";
import { StyledCheckboxError, StyledCheckboxCheck, StyledCheckboxLabel, StyledCheckboxMain } from "./styles";

export const Checkbox: FC<CheckboxProps> = forwardRef<HTMLInputElement, CheckboxProps>(function CheckBox(
  { error, disabled, label, className, asBlock, size = "large", ...restProps },
  ref,
) {
  const commonProps = { size, error, disabled };
  return (
    <div className={className}>
      <StyledCheckboxLabel {...commonProps}>
        {label}
        <StyledCheckboxMain type="checkbox" disabled={disabled} ref={ref} {...restProps} />
        <StyledCheckboxCheck {...commonProps}></StyledCheckboxCheck>
      </StyledCheckboxLabel>

      {(error || asBlock) && <StyledCheckboxError {...commonProps}>{error}</StyledCheckboxError>}
    </div>
  );
});

export default Checkbox;
