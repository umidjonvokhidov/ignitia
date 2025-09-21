import * as React from "react";

const Monitor: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      stroke="#717784"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M5.6 13.4h4.8M8 11v2.4M3.2 2.6h9.6c.663 0 1.2.537 1.2 1.2v6c0 .663-.537 1.2-1.2 1.2H3.2c-.663 0-1.2-.537-1.2-1.2v-6c0-.663.537-1.2 1.2-1.2Z"
    />
  </svg>
);

export default Monitor;
