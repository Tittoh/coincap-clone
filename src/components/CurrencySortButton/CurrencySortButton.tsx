import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSortDirection, setSortType } from "../../store/currency/action";
import { isSortDirectonToLow, getSortType } from "../../store/currency/selector";
import { PossibleSortTypes } from "../../store/currency/types";
import { SortButtonDirection, SortButtonType, SortButtonWrapper } from "./CurrencySortButtonStyle";

export interface CurrencySortButtonProps {
  sortType: PossibleSortTypes;
}

const CurrencySortButton: React.FC<CurrencySortButtonProps> = ({ children, sortType }) => {
  const dispatch = useDispatch();
  const sortDirection = useSelector(isSortDirectonToLow);
  const activeSortType = useSelector(getSortType);

  const changeSortTypeHandler = () => {
    dispatch(setSortType(sortType));
  };

  const changeSortDirectionHandler = () => {
    dispatch(changeSortDirection());
  };

  return (
    <SortButtonWrapper>
      <SortButtonType onClick={changeSortTypeHandler} active={sortType === activeSortType}>
        {children}
      </SortButtonType>
      <SortButtonDirection
        onClick={changeSortDirectionHandler}
        active={sortType === activeSortType}
        tabIndex={sortType === activeSortType ? 0 : -1}
        toLow={sortDirection}
      />
    </SortButtonWrapper>
  );
};

export { CurrencySortButton };
