import { CURRENCY_PER_PAGE } from "../../assets/js/constants";
import {
  CurrencyInitialState,
  CurrencyActions,
  PossibleSortTypes,
  CurrencyActionTypes,
} from "./types";

const initialState: CurrencyInitialState = {
  data: [],
  sortAZ: true,
  sortType: PossibleSortTypes.NOT_SORTED,
  page: 1,
  maxPage: 1,
  pageCapacity: CURRENCY_PER_PAGE,
};

export const currencyReducer = (
  state = initialState,
  action: CurrencyActions,
): CurrencyInitialState => {
  switch (action.type) {
    case CurrencyActionTypes.SET_CURRENCY_DATA: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case CurrencyActionTypes.SET_MAX_PAGE: {
      return {
        ...state,
        maxPage: action.payload,
      };
    }
    case CurrencyActionTypes.CHANGE_VIEW_PAGE: {
      const newPage = state.page + 1;
      return {
        ...state,
        page: newPage > state.maxPage ? 1 : newPage,
      };
    }
    case CurrencyActionTypes.SET_SORT_TYPE: {
      return {
        ...state,
        sortAZ: true,
        sortType: state.sortType === action.payload ? PossibleSortTypes.NOT_SORTED : action.payload,
      };
    }
    case CurrencyActionTypes.CHANGE_SORT_DIRECTION: {
      return {
        ...state,
        sortAZ: !state.sortAZ,
      };
    }
    case CurrencyActionTypes.SET_NEW_PRICES: {
      return {
        ...state,
        data: state.data.map((item) => {
          const newPrice = action.payload[item.id];
          if (!newPrice) return item;
          return {
            ...item,
            priceUsd: newPrice,
          };
        }),
      };
    }
    default:
      return state;
  }
};
