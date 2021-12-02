import BoardCell from "./BoardCell";

export default class WallBoardCell extends BoardCell {
    public getBackgroundColour(): string {
        return "grey";
    }

    public highlight(): void {}
    public hide(): void {}
    public blink(): void {}

    public isAccessible(): boolean {
        return false;
    }
}
