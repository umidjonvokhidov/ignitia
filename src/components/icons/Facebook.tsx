import * as React from "react";

const Facebook: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="21"
    fill="none"
    viewBox="0 0 21 21"
    {...props}
  >
    <path
      fill="white"
      d="M10.967 2.217c4.832 0 8.75 3.917 8.75 8.75 0 4.832-3.918 8.75-8.75 8.75-.028 0-.056-.003-.084-.003.442-.004.876-.037 1.3-.102v-5.97h2.043l.389-2.47h-2.432V9.57c0-.675.339-1.335 1.428-1.335h1.106V6.133s-1.004-.167-1.963-.167c-2.003.015-3.311 1.198-3.311 3.339v1.883H7.217v2.47h2.226v5.867c-4.106-.722-7.226-4.302-7.226-8.614C2.217 6.134 6.135 2.217 10.967 2.217Z"
    />
  </svg>
);

export default Facebook;
