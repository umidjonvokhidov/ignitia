import * as React from "react";

const ArrowRight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M4.166 9.999H15.833m0 0L9.999 4.166m5.834 5.833-5.834 5.834"
    />
  </svg>
);

export default ArrowRight;
