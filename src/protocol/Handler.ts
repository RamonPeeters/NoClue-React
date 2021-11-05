import Reader from './Reader';

export interface ReaderHandler {
    (reader: Reader): void;
}

export default class Handler {
    private readonly socket: WebSocket;
    private readonly receiveMessage: ReaderHandler;

    constructor(socket: WebSocket, receiveMessage: ReaderHandler) {
        this.socket = socket;
        this.socket.binaryType = "arraybuffer";
        this.socket.onopen = this.onOpen.bind(this);
        this.socket.onmessage = this.onMessage.bind(this);
        this.socket.onerror = this.onError.bind(this);
        this.socket.onclose = this.onClose.bind(this);
        this.receiveMessage = receiveMessage;
    }

    private onOpen(e: Event): void {
        console.log("OPEN");
    }

    private onMessage(e: MessageEvent<ArrayBuffer>): void {
        var byteArray = new Uint8Array(e.data);
        let reader = new Reader(byteArray);
        this.receiveMessage(reader);
    }

    private onError(e: Event): void {
        console.log("ERROR");
    }

    private onClose(e: CloseEvent): void {
        console.log("CLOSE");
        console.log(e.code, e.reason);
    }

    public sendMessage(message: Uint8Array): void {
        this.socket.send(message.buffer);
    }
}
