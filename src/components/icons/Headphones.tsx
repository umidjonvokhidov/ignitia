import * as React from "react";

const Headphones: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d="M5.199 23.199V16c0-2.865 1.138-5.612 3.163-7.638C10.388 6.337 13.135 5.199 16 5.199c2.864 0 5.611 1.138 7.636 3.163 2.025 2.026 3.163 4.773 3.163 7.638v7.199"
    />
    <path
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M26.799 24.4c0 .637-.253 1.247-.703 1.697a2.4 2.4 0 0 1-1.697.703H23.2a2.4 2.4 0 0 1-1.697-.703 2.4 2.4 0 0 1-.703-1.697V20.8c0-.636.253-1.247.703-1.697a2.4 2.4 0 0 1 1.697-.703h3.6v5.6ZM5.199 24.4c0 .637.253 1.247.703 1.697a2.4 2.4 0 0 0 1.697.703h1.2a2.4 2.4 0 0 0 1.697-.703 2.4 2.4 0 0 0 .703-1.697V20.8c0-.636-.253-1.247-.703-1.697a2.4 2.4 0 0 0-1.697-.703h-3.6v5.6Z"
    />
  </svg>
);

export default Headphones;
