import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../store/currency/action";
import { getCurrencyPage, getMaxPage } from "../../store/currency/selector";
import { CurrencyTableMoreButton } from "./TableMoreButtonStyle";

const TableMoreButton: React.FC = () => {
  const currentPage = useSelector(getCurrencyPage);
  const maxPage = useSelector(getMaxPage);
  const dispatch = useDispatch();

  const viewHideList = () => {
    dispatch(changePage());
  };

  return <CurrencyTableMoreButton onClick={viewHideList}>{maxPage === currentPage ? "Hide" : "View More"}</CurrencyTableMoreButton>;
};

export { TableMoreButton };
