import * as React from "react";

const Design: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    fill="none"
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      fill="white"
      fillRule="evenodd"
      d="M18 40.666H32V53.999L18 40.666Z"
      clipRule="evenodd"
    />
    <path fill="white" d="M32 27.334H18v13.333h28L32 27.334Z" />
    <path fill="white" d="M18 14 32 27.333H46V14H18Z" />
  </svg>
);

export default Design;
