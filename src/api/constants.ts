export const BASE_URL = "https://api.coincap.io/v2";
export const WSS_URL = "wss://ws.coincap.io/prices?assets=ALL";

export const URLS = {
  BASE: "https://api.coincap.io/v2",
  CURRENCY: "/assets",
} as const;

export type URLSType = typeof URLS;
