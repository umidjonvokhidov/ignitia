import * as React from "react";

const Pattern: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="120"
    height="120"
    fill="none"
    viewBox="0 0 120 120"
    {...props}
  >
    <g clipPath="url(#clip0_8133_18032)">
      <mask
        id="mask0_8133_18032"
        width="1442"
        height="11370"
        x="-1"
        y="-1576"
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        {/* Diagonal pattern lines with opacity */}
        {Array.from({ length: 200 }, (_, i) => (
          <path
            key={i}
            stroke="white"
            strokeOpacity="0.08"
            d={`M0 ${1.32 + i * 8}L1440 ${-1439 + i * 8}`}
          />
        ))}
      </mask>
      <rect
        width="120"
        height="120"
        fill="url(#paint0_linear_8133_18032)"
        mask="url(#mask0_8133_18032)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_8133_18032"
        x1="60"
        x2="60"
        y1="0"
        y2="120"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0B0C0C" />
        <stop offset="1" stopColor="#0B0C0C" stopOpacity="0" />
      </linearGradient>
      <clipPath id="clip0_8133_18032">
        <rect width="120" height="120" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default Pattern;
