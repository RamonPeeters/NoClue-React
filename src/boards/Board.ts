import BoardPosition from "./BoardPosition";
import BoardCell from "./cells/BoardCell";
import FloorBoardCell from "./cells/FloorBoardCell";
import WallBoardCell from "./cells/WallBoardCell";

export default class Board {
    private static readonly WIDTH: number = 12;
    private static readonly HEIGHT: number = 12;
    private readonly cells: BoardCell[] = [
        new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), 
        new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new WallBoardCell(), new WallBoardCell(), 
        new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new WallBoardCell(), new WallBoardCell(), 
        new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new WallBoardCell(), new WallBoardCell(), 
        new WallBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new WallBoardCell(), new WallBoardCell(), 
        new WallBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), 
        new WallBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), 
        new WallBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new WallBoardCell(), new WallBoardCell(), 
        new WallBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new WallBoardCell(), new WallBoardCell(), 
        new WallBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new WallBoardCell(), new WallBoardCell(), 
        new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new FloorBoardCell(), new FloorBoardCell(), new WallBoardCell(), new WallBoardCell(), 
        new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell(), new WallBoardCell()
    ];

    public get(x: number, y: number): BoardCell {
        if (!this.isInBounds(x, y)) {
            throw new RangeError(`Position ${x} ${y} is out of bounds`);
        }
        return this.cells[y * Board.HEIGHT + x];
    }

    public getCells(): BoardCell[] {
        return this.cells;
    }

    public hideAll(): void {
        for (let i: number = 0; i < this.cells.length; i++) {
            this.cells[i].hide();
        }
    }

    public isValidPosition(position: BoardPosition): boolean {
        if (!this.isInBounds(position.getX(), position.getY())) {
            return false;
        }
        return this.get(position.getX(), position.getY()).isAccessible();
    }

    private isInBounds(x: number, y: number): boolean {
        return x >= 0 && x < Board.HEIGHT && y >= 0 && y < Board.WIDTH;
    }
}
