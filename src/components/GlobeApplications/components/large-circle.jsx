export const LargeCircle = ({ animate, variant, ...props }) => {
  const bgColor = variant === "purple" ? "#830088" : "#0066b0";
  const stroke = variant === "purple" ? "#fa83ff" : "#82cfff";
  return (
    <svg
      initial="one"
      className="large-circle anim"
      clipRule="evenodd"
      fillRule="evenodd"
      viewBox="0 0 541 541"
      {...props}
    >
      <linearGradient
        id={`circle_${variant}_a`}
        gradientTransform="matrix(538 7.5 -7.5 538 .000001 269)"
        gradientUnits="userSpaceOnUse"
        x1="0"
        x2="1"
        y1="0"
        y2="0"
      >
        <stop offset="0" stopColor={bgColor} stopOpacity=".3" />
        <stop offset="1" stopColor={bgColor} stopOpacity=".1" />
      </linearGradient>
      <linearGradient
        id={`circle_${variant}_b`}
        gradientUnits="userSpaceOnUse"
        x1=".000001"
        x2="538.000001"
        y1="269"
        y2="269"
      >
        <stop offset="0" stopColor={stroke} stopOpacity=".55" />
        <stop offset="1" stopColor={stroke} stopOpacity=".2" />
      </linearGradient>
      <linearGradient
        id={`circle_${variant}_c`}
        gradientUnits="userSpaceOnUse"
        x1=".000001"
        x2="533.999001"
        y1="267"
        y2="267"
      >
        <stop offset="0" stopColor={stroke} stopOpacity=".16" />
        <stop offset="1" stopColor={stroke} stopOpacity=".06" />
      </linearGradient>
      <linearGradient
        id={`circle_${variant}_d`}
        gradientUnits="userSpaceOnUse"
        x1=".000001"
        x2="529.999001"
        y1="265"
        y2="265"
      >
        <stop offset="0" stopColor={stroke} stopOpacity=".05" />
        <stop offset="1" stopColor={stroke} stopOpacity=".02" />
      </linearGradient>
      <circle
        fill={`url(#circle_${variant}_a)`}
        r="269.5"
        stroke={`url(#circle_${variant}_b)`}
        transform="matrix(-1 0 0 1 270.5 270.5)"
      />
      <g fill="none">
        <circle
          r="267.5"
          stroke={`url(#circle_${variant}_c)`}
          transform="matrix(-1 0 0 1 270.5 270.5)"
        />
        <circle
          r="265.5"
          stroke={`url(#circle_${variant}_d)`}
          transform="matrix(-1 0 0 1 270.5 270.5)"
        />
      </g>
    </svg>
  );
};
