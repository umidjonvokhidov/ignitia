import * as React from "react";

const Bars: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="white"
      d="M1 3a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM1 8a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM15 13a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1Z"
    />
  </svg>
);

export default Bars;
