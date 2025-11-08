import React from "react";

interface FlagOfIndiaProps {
  width?: number;
  height?: number;
  className?: string;
}

const FlagOfIndia: React.FC<FlagOfIndiaProps> = ({
  width = 90,
  height = 60,
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="-45 -30 90 60"
      fill="#07038D"
      className={className}
    >
      <title>Flag of India</title>

      {/* White background */}
      <path fill="#FFF" d="m-45-30h90v60h-90z" />

      {/* Saffron stripe */}
      <path fill="#FF6820" d="m-45-30h90v20h-90z" />

      {/* Green stripe */}
      <path fill="#046A38" d="m-45 10h90v20h-90z" />

      {/* Chakra outer circle */}
      <circle r="9.25" />

      {/* Chakra white background */}
      <circle fill="#FFF" r="8" />

      {/* Chakra center */}
      <circle r="1.6" />

      {/* Chakra spokes pattern */}
      <g id="d">
        <g id="c">
          <g id="b">
            <g id="a">
              <path d="m0-8 .3 4.81409L0-.80235-.3-3.18591z" />
              <circle transform="rotate(7.5)" r="0.35" cy="-8" />
            </g>
            <use xlinkHref="#a" transform="scale(-1)" />
          </g>
          <use xlinkHref="#b" transform="rotate(15)" />
        </g>
        <use xlinkHref="#c" transform="rotate(30)" />
      </g>
      <use xlinkHref="#d" transform="rotate(60)" />
      <use xlinkHref="#d" transform="rotate(120)" />
    </svg>
  );
};

export default FlagOfIndia;
