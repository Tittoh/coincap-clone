import { WSS_URL } from "./constants";

/* eslint-disable @typescript-eslint/no-explicit-any */
type WsOnMessageType = ((this: WebSocket, ev: MessageEvent) => any) | null;
type WsOnErrorType = ((this: WebSocket, ev: Event) => any) | null;
type WsOnOpenType = ((this: WebSocket, ev: Event) => any) | null;
type WsOnCloseType = ((this: WebSocket, ev: CloseEvent) => any) | null;
/* eslint-enable @typescript-eslint/no-explicit-any */

class WebSocketService {
  private BASE_URL: string;

  private WS: WebSocket | null;

  constructor(URL: string) {
    this.BASE_URL = URL;
    this.WS = null;
  }

  public onMessage = (func: WsOnMessageType): void => {
    if (this.WS) {
      this.WS.onmessage = func;
    }
  }

  public onError = (func: WsOnErrorType): void => {
    if (this.WS) {
      this.WS.onerror = func;
    }
  }

  public onOpen = (func: WsOnOpenType): void => {
    if (this.WS) {
      this.WS.onopen = func;
    }
  }

  public onClose = (func: WsOnCloseType): void => {
    if (this.WS) {
      this.WS.onclose = func;
    }
  }

  public openConnection = (url?: string): void => {
    this.WS = new WebSocket(url || this.BASE_URL);
  }

  public closeConnection = (): void => {
    this.WS?.close();
    this.WS = null;
  };
}

const WssApi = new WebSocketService(WSS_URL);

export { WssApi, WebSocketService };
