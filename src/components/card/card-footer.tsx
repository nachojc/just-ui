import { forwardRef } from "react";
import type { CardFooterProps } from "./types";
import { StyledCardFooter } from "./style";

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(function CardTitle(
  { children, align = "center", ...restProps },
  ref,
) {
  return (
    !!children && (
      <StyledCardFooter ref={ref} align={align} {...restProps}>
        {children}
      </StyledCardFooter>
    )
  );
});

export default CardFooter;
