import styled, { css } from "styled-components/macro";
import { device } from "./breakpoints";

export const containerPadding = css`
  padding-left: 1%;
  padding-right: 1%;

  @media ${device.tabletS} {
    padding-left: 0%;
    padding-right: 0%;
  }
`;

export const SmallHidden = styled.span`
  @media ${device.tabletS} {
    display: none;
  }
`;

export const containerSize = css`
  width: 100%;
  max-width: 1127px;
  margin: 0 auto;
`;
