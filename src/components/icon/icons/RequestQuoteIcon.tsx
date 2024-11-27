import { FC, SVGAttributes } from "react";

export const SvgRequestQuoteIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M15 18v-1.486h-3.675c.25-.18.374-.538.374-1.075v-1.02h2.038v-1.386h-2.038V10.84c0-.236.129-.354.387-.354h.416c.259 0 .388.118.388.354v1.033h2.053v-1.316C14.943 9.519 14.335 9 13.12 9h-1.651c-1.215 0-1.823.519-1.823 1.557v2.476H9v1.387h.646v.948c0 .434-.043.74-.13.92-.076.179-.248.283-.516.311V18h6z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2h8l6 6v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm12 6.83L13.17 4H6v16h12V8.83z"
      />
    </svg>
  );
};

export default SvgRequestQuoteIcon;
