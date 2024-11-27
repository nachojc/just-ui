import { FC, SVGAttributes } from "react";

export const SvgMedicalServicesIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M11.075 17.925h1.875v-3h3V13.05h-3v-3h-1.875v3h-3v1.875h3zm-6.95 3.85q-.775 0-1.325-.55-.55-.55-.55-1.325V8.075q0-.775.55-1.325.55-.55 1.325-.55H8.15V4.225q0-.775.55-1.325.55-.55 1.325-.55h3.95q.775 0 1.325.55.55.55.55 1.325V6.2h4.025q.775 0 1.325.55.55.55.55 1.325V19.9q0 .775-.55 1.325-.55.55-1.325.55zm5.9-15.575h3.95V4.225h-3.95z" />
    </svg>
  );
};

export default SvgMedicalServicesIcon;
