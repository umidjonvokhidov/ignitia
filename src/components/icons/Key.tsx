import * as React from "react";

const Key: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d="m20.2 10.6 4.2-4.2m2.4-2.4-2.4 2.4-2.4 2.4ZM15.268 15.532a8.001 8.001 0 1 1-11.28 11.28 8.001 8.001 0 0 1 11.28-11.28Zm0 0L20.2 10.6m0 0 3.6 3.6L28 10l-3.6-3.6L20.2 10.6Z"
    />
  </svg>
);

export default Key;
