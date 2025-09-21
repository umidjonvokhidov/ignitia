import * as React from "react";

const Mail: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6.4 6.4h19.2c1.32 0 2.4 1.08 2.4 2.4v14.4c0 1.32-1.08 2.4-2.4 2.4H6.4c-1.32 0-2.4-1.08-2.4-2.4V8.8c0-1.32 1.08-2.4 2.4-2.4Z"
    />
    <path
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m28 8.801-12 8.4-12-8.4"
    />
  </svg>
);

export default Mail;
