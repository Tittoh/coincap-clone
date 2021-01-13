import styled from "styled-components/macro";

export const SortButtonWrapper = styled.div`
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

interface SortButtonTypeProps {
  active?: boolean;
}

export const SortButtonType = styled.button<SortButtonTypeProps>`
  font-family: inherit;
  font-size: inherit;
  flex-grow: 1;
  border: none;
  background-color: transparent;
  text-transform: inherit;
  font-weight: inherit;
  cursor: pointer;
  color: ${({ active }) => (active ? "#51b1f0" : "inherit")};


  &:hover {
    color: #242424;
  }

  :focus {
    outline: none;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.fontColor};
  }
`;

interface SortButtonDirectionProps {
  active?: boolean;
  toLow?: boolean;
}

export const SortButtonDirection = styled.button<SortButtonDirectionProps>`
  position: relative;
  display: block;
  right: 0;
  top: 0;
  bottom: 0;
  margin-left: ${({ active }) => (active ? "0.3rem" : "0px")};
  width: ${({ active }) => (active ? "1.6rem" : "0px")};
  height: 20px;
  border: none;
  background-color: transparent;
  overflow: hidden;
  transition: width 0.5s ease, margin 0.5s ease;
  cursor: pointer;

  :focus {
    outline: none;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.fontColor};
  }

  :after {
    position: absolute;
    content: "";
    left: 50%;
    bottom: 4px;
    width: 0;
    height: 0;
    transform: translate(-50%, 0);
    border-style: solid;
    border-width: 4px 4px 0 4px;
    transition: border 0.3s ease;
    border-color: ${({ toLow }) => (!toLow ? "#686868" : "#51b1f0")}
      transparent transparent transparent;
  }

  :before {
    position: absolute;
    content: "";
    left: 50%;
    top: 5px;
    width: 0;
    height: 0;
    transform: translate(-50%, 0);
    border-style: solid;
    border-width: 0 4px 4px 4px;
    transition: border 0.3s ease;
    border-color: transparent transparent ${({ toLow }) => (!toLow ? "#51b1f0" : "#686868")} transparent;
  }
`;
