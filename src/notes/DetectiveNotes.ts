import RoomCard from "../cards/RoomCard";
import SuspectCard from "../cards/SuspectCard";
import WeaponCard from "../cards/WeaponCard";
import NoteSection from "./NoteSection";

export default class DetectiveNotes {
    private suspects: NoteSection = new NoteSection(SuspectCard.getValues());
    private weapons: NoteSection = new NoteSection(WeaponCard.getValues());
    private rooms: NoteSection = new NoteSection(RoomCard.getValues());

    public getSuspectNotes(): NoteSection {
        return this.suspects;
    }

    public getWeaponNotes(): NoteSection {
        return this.weapons;
    }

    public getRoomNotes(): NoteSection {
        return this.rooms;
    }
}
