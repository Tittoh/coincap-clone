import React from "react";
import { CurrencyData } from "../../api/types";
import {
  CurrencyCurrencyImg,
  CurrencyCurrencyName,
  CurrencyCurrencyShort,
  CurrencyTableCell,
  CurrencyTableRowWrap,
} from "./CurrencyTableRowStyle";
import { getParsedData } from "../../helpers/currencyParser";
import { usePrevious } from "../../hooks/usePrevious";
import { getChangeStatus } from "./CurrencyTableHelper";

export interface CurrencyTableRowProp {
  data: CurrencyData;
}

const CurrencyTableRow: React.FC<CurrencyTableRowProp> = React.memo(
  ({ data }) => {
    const {
      icon,
      marketCap,
      name,
      percent,
      positive,
      price,
      rank,
      shortName,
      supply,
      volume24h,
      vwap24h,
    } = getParsedData(data);
    const prevPrice = usePrevious<string>(data.priceUsd);
    return (
      <CurrencyTableRowWrap
        key={price}
        changeValue={getChangeStatus(+prevPrice, +data.priceUsd)}
      >
        <CurrencyTableCell align="center" mobileHideL>
          {rank}
        </CurrencyTableCell>
        <CurrencyTableCell align="left">
          <CurrencyCurrencyImg src={icon} />
          <CurrencyCurrencyName>
            {name}
            <CurrencyCurrencyShort>{shortName}</CurrencyCurrencyShort>
          </CurrencyCurrencyName>
        </CurrencyTableCell>
        <CurrencyTableCell>{price}</CurrencyTableCell>
        <CurrencyTableCell tabletHide>{marketCap}</CurrencyTableCell>
        <CurrencyTableCell laptopHide>{vwap24h}</CurrencyTableCell>
        <CurrencyTableCell laptopHide>{supply}</CurrencyTableCell>
        <CurrencyTableCell tabletHide>{volume24h}</CurrencyTableCell>
        <CurrencyTableCell positive={positive}>{percent}</CurrencyTableCell>
      </CurrencyTableRowWrap>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.data.priceUsd === nextProps.data.priceUsd;
  },
);

export { CurrencyTableRow };
