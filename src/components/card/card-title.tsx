import { forwardRef, isValidElement } from "react";
import type { CardTitleProps } from "./types";
import { StyledCardTitle } from "./style";

export const CardTitle = forwardRef<HTMLDivElement, CardTitleProps>(function CardTitle(
  { options: Options, children, ...restProps },
  ref,
) {
  return (
    !!(children || Options) && (
      <StyledCardTitle ref={ref} {...restProps}>
        <div>{children}</div>
        {Options && isValidElement(Options) && <div>{Options}</div>}
      </StyledCardTitle>
    )
  );
});

export default CardTitle;
