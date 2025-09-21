import * as React from "react";

const UserCircle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <g opacity="0.12">
      <path
        fill="#151516"
        d="M24.911 25.919c-2.361 2.123-5.485 3.415-8.911 3.415s-6.55-1.292-8.912-3.415c.811-1.911 2.705-3.251 4.912-3.251h8c2.207 0 4.1 1.34 4.911 3.251Z"
      />
      <path
        fill="#151516"
        d="M16 18.001a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667Z"
      />
    </g>
    <path
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M7.088 25.917c.811-1.911 2.705-3.251 4.912-3.251h8c2.207 0 4.1 1.34 4.911 3.251M21.333 12.666a5.333 5.333 0 1 1-10.667 0 5.333 5.333 0 0 1 10.667 0ZM29.333 16a13.333 13.333 0 1 1-26.667 0 13.333 13.333 0 0 1 26.667 0Z"
    />
  </svg>
);

export default UserCircle;
