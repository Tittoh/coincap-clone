import { all, AllEffect, ForkEffect } from "redux-saga/effects";
import { watchFetchCurrencyList } from "./currency/saga";

export function* rootSaga(): Generator<
  AllEffect<Generator<ForkEffect<never>, void, unknown>>,
  void,
  unknown
  > {
  yield all([watchFetchCurrencyList()]);
}
