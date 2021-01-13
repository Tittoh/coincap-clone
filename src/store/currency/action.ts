import { CurrencyData, SocketCurrencyResonpse } from "../../api/types";
import { CurrencyActionTypes, PossibleSortTypes } from "./types";

export const setCurrencyData = (data: CurrencyData[]) => ({
  type: CurrencyActionTypes.SET_CURRENCY_DATA,
  payload: data,
} as const);

export const fetchCurrencyData = () => ({
  type: CurrencyActionTypes.FETCH_CURRENCY_DATA,
} as const);

export const setMaxPage = (pageCounts: number) => ({
  type: CurrencyActionTypes.SET_MAX_PAGE,
  payload: pageCounts,
} as const);

export const changePage = () => ({
  type: CurrencyActionTypes.CHANGE_VIEW_PAGE,
} as const);

export const setSortType = (sortType: PossibleSortTypes) => ({
  type: CurrencyActionTypes.SET_SORT_TYPE,
  payload: sortType,
} as const);

export const changeSortDirection = () => ({
  type: CurrencyActionTypes.CHANGE_SORT_DIRECTION,
} as const);

export const setNewPrices = (newPrices: SocketCurrencyResonpse) => ({
  type: CurrencyActionTypes.SET_NEW_PRICES,
  payload: newPrices,
} as const);
