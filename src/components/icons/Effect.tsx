import * as React from "react";

const Effect: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1"
    height="154"
    fill="none"
    viewBox="0 0 1 154"
    {...props}
  >
    <path
      fill="url(#paint0_linear_8170_26900)"
      d="M.5 154c-.138 0-.25-.112-.25-.25L.001.5C0 .224.224 0 .5 0s.5.224.5.5l-.25 153.25c0 .138-.112.25-.25.25Z"
    />
    <defs>
      <linearGradient
        id="paint0_linear_8170_26900"
        x1="1"
        x2="-1"
        y1="154"
        y2="153.987"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0B0C0C" />
        <stop offset="1" stopColor="#B8DFF9" />
      </linearGradient>
    </defs>
  </svg>
);

export default Effect;
