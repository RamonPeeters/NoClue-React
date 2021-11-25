import BoardCell from "./BoardCell";

export default class WallBoardCell extends BoardCell {
    public getBackgroundColour(): string {
        return "grey";
    }
}
