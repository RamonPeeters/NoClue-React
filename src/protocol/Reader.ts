export default class Reader {
    private readonly buffer: Uint8Array;
    private index: number;
    
    constructor(buffer: ArrayBuffer) {
        this.buffer = new Uint8Array(buffer);
        this.index = 0;
    }

    public readBoolean(): boolean {
        return this.readByte() == 1;
    }

    public readByte(): number {
        let result = this.buffer[this.index];
        this.index++;
        return result;
    }

    public readInt(): number {
        let result = 0;
        for (let offset = 0; offset < 4; offset++) {
            result += (this.buffer[this.index + offset] << ((3 - offset) * 8));
        }
        this.index += 4;
        return result;
    }
}
