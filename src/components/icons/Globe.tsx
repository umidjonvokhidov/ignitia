import * as React from "react";

const Globe: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d="M28 16c0 6.627-5.373 12-12 12m12-12c0-6.627-5.373-12-12-12m12 12H4m12 12C9.373 28 4 22.627 4 16m12 12c3.002-3.286 4.707-7.55 4.8-12-.093-4.45-1.798-8.714-4.8-12m0 24c-3.002-3.286-4.707-7.55-4.8-12 .093-4.45 1.798-8.714 4.8-12M4 16C4 9.373 9.373 4 16 4"
    />
  </svg>
);

export default Globe;
