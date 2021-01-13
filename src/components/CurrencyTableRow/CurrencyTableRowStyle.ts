import styled from "styled-components/macro";
import { device } from "../../styles/breakpoints";
import { laptopHidden, mobileHiddenL, tabletHidden, ResponseHidden } from "../../styles/media";
import { currencyIsDown, currencyIsUp } from "./CurrencyTableAnimation";

interface TableAlignProps {
  align?: "left" | "center" | "right";
}

interface CurrencyTableRowWrapProp extends TableAlignProps {
  changeValue?: boolean;
}

export const CurrencyTableRowWrap = styled.tr<CurrencyTableRowWrapProp>`
  font-weight: inherit;
  text-align: ${({ align }) => align || "inherit"};
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 1s ease;

  &:hover {
    background-color: #eaeaea;
  }

  ${({ changeValue }) => {
    switch (changeValue) {
      case undefined:
        return "";
      case true:
        return currencyIsUp;
      case false:
        return currencyIsDown;
      default:
        return "";
    }
  }}
`;

type CurrencyTableCellProps = {
  positive?: "up" | "down";
} & TableAlignProps &
  ResponseHidden;

export const CurrencyTableCell = styled.td<CurrencyTableCellProps>`
  border-top: 1px solid rgba(34, 36, 38, 0.1);
  font-weight: inherit;
  vertical-align: middle;
  padding: 1.1rem 0.9rem;
  text-align: ${({ align }) => align || "inherit"};
  color: ${({ positive }) => {
    switch (positive) {
      case "up":
        return "rgb(24, 198, 131)";
      case "down":
        return "rgb(244, 67, 54)";
      default:
        return "inherit";
    }
  }};

  ${({ tabletHide }) => tabletHide && tabletHidden};
  ${({ laptopHide }) => laptopHide && laptopHidden};
  ${({ mobileHideL }) => mobileHideL && mobileHiddenL};
`;

export const CurrencyCurrencyImg = styled.img`
  display: inline-block;
  vertical-align: middle;
  width: 30px;
  height: 30px;
  margin-right: 5px;

  @media ${device.mobileL} {
    width: 25px;
    height: 25px;
  }
`;

export const CurrencyCurrencyName = styled.a`
  vertical-align: middle;
  font-size: 1.4rem;
  display: inline-block;

  @media ${device.mobileL} {
    font-size: 1.2rem;
  }
`;

export const CurrencyCurrencyShort = styled.span`
  color: #686868;
  font-size: 1.1rem;
  display: block;

  @media ${device.mobileL} {
    font-size: 1rem;
  }
`;
