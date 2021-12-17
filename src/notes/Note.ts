export default class Note {
    private marked: boolean = false;

    public isMarked(): boolean {
        return this.marked;
    }

    public toggleMarked(): void {
        this.marked = !this.marked;
    }
}
