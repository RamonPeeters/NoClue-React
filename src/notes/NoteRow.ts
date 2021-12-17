import Note from "./Note";

export default class NoteRow {
    private notes: Map<number, Note> = new Map<number, Note>();

    public getOrCreateNote(player: number): Note {
        if (!this.notes.has(player)) {
            this.notes.set(player, new Note());
        }
        return this.notes.get(player);
    }
}
