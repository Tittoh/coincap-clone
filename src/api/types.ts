export interface CurrencyData {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string | null;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string | null;
  vwap24Hr: string;
}

export interface CurrencyRespone {
  data: CurrencyData[],
  timestamp: string,
}

export interface SocketCurrencyResonpse {
  [key: string]: string,
}
