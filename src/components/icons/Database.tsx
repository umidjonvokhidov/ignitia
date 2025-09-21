import * as React from "react";

const Database: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d="M13.4 8c0 .996-2.4 1.8-5.4 1.8S2.6 8.996 2.6 8"
    />
    <path
      stroke="#717784"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M8 5.6c2.982 0 5.4-.806 5.4-1.8S10.982 2 8 2 2.6 2.806 2.6 3.8s2.418 1.8 5.4 1.8Z"
    />
    <path
      stroke="#717784"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M2.6 3.801v8.4c0 .996 2.4 1.8 5.4 1.8s5.4-.804 5.4-1.8v-8.4"
    />
  </svg>
);

export default Database;
