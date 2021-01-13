import styled from "styled-components/macro";
import { device } from "../../styles/breakpoints";
import { containerPadding, containerSize } from "../../styles/container";

export const FullStatsContainer = styled.div`
  ${containerPadding};
  padding-bottom: 120px;
  background: linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246)) rgb(255, 255, 255);
`;

interface FullStatsListProp {
  isOpen: boolean;
}

export const FullStatsList = styled.ul<FullStatsListProp>`
  ${containerSize};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 0;
  color: white;
  font-family: "Lato", sans-serif;

  @media ${device.mobileL} {
    padding: 0 1rem;

    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  }
`;

interface FullStatsButtonProp {
  isOpen: boolean;
}

export const FullStatsButton = styled.button<FullStatsButtonProp>`
  position: relative;
  display: none;
  justify-content: flex-start;
  align-items: center;
  color: white;
  font-style: inherit;
  font-size: 1.4rem;
  padding: 1rem;
  width: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  user-select: none;

  &:after {
    position: absolute;
    display: block;
    right: 10px;
    content: "";
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid white;
    transition: transform 0.3s ease;
    transform: ${({ isOpen }) => (isOpen ? "rotateZ(0deg)" : "rotateZ(90deg)")};
  }

  &:focus {
    outline: none;
  }

  @media ${device.mobileL} {
    display: flex;
  }
`;
