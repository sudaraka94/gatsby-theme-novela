import React from "react";

import { Icon } from '@types';

const TwitterIcon: Icon = ({ fill = "white", ...props }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 16 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill={fill} d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
  </svg>
);

export default TwitterIcon;