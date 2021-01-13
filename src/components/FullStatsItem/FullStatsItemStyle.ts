import styled from "styled-components/macro";
import { device } from "../../styles/breakpoints";

export const FullStatsItemWrap = styled.li`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  text-transform: uppercase;

  @media ${device.laptop} {
    width: 33%;
  }

  @media ${device.mobileL} {
    padding: 1rem;
    text-transform: none;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;

    & + & {
      border-top: 1px solid #3589fa;
    }
  }
`;

export const FullStatsTitle = styled.h5`
  font-weight: 700;
  font-size: 1.4rem;

  @media ${device.tabletS} {
    font-size: 1.2rem;
  }

  @media ${device.mobileL} {
    font-weight: 400;
    font-size: 1.3rem;
  }
`;

export const FullStatsValue = styled.p`
  font-weight: 400;
  font-size: 2.1rem;

  @media ${device.tabletS} {
    font-size: 1.8rem;
  }

  @media ${device.mobileL} {
    font-size: 1.3rem;
  }
`;
