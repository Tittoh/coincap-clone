import { keyframes, css } from "styled-components/macro";

const flashBad = keyframes`
  0%: {
    background-color: inherit;
  }

  50% {
    background-color: #FFDBDA;
  }

  100%: {
    background-color: inherit;
  }
`;

const flashGood = keyframes`
0%: {
  background-color: inherit;
}

50% {
  background-color: #CFF4E8;
}

100%: {
  background-color: inherit;
}
`;

export const currencyIsUp = css`
  animation: ${flashGood} 1.5s ease forwards;
`;

export const currencyIsDown = css`
  animation: ${flashBad} 1.5s ease forwards;
`;
