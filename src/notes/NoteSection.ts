import Card from "../cards/Card";
import NoteRow from "./NoteRow";

export default class NoteSection {
    private rows: Map<Card, NoteRow> = new Map<Card, NoteRow>();

    public constructor(items: Card[]) {
        for (let item of items) {
            this.rows.set(item, new NoteRow());
        }
    }

    public getKeys(): Card[] {
        return Array.from(this.rows.keys());
    }

    public get(key: Card): NoteRow {
        return this.rows.get(key);
    }
}
