import * as React from "react";

const Pocket: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d="M6.4 5.199h19.2c.637 0 1.247.253 1.697.703.45.45.703 1.06.703 1.697v7.2c0 2.783-1.264 5.835-3.515 8.085C22.235 25.535 19.183 26.8 16 26.8a13.6 13.6 0 0 1-4.592-1.914A13.6 13.6 0 0 1 7.515 22.884C5.264 20.634 4 17.582 4 14.799v-7.2c0-.637.253-1.247.703-1.697A2.4 2.4 0 0 1 6.4 5.199Z"
    />
    <path
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m11.199 13.6 4.8 4.8 4.8-4.8"
    />
  </svg>
);

export default Pocket;
