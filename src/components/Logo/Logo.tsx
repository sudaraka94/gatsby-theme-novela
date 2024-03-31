import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

import { Icon } from '@types';

const Logo: Icon = ({ fill = "white" }) => {
  return (
    <LogoContainer>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="40pt" height="32.3pt" viewBox="0 0 800.000000 638.000000"
        preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,638.000000) scale(0.100000,-0.100000)"
          fill="#000000" stroke="none">
          <path d="M2025 5270 c-492 -29 -788 -216 -904 -572 -54 -164 -63 -236 -68
-540 -6 -313 3 -429 42 -584 96 -379 306 -569 721 -650 79 -16 176 -18 847
-21 l758 -4 -3 -287 c-3 -267 -4 -290 -24 -332 -25 -54 -64 -94 -119 -124 -39
-20 -50 -21 -350 -19 -311 1 -733 17 -1420 53 -203 11 -378 20 -387 20 -17 0
-18 -24 -18 -374 l0 -373 83 -6 c988 -76 2006 -118 2309 -97 516 37 785 241
884 670 46 203 55 659 18 919 -55 376 -234 608 -554 715 -172 57 -200 59 -915
65 l-660 6 -67 33 c-110 54 -147 124 -155 297 -12 245 46 369 195 415 62 19
94 20 958 20 l894 0 0 390 0 390 -967 -2 c-533 0 -1026 -4 -1098 -8z"/>
          <path d="M5080 4890 l0 -390 355 0 355 0 0 -1075 c0 -959 -2 -1079 -16 -1122
-22 -65 -55 -107 -112 -140 l-47 -28 -325 2 c-179 1 -397 6 -485 11 -88 5
-163 7 -167 5 -5 -2 -8 -170 -8 -373 l0 -369 53 -5 c380 -42 1129 -63 1304
-37 460 68 688 282 779 731 16 78 18 214 21 1633 l4 1547 -856 0 -855 0 0
-390z"/>
        </g>
      </svg>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile{
      display: block;
    }
  `}
`;
