import * as React from "react";

const Cross: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="white"
      d="M4.853 3.026 10 8.173l5.12-5.12a1.333 1.333 0 0 1 1.88 1.88L11.786 10 17 15.186a1.333 1.333 0 1 1-1.88 1.88L10 11.826l-5.134 5.133a1.333 1.333 0 1 1-1.88-1.88L8.213 10 3.026 4.813a1.333 1.333 0 0 1 1.88-1.88Z"
    />
  </svg>
);

export default Cross;
