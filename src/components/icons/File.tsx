import * as React from "react";

const File: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d="M17.2 4H8.8c-.636 0-1.247.253-1.697.703A2.4 2.4 0 0 0 6.4 6.4v19.2c0 .637.253 1.247.703 1.697A2.4 2.4 0 0 0 8.8 28h14.4c.637 0 1.247-.253 1.697-.703A2.4 2.4 0 0 0 25.6 25.6V12.4L17.2 4Z"
    />
    <path
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17.199 4v8.4h8.4"
    />
  </svg>
);

export default File;
