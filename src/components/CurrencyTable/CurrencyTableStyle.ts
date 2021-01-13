import styled from "styled-components/macro";
import { device } from "../../styles/breakpoints";
import { containerPadding, containerSize } from "../../styles/container";
import { laptopHidden, mobileHiddenL, tabletHidden, ResponseHidden } from "../../styles/media";

export const CurrencyContainer = styled.div`
  ${containerSize};
  ${containerPadding};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -120px;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const CurrencyTableWrap = styled.table`
  width: 100%;
  overflow: hidden;
  background-color: white;
  border: none;
  border-radius: 0.4rem;
  border-collapse: separate;
  border-spacing: 0;
  text-align: right;
  font-size: 1.4rem;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 15px -3px;

  @media ${device.mobileL} {
    font-size: 1.2rem;
  }
`;

export const CurrencyTableHead = styled.thead`
  vertical-align: middle;
  font-size: 1.3rem;
  font-weight: 500;
`;

interface TableAlignProps {
  align?: "left" | "center" | "right";
}

export const CurrencyTableHeadRow = styled.tr<TableAlignProps>`
  font-weight: inherit;
  text-align: ${({ align }) => align || "inherit"};
  white-space: nowrap;
  cursor: pointer;

`;

type CurrencyTabelCellHeadProp = TableAlignProps & ResponseHidden;

export const CurrencyTableCellHead = styled.th<CurrencyTabelCellHeadProp>`
  color: #686868;
  font-weight: inherit;
  padding: 1.1rem 0.9rem;
  text-align: ${({ align }) => align || "inherit"};
  ${({ tabletHide }) => tabletHide && tabletHidden};
  ${({ laptopHide }) => laptopHide && laptopHidden};
  ${({ mobileHideL }) => mobileHideL && mobileHiddenL};
`;

export const CurrencyTableBody = styled.tbody``;
