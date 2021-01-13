import { CurrencyActions } from "../store/currency/types";
import { rootReducer } from "../store/rootReducer";

export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type ActionTypes = CurrencyActions;
export type RootState = ReturnType<typeof rootReducer>;
