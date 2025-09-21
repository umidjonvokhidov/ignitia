import * as React from "react";

const ExternalLink: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d="M14.5 10.75v4.5c0 .398-.158.78-.44 1.061a1.5 1.5 0 0 1-1.06.439H4.75a1.5 1.5 0 0 1-1.5-1.5V7a1.5 1.5 0 0 1 1.5-1.5h4.5"
    />
    <path
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M12.25 3.25h4.5v4.5M8.5 11.5l8.25-8.25"
    />
  </svg>
);

export default ExternalLink;
