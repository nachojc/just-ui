import React, { FC } from "react";
import { RadioGroupProps } from "./types";
import { StyledRadioGroupContainer, StyledRadioGroupError, StyledRadioGroupLabel } from "./styles";
import { Radio } from "../radio";

export const RadioGroup: FC<RadioGroupProps> = function RadioGroup({
  values,
  error,
  disabled,
  label,
  className,
  asBlock,
  size = "large",
  ...restProps
}) {
  const commonProps = { size, error, disabled };
  return (
    <StyledRadioGroupContainer className={className} size={size}>
      <StyledRadioGroupLabel {...commonProps}>{label}</StyledRadioGroupLabel>
      {values.map((element) => (
        <Radio key={`rgrp-${element.label}`} {...element} {...{ ...commonProps, ...restProps }} showError={false} />
      ))}
      {(error || asBlock) && <StyledRadioGroupError {...commonProps}>{error}</StyledRadioGroupError>}
    </StyledRadioGroupContainer>
  );
};

export default RadioGroup;
