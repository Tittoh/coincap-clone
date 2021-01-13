import { css } from "styled-components/macro";
import { device } from "./breakpoints";

export const tabletHidden = css`
  @media ${device.tablet} {
    display: none;
  }
`;

export const laptopHidden = css`
  @media ${device.laptop} {
    display: none;
  }
`;

export const mobileHiddenL = css`
  @media ${device.mobileL} {
    display: none;
  }
`;
export interface ResponseHidden {
  tabletHide?: boolean,
  laptopHide?: boolean,
  mobileHideL?: boolean,
}
