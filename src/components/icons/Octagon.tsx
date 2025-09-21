import * as React from "react";

const Octagon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d="M11.032 4h9.936L28 11.032v9.936L20.968 28H11.032L4 20.968V11.032L11.032 4Z"
    />
  </svg>
);

export default Octagon;
