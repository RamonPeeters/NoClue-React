import BoardCell from "./BoardCell";

export default class FloorBoardCell extends BoardCell {
    public getBackgroundColour(): string {
        return "lightgrey";
    }
}
