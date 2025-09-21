import * as React from "react";

const VueJS: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="#717784"
      d="M1.368 31.423v-.011l-.002-.004.002.015Z"
    />
    <path
      fill="#717784"
      d="M22 7h-3.688L16 11.155 13.69 7h-3.69V7.004H6L16 25l10-17.995H22V7Z"
    />
  </svg>
);

export default VueJS;
