import { buffers, EventChannel, eventChannel } from "redux-saga";
import { ForkEffect, put, select, takeEvery, call, take, fork, delay } from "redux-saga/effects";
import { FetchApi } from "../../api/fetchService";
import { CurrencyData, SocketCurrencyResonpse } from "../../api/types";
import { WebSocketService, WssApi } from "../../api/wsService";
import { ActionTypes } from "../../types/redux";
import { setCurrencyData, setMaxPage, setNewPrices } from "./action";
import { getCurrencyCapacity } from "./selector";
import { CurrencyActionTypes } from "./types";

function createSocketCurrency(socket: WebSocketService) {
  return eventChannel((emit) => {
    socket.openConnection();
    socket.onMessage((response) => {
      const data = JSON.parse(response.data);
      emit(data);
    });
    return () => {
      socket.closeConnection();
    };
  }, buffers.sliding(5));
}

function* watchNewCurrency() {
  const socketChanel: EventChannel<unknown> = yield call(createSocketCurrency, WssApi);
  while (true) {
    try {
      const payload: SocketCurrencyResonpse = yield take(socketChanel);
      yield delay(1000);
      yield put(setNewPrices(payload));
    } catch {
      socketChanel.close();
    }
  }
}

function* fetchCurrencyList() {
  try {
    const currencyListData: CurrencyData[] = yield call(FetchApi.getCurrencyList);
    const currencyPerPage: number = yield select(getCurrencyCapacity);
    const maxPossiblePages = Math.ceil(currencyListData.length / currencyPerPage);
    yield put<ActionTypes>(setMaxPage(maxPossiblePages));
    yield put<ActionTypes>(setCurrencyData(currencyListData));
    yield fork(watchNewCurrency);
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchCurrencyList(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(CurrencyActionTypes.FETCH_CURRENCY_DATA, fetchCurrencyList);
}
