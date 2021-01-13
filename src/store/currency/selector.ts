import { createSelector } from "reselect";
import { CurrencyData } from "../../api/types";
import { RootState } from "../../types/redux";
import { PossibleSortTypes } from "./types";

export const getCurrencyList = (state: RootState): CurrencyData[] => state.currency.data;
export const getCurrencyPage = (state: RootState): number => state.currency.page;
export const getCurrencyCapacity = (state: RootState): number => state.currency.pageCapacity;
export const getMaxPage = (state: RootState): number => state.currency.maxPage;
export const getSortType = (store: RootState): PossibleSortTypes => store.currency.sortType;
export const isSortDirectonToLow = (store: RootState): boolean => store.currency.sortAZ;

export const getSortedList = createSelector(
  [getSortType, isSortDirectonToLow, getCurrencyList],
  (sortType, sortToLow, list) => {
    switch (sortType) {
      case PossibleSortTypes.BY_RANK: {
        return [...list].sort((a, b) => {
          return sortToLow ? +a.rank - +b.rank : +b.rank - +a.rank;
        });
      }
      case PossibleSortTypes.BY_MARKETCAP: {
        return [...list].sort((a, b) => {
          return !sortToLow ? +a.marketCapUsd - +b.marketCapUsd : +b.marketCapUsd - +a.marketCapUsd;
        });
      }
      case PossibleSortTypes.BY_CHANGE: {
        return [...list].sort((a, b) => {
          const aChange = a.changePercent24Hr ? +a.changePercent24Hr : 0;
          const bChange = b.changePercent24Hr ? +b.changePercent24Hr : 0;
          return !sortToLow ? aChange - bChange : bChange - aChange;
        });
      }
      case PossibleSortTypes.BY_PRICE: {
        return [...list].sort((a, b) => {
          return !sortToLow ? +a.priceUsd - +b.priceUsd : +b.priceUsd - +a.priceUsd;
        });
      }
      case PossibleSortTypes.BY_SUPPLY: {
        return [...list].sort((a, b) => {
          return !sortToLow ? +a.supply - +b.supply : +b.supply - +a.supply;
        });
      }
      case PossibleSortTypes.BY_VOLUME: {
        return [...list].sort((a, b) => {
          return !sortToLow
            ? +a.volumeUsd24Hr - +b.volumeUsd24Hr
            : +b.volumeUsd24Hr - +a.volumeUsd24Hr;
        });
      }
      case PossibleSortTypes.BY_VWAP: {
        return [...list].sort((a, b) => {
          return !sortToLow ? +a.vwap24Hr - +b.vwap24Hr : +b.vwap24Hr - +a.vwap24Hr;
        });
      }
      case PossibleSortTypes.BY_NAME: {
        return [...list].sort((a, b) => {
          if (a.name > b.name) return sortToLow ? 1 : -1;
          if (a.name < b.name) return sortToLow ? -1 : 1;
          return 0;
        });
      }
      default: {
        return list;
      }
    }
  },
);

export const getCurrencyListPart = createSelector(
  [getSortedList, getCurrencyPage, getCurrencyCapacity],
  (list, page, capacity) => {
    return list.slice(0, page * capacity);
  },
);
