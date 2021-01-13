import React from "react";
import { useSelector } from "react-redux";
import {
  CurrencyContainer,
  CurrencyTableBody,
  CurrencyTableCellHead,
  CurrencyTableHead,
  CurrencyTableHeadRow,
  CurrencyTableWrap,
} from "./CurrencyTableStyle";
import { CurrencyTableRow } from "../CurrencyTableRow/CurrencyTableRow";
// import { data } from "../../mocks/data.json";
import { SmallHidden } from "../../styles/container";
import { getCurrencyListPart } from "../../store/currency/selector";
import { TableMoreButton } from "../TableMoreButton/TableMoreButton";
import { CurrencySortButton } from "../CurrencySortButton/CurrencySortButton";
import { PossibleSortTypes } from "../../store/currency/types";

const CurrencyTable: React.FC = () => {
  const currencyList = useSelector(getCurrencyListPart);

  return (
    <CurrencyContainer>
      <CurrencyTableWrap>
        <CurrencyTableHead>
          <CurrencyTableHeadRow>
            <CurrencyTableCellHead align="center" mobileHideL>
              <CurrencySortButton sortType={PossibleSortTypes.BY_RANK}>Rank</CurrencySortButton>
            </CurrencyTableCellHead>
            <CurrencyTableCellHead align="left">
              <CurrencySortButton sortType={PossibleSortTypes.BY_NAME}>Name</CurrencySortButton>
            </CurrencyTableCellHead>
            <CurrencyTableCellHead>
              <CurrencySortButton sortType={PossibleSortTypes.BY_PRICE}>Price</CurrencySortButton>
            </CurrencyTableCellHead>
            <CurrencyTableCellHead tabletHide>
              <CurrencySortButton sortType={PossibleSortTypes.BY_MARKETCAP}>
                Market Cap
              </CurrencySortButton>
            </CurrencyTableCellHead>
            <CurrencyTableCellHead laptopHide>
              <CurrencySortButton sortType={PossibleSortTypes.BY_VWAP}>
                VWAP (24hr)
              </CurrencySortButton>
            </CurrencyTableCellHead>
            <CurrencyTableCellHead laptopHide>
              <CurrencySortButton sortType={PossibleSortTypes.BY_SUPPLY}>Supply</CurrencySortButton>
            </CurrencyTableCellHead>
            <CurrencyTableCellHead tabletHide>
              <CurrencySortButton sortType={PossibleSortTypes.BY_VOLUME}>
                Volume (24hr)
              </CurrencySortButton>
            </CurrencyTableCellHead>
            <CurrencyTableCellHead>
              <CurrencySortButton sortType={PossibleSortTypes.BY_CHANGE}>
                <SmallHidden>Change</SmallHidden>
                (24hr)
              </CurrencySortButton>
            </CurrencyTableCellHead>
          </CurrencyTableHeadRow>
        </CurrencyTableHead>
        <CurrencyTableBody>
          {currencyList.map((rowData) => (
            <CurrencyTableRow key={rowData.symbol} data={rowData} />
          ))}
        </CurrencyTableBody>
      </CurrencyTableWrap>
      <TableMoreButton />
    </CurrencyContainer>
  );
};

export { CurrencyTable };
