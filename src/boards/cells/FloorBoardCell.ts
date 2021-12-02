import BoardCell from "./BoardCell";

export default class FloorBoardCell extends BoardCell {
    private static readonly BACKGROUND_COLOUR: string = "lightgrey";
    private static readonly HIGHLIGHTED_BACKGROUND_COLOUR: string = "lime";
    private highlighted: boolean = false;

    public getBackgroundColour(): string {
        return this.highlighted ? FloorBoardCell.HIGHLIGHTED_BACKGROUND_COLOUR : FloorBoardCell.BACKGROUND_COLOUR;
    }
    
    public highlight(): void {
        this.highlighted = true;
    }

    public isAccessible(): boolean {
        return this.highlighted;
    }
}
