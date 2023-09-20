import * as React from "react";
const PreviousArrow = (props) => (
  <svg
    width={23}
    height={23}
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Group 1">
      <circle
        id="Ellipse 4"
        cx={11.5}
        cy={11.5}
        r={11}
        stroke="url(#paint0_linear_177_298)"
      />
      <path
        id="Vector 5"
        d="M12.2666 9.20001L9.19995 12.2667L12.2666 14.5667"
        stroke="white"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_177_298"
        x1={11.5}
        y1={0}
        x2={11.5}
        y2={23}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#903AFF" />
        <stop offset={1} stopColor="#FF26B9" />
      </linearGradient>
    </defs>
  </svg>
);
const DownArrow = (props) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);

export { PreviousArrow, DownArrow };
