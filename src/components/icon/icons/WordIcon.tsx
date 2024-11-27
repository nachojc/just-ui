import { FC, SVGAttributes } from "react";

export const SvgWordIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M8 2c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8zm3.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm2.5-3v1h1.5V11H19v2h-1.5V7h3v1.5H19zm-10 1h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"
      />
      <path fill="currentColor" d="M7 5h14v10H7z" />
      <path
        fill="#FFF"
        d="M14.03 9.34l1.2 3.94h1.37l1.31-6.56h-1.38l-.78 3.88-1.11-3.75H13.5l-1.19 3.77-.78-3.9h-1.44l1.31 6.56h1.37"
      />
    </svg>
  );
};

export default SvgWordIcon;
