import * as React from "react";

const Youtube: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <g clipPath="url(#clip0_8145_12031)">
      <path
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.4"
        d="M18.578 5.579c-.509-.878-1.06-1.04-2.184-1.1C15.271 4.405 12.448 4.375 10.003 4.375c-2.45 0-5.275.03-6.396.104-1.122.062-1.675.222-2.188 1.1C.895 6.456.625 7.965.625 10.622v.01c0 2.647.27 4.167.794 5.033.512.876 1.065 1.036 2.187 1.11 1.122.062 3.946.1 6.397.1 2.445 0 5.269-.038 6.392-.1 1.124-.074 1.675-.235 2.184-1.11.53-.868.797-2.388.797-5.033v-.01c-.001-2.657-.267-4.167-.798-5.043Z"
      />
      <path
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.4"
        d="M8.125 13.75V7.5l5 3.125-5 3.125Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_8145_12031">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default Youtube;
