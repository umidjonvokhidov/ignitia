import * as React from "react";

const Eye: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="#99A0AE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M1.75 10S4.75 4 10 4s8.25 6 8.25 6-3 6-8.25 6S1.75 10 1.75 10Z"
    />
    <path
      stroke="#99A0AE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M10 12.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
    />
  </svg>
);

export default Eye;
