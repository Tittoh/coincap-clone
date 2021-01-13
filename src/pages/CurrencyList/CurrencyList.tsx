import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CurrencyTable } from "../../components/CurrencyTable/CurrencyTable";
import { FullStats } from "../../components/FullStats/FullStats";
import { data } from "../../mocks/fullstat.json";
import { fetchCurrencyData } from "../../store/currency/action";

const CurrencyList: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencyData());
  }, [dispatch]);

  return (
    <>
      <FullStats data={data} />
      <CurrencyTable />
    </>
  );
};

export { CurrencyList };
