import Note from "./Note";

export default class NoteRow {
    private invalidated: boolean = false;
    private notes: Map<number, Note> = new Map<number, Note>();

    public getOrCreateNote(player: number): Note {
        if (!this.notes.has(player)) {
            this.notes.set(player, new Note());
        }
        return this.notes.get(player);
    }

    public isInvalidated(): boolean {
        return this.invalidated;
    }

    public setInvalidated(invalid: boolean): void {
        this.invalidated = invalid;
    }
}
