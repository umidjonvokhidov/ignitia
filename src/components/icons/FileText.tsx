import * as React from "react";

const FileText: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d="M18.4 4H8.8c-.636 0-1.247.253-1.697.703A2.4 2.4 0 0 0 6.4 6.4v19.2c0 .637.253 1.247.703 1.697A2.4 2.4 0 0 0 8.8 28h14.4c.637 0 1.247-.253 1.697-.703A2.4 2.4 0 0 0 25.6 25.6V11.2L18.4 4Z"
    />
    <path
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M20.799 22H11.199M20.799 17.199H11.199M13.599 12.4h-1.2-1.2"
    />
    <path
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M18.4 4v7.2h7.2"
    />
  </svg>
);

export default FileText;
