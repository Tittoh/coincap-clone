import { CurrencyData } from "../api/types";
import { DEFAULT_CURRENCY, FLOAT_POINT, NUM_POWER } from "../assets/js/constants";
import { getCoinIcon } from "./coinIconMap";

type NumberSymbolType = "b" | "t" | "m" | "";

interface ShortenNumberReturn {
  value: number;
  symbol: NumberSymbolType;
}

const getShortenNumber = (value: number): ShortenNumberReturn => {
  if (value >= NUM_POWER.TRILLION) return { symbol: "t", value: value / NUM_POWER.TRILLION };
  if (value >= NUM_POWER.BILLION) return { symbol: "b", value: value / NUM_POWER.BILLION };
  if (value >= NUM_POWER.MILLION) return { symbol: "m", value: value / NUM_POWER.MILLION };
  if (value < 1) return { symbol: "", value };
  return { symbol: "", value };
};

const getParsedCurrency = (
  valueString?: string | null,
  currency: string | false = DEFAULT_CURRENCY,
) => {
  if (!valueString) return "-";
  const number = parseFloat(valueString);
  const { symbol, value } = getShortenNumber(number);
  const fractionsDigits = value < 1 ? FLOAT_POINT.SMALL_NUMBER : FLOAT_POINT.BIG_NUMBER;
  return `${new Intl.NumberFormat("en-US", {
    style: currency ? "currency" : "decimal",
    currency: currency || DEFAULT_CURRENCY,
    currencyDisplay: "symbol",
    minimumFractionDigits: fractionsDigits,
    maximumFractionDigits: fractionsDigits,
  }).format(value)}${symbol}`;
};

interface ParsedPercentReturn {
  percent: string;
  positive?: "up" | "down";
}

export const getParsedPercent = (percent?: string | null): ParsedPercentReturn => {
  if (!percent) {
    return {
      percent: "-",
    };
  }
  const parsedPercent = parseFloat(percent);
  return {
    percent: `${parsedPercent.toFixed(2)}%`,
    positive: parsedPercent > 0 ? "up" : "down",
  };
};

interface GetParsedDataReturn {
  rank: string;
  icon: string;
  name: string;
  shortName: string;
  price: string;
  marketCap: string;
  vwap24h: string;
  supply: string;
  volume24h: string;
  percent: string;
  positive?: "up" | "down";
}

export const getParsedData = (data: CurrencyData, currency?: string): GetParsedDataReturn => {
  const percentData = getParsedPercent(data.changePercent24Hr);
  return {
    rank: data.rank,
    icon: getCoinIcon(data.symbol),
    name: data.name,
    shortName: data.symbol,
    price: getParsedCurrency(data.priceUsd, currency),
    marketCap: getParsedCurrency(data.marketCapUsd, currency),
    vwap24h: getParsedCurrency(data.vwap24Hr, currency),
    supply: getParsedCurrency(data.supply, false),
    volume24h: getParsedCurrency(data.volumeUsd24Hr, currency),
    percent: percentData.percent,
    positive: percentData.positive,
  };
};
