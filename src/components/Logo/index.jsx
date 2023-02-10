import * as React from "react";
import { Svg } from "./styles";
const Logo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={277.58}
    height={93.92}
    preserveAspectRatio="xMidYMid"
    style={{
      background: "#fdfdfd",
    }}
    viewBox="111.21 28.04 277.58 93.92"
    {...props}
  >
    <defs>
      <linearGradient
        id="b"
        x1={0.043}
        x2={0.957}
        y1={0.297}
        y2={0.703}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#074b7a" />
        <stop offset={0.5} stopColor="#cc999f" />
        <stop offset={1} stopColor="#bc111d" />
      </linearGradient>
      <linearGradient id="d" x1={0} x2={0} y1={0} y2={1}>
        <stop offset={0.2} stopColor="#fff" stopOpacity={0.8} />
        <stop offset={0.8} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <filter id="c" width="300%" height="300%" x="-100%" y="-100%">
        <feMorphology radius={2} />
      </filter>
      <filter id="a" width="300%" height="300%" x="-100%" y="-100%">
        <feFlood floodColor="#fff" result="flood" />
        <feConvolveMatrix
          divisor={1}
          in="SourceGraphic"
          kernelMatrix="0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0 0 0 1 0 0 1 0 0 0 0 1 0 0 1 0 0 0 1 0 0 0 0 1 0 0 1 1 0 0 1 1 0 0 0 0 1 1 0 0 0"
          order="8,8"
          result="conv"
        />
        <feOffset dy={4} in="conv" result="offset" />
        <feComposite in="flood" in2="offset" operator="in" result="comp" />
        <feGaussianBlur in="offset" result="shadow" stdDeviation={3} />
        <feColorMatrix
          in="shadow"
          result="dark-shadow"
          values="0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.3 0"
        />
        <feOffset dy={4} in="dark-shadow" result="offset-shadow" />
        <feOffset dy={2} in="conv" result="offset-2" />
        <feComposite
          in="offset"
          in2="offset-2"
          operator="out"
          result="edge-diff"
        />
        <feGaussianBlur in="edge-diff" result="edge-blur" stdDeviation={1} />
        <feColorMatrix
          in="edge-blur"
          result="edge-shadow"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
        />
        <feComposite
          in="edge-shadow"
          in2="offset"
          operator="in"
          result="edge-shadow-in"
        />
        <feOffset dy={1} in="edge-shadow-in" result="edge-shadow-final" />
        <feMerge result="out">
          <feMergeNode in="offset-shadow" />
          <feMergeNode in="comp" />
          <feMergeNode in="edge-shadow-final" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#a)">
      <path
        fill="url(#b)"
        d="M1.5-11.47q0-8.88 4.61-14.47Q11-32.01 19.5-32.01q6.16 0 9.26 2.99 3.11 2.98 3.11 9.28 0 9.59-4.89 15.18Q22.14.94 14.01.94q-6.35 0-9.43-3.17Q1.5-5.41 1.5-11.47Zm12.37-9.73q-2.12 8.46-2.12 15.14 0 1.6.54 2.63.54 1.03 1.97 1.03 1.44 0 2.33-.68.89-.68 1.6-2.23 1.13-2.54 2.18-7.92 1.06-5.38 1.16-7.61.09-2.24.09-3.93t-.52-2.77q-.51-1.08-1.9-1.08t-2.33.84q-1.74 1.6-3 6.58ZM39.01 0h-5.17l5.64-31.02h10.1l7.34 21.34 3.9-21.34 5.21.05L60.3 0H49.54l-6.77-20.54L39.01 0Zm47.85-7.24q.89 1.13.89 3.32 0 2.18-1.67 3.52Q84.41.94 81.5.94q-1.69 0-4.33-.38Q72-.23 70.52-.23q-1.48 0-2.09.07-.61.07-1.6.16l5.69-31.02h10.29l-4.7 25.85q.61.09 1.18.09h1.17q3.95 0 6.4-2.16ZM100.63 0H90.38l5.97-31.02h10.34L100.63 0Zm11.94 0h-5.17l5.64-31.02h10.1l7.33 21.34 3.9-21.34 5.22.05L133.86 0h-10.77l-6.76-20.54L112.57 0Zm48.26-7.24q.9 1.13.9 2.96 0 2.54-1.88 3.88-1.88 1.34-4.84 1.34-1.7 0-4.28-.38-5.08-.79-6.63-.79-1.55 0-2.16.07-.61.07-1.6.16l5.78-31.02h20.26q0 2.87-1.39 4.37-1.38 1.51-4.11 1.51-2.72 0-5.5-1.27l-1.45 8.22h8.36q0 2.49-1.22 3.88-1.22 1.38-3.27 1.38-2.04 0-3.31-.46-1.27-.48-1.41-.62l-1.69 8.89q1.13.14 3.24.14 3.62 0 6.2-2.26Zm3.81 4.47q0-1.79 1.39-2.78 1.38-.98 3.36-.98 1.97 0 3.17.98 1.2.99 1.2 2.78 0 1.78-1.34 2.75-1.34.96-3.31.96-1.98 0-3.22-.96-1.25-.97-1.25-2.75Zm12.08 0q0-1.79 1.39-2.78 1.38-.98 3.36-.98 1.97 0 3.17.98 1.2.99 1.2 2.78 0 1.78-1.34 2.75-1.34.96-3.31.96-1.98 0-3.22-.96-1.25-.97-1.25-2.75Z"
        transform="translate(156.33 91.475)"
      />
    </g>
    <g filter="url(#c)">
      <path
        fill="url(#d)"
        d="M1.5-11.47q0-8.88 4.61-14.47Q11-32.01 19.5-32.01q6.16 0 9.26 2.99 3.11 2.98 3.11 9.28 0 9.59-4.89 15.18Q22.14.94 14.01.94q-6.35 0-9.43-3.17Q1.5-5.41 1.5-11.47Zm12.37-9.73q-2.12 8.46-2.12 15.14 0 1.6.54 2.63.54 1.03 1.97 1.03 1.44 0 2.33-.68.89-.68 1.6-2.23 1.13-2.54 2.18-7.92 1.06-5.38 1.16-7.61.09-2.24.09-3.93t-.52-2.77q-.51-1.08-1.9-1.08t-2.33.84q-1.74 1.6-3 6.58ZM39.01 0h-5.17l5.64-31.02h10.1l7.34 21.34 3.9-21.34 5.21.05L60.3 0H49.54l-6.77-20.54L39.01 0Zm47.85-7.24q.89 1.13.89 3.32 0 2.18-1.67 3.52Q84.41.94 81.5.94q-1.69 0-4.33-.38Q72-.23 70.52-.23q-1.48 0-2.09.07-.61.07-1.6.16l5.69-31.02h10.29l-4.7 25.85q.61.09 1.18.09h1.17q3.95 0 6.4-2.16ZM100.63 0H90.38l5.97-31.02h10.34L100.63 0Zm11.94 0h-5.17l5.64-31.02h10.1l7.33 21.34 3.9-21.34 5.22.05L133.86 0h-10.77l-6.76-20.54L112.57 0Zm48.26-7.24q.9 1.13.9 2.96 0 2.54-1.88 3.88-1.88 1.34-4.84 1.34-1.7 0-4.28-.38-5.08-.79-6.63-.79-1.55 0-2.16.07-.61.07-1.6.16l5.78-31.02h20.26q0 2.87-1.39 4.37-1.38 1.51-4.11 1.51-2.72 0-5.5-1.27l-1.45 8.22h8.36q0 2.49-1.22 3.88-1.22 1.38-3.27 1.38-2.04 0-3.31-.46-1.27-.48-1.41-.62l-1.69 8.89q1.13.14 3.24.14 3.62 0 6.2-2.26Zm3.81 4.47q0-1.79 1.39-2.78 1.38-.98 3.36-.98 1.97 0 3.17.98 1.2.99 1.2 2.78 0 1.78-1.34 2.75-1.34.96-3.31.96-1.98 0-3.22-.96-1.25-.97-1.25-2.75Zm12.08 0q0-1.79 1.39-2.78 1.38-.98 3.36-.98 1.97 0 3.17.98 1.2.99 1.2 2.78 0 1.78-1.34 2.75-1.34.96-3.31.96-1.98 0-3.22-.96-1.25-.97-1.25-2.75Z"
        transform="translate(156.33 91.475)"
      />
    </g>
  </Svg>
);

export { Logo };
