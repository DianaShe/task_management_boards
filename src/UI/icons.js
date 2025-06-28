export const CloseIcon = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        // fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="2.3529"
        // stroke={stroke}
        d="M24 8l-16 16M8 8l16 16"
      ></path>
    </svg>
  );
};

export const PencilIcon = ({ size = 16, stroke = '#3e85f3', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="2.6"
        stroke={stroke}
        d="M3.334 28.666l7.4-2.846c0.472-0.18 0.708-0.272 0.93-0.392 0.196-0.104 0.384-0.226 0.56-0.364 0.2-0.154 0.378-0.332 0.736-0.69l15.040-15.040c0.703-0.686 1.138-1.642 1.138-2.7 0-2.083-1.689-3.772-3.772-3.772-1.058 0-2.014 0.436-2.699 1.137l-15.041 15.041c-0.243 0.23-0.468 0.47-0.679 0.723l-0.011 0.013c-0.138 0.176-0.26 0.364-0.364 0.56-0.12 0.22-0.21 0.46-0.392 0.932l-2.846 7.4zM3.334 28.666l2.744-7.134c0.196-0.51 0.294-0.766 0.462-0.882 0.106-0.075 0.238-0.12 0.381-0.12 0.044 0 0.087 0.004 0.129 0.012l-0.004-0.001c0.2 0.040 0.394 0.232 0.78 0.62l3.014 3.010c0.386 0.388 0.58 0.58 0.62 0.782 0.008 0.038 0.012 0.081 0.012 0.125 0 0.143-0.045 0.275-0.121 0.383l0.001-0.002c-0.118 0.168-0.374 0.266-0.884 0.462l-7.134 2.744z"
      ></path>
    </svg>
  );
};

export const PlusIcon = ({
  size = 32,
  fill = '#3e85f3',
  stroke = '808080',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      stroke={stroke}
      {...props}
    >
      <path
        fill="none"
        style={{ fill }}
        stroke={{ stroke }}
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="3.5556"
        d="M16 6.667v18.667M6.667 16h18.667"
      ></path>
    </svg>
  );
};