import { forwardRef } from "react";
import type { CardProps } from "./types";
import { StyledCard } from "./style";

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card({ children, ...props }, ref) {
  return (
    <StyledCard ref={ref} {...props}>
      <div>{children}</div>
    </StyledCard>
  );
});

export default Card;
