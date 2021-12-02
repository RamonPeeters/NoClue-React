import NoClue from "../../NoClue";
import BoardCell from "./BoardCell";

export default class FloorBoardCell extends BoardCell {
    private static readonly BACKGROUND_COLOUR: string = "lightgrey";
    private static readonly HIGHLIGHTED_BACKGROUND_COLOUR: string = "lime";
    private static readonly BLINK_BACKGROUND_COLOUR: string = "yellow";
    private highlighted: boolean = false;
    private blinking: boolean = false;

    public getBackgroundColour(): string {
        if (this.highlighted) {
            return FloorBoardCell.HIGHLIGHTED_BACKGROUND_COLOUR;
        }
        if (this.blinking) {
            return FloorBoardCell.BLINK_BACKGROUND_COLOUR;
        }
        return FloorBoardCell.BACKGROUND_COLOUR;
    }
    
    public highlight(): void {
        this.highlighted = true;
    }

    public hide(): void {
        this.highlighted = false;
    }

    public blink(): void {
        this.blinking = true;
    }

    public isAccessible(): boolean {
        return this.highlighted;
    }
}
