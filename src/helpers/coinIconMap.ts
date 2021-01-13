import btc from "../assets/img/coin/btc.png";
import eth from "../assets/img/coin/eth.png";
import aave from "../assets/img/coin/aave.png";
import ada from "../assets/img/coin/ada.png";
import bch from "../assets/img/coin/bch.png";
import bnb from "../assets/img/coin/bnb.png";
import bsv from "../assets/img/coin/bsv.png";
import cro from "../assets/img/coin/cro.png";
import dot from "../assets/img/coin/dot.png";
import eos from "../assets/img/coin/eos.png";
import link from "../assets/img/coin/link.png";
import ltc from "../assets/img/coin/ltc.png";
import mkr from "../assets/img/coin/mkr.png";
import neo from "../assets/img/coin/neo.png";
import snx from "../assets/img/coin/snx.png";
import theta from "../assets/img/coin/theta.png";
import trx from "../assets/img/coin/trx.png";
import usdc from "../assets/img/coin/usdc.png";
import usdt from "../assets/img/coin/usdt.png";
import vet from "../assets/img/coin/vet.png";
import wbtc from "../assets/img/coin/wbtc.png";
import xem from "../assets/img/coin/xem.png";
import xmr from "../assets/img/coin/xmr.png";
import xrp from "../assets/img/coin/xrp.png";
import xtz from "../assets/img/coin/xtz.png";
import xlm from "../assets/img/coin/xlm.png";
import miota from "../assets/img/coin/miota.png";
import dash from "../assets/img/coin/dash.png";
import btg from "../assets/img/coin/btg.png";
import omg from "../assets/img/coin/omg.png";
import qtum from "../assets/img/coin/qtum.png";
import zec from "../assets/img/coin/zec.png";
import etc from "../assets/img/coin/etc.png";
import zrx from "../assets/img/coin/zrx.png";
import ae from "../assets/img/coin/ae.png";
import bts from "../assets/img/coin/bts.png";
import dcr from "../assets/img/coin/dcr.png";
import dgb from "../assets/img/coin/dgb.png";
import icx from "../assets/img/coin/icx.png";
import ont from "../assets/img/coin/ont.png";
import zil from "../assets/img/coin/zil.png";
import atom from "../assets/img/coin/atom.png";
import dai from "../assets/img/coin/dai.png";
import doge from "../assets/img/coin/doge.png";
import leo from "../assets/img/coin/leo.png";
import rep from "../assets/img/coin/rep.png";
import steem from "../assets/img/coin/steem.png";
import uni from "../assets/img/coin/uni.png";
import cel from "../assets/img/coin/cel.png";
import busd from "../assets/img/coin/busd.png";
import comp from "../assets/img/coin/comp.png";
import fil from "../assets/img/coin/fil.png";
import ftt from "../assets/img/coin/ftt.png";
import ht from "../assets/img/coin/ht.png";
import sushi from "../assets/img/coin/sushi.png";
import yfi from "../assets/img/coin/yfi.png";
import logomark from "../assets/img/coin/logomark.png";

type CoinIconMapType = {
  [key: string]: string;
}

export const coinIconMap: CoinIconMapType = {
  YFI: yfi,
  SUSHI: sushi,
  HT: ht,
  FTT: ftt,
  COMP: comp,
  FIL: fil,
  BUSD: busd,
  CEL: cel,
  UNI: uni,
  STEEM: steem,
  REP: rep,
  LEO: leo,
  DOGE: doge,
  DAI: dai,
  ATOM: atom,
  ZIL: zil,
  ONT: ont,
  ICX: icx,
  DGB: dgb,
  DCR: dcr,
  BTS: bts,
  AE: ae,
  ZRX: zrx,
  ZEC: zec,
  QTUM: qtum,
  OMG: omg,
  BTG: btg,
  BNB: bnb,
  ETC: etc,
  DASH: dash,
  MIOTA: miota,
  BTC: btc,
  ETH: eth,
  XRP: xrp,
  AAVE: aave,
  ADA: ada,
  BCH: bch,
  BCB: bnb,
  BSV: bsv,
  CRO: cro,
  DOT: dot,
  EOS: eos,
  LINK: link,
  LTC: ltc,
  MKR: mkr,
  NEO: neo,
  SNX: snx,
  THETA: theta,
  TRX: trx,
  USDC: usdc,
  USDT: usdt,
  VET: vet,
  WBTC: wbtc,
  XEM: xem,
  XMR: xmr,
  XTZ: xtz,
  XLM: xlm,
};

export const getCoinIcon = (icon: string): string => coinIconMap[icon] || logomark;
