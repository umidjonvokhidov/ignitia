import * as React from "react";

const Lock: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d="M24.399 14.801H7.599c-1.325 0-2.4 1.074-2.4 2.4v8.4c0 1.325 1.075 2.4 2.4 2.4h16.8c1.325 0 2.4-1.075 2.4-2.4v-8.4c0-1.326-1.075-2.4-2.4-2.4Z"
    />
    <path
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 14.8V10a6 6 0 1 1 12 0v4.8"
    />
  </svg>
);

export default Lock;
