import Card from "./cards/Card";
import CardType from "./cards/CardType";
import RoomCard from "./cards/RoomCard";
import SuspectCard from "./cards/SuspectCard";
import WeaponCard from "./cards/WeaponCard";

export default class Util {
    private constructor() {}

    public static getCard(type: CardType, value: number): Card {
        switch (type) {
            case CardType.ROOM: {
                return RoomCard.byId(value);
            }
            case CardType.SUSPECT: {
                return SuspectCard.byId(value);
            }
            case CardType.WEAPON: {
                return WeaponCard.byId(value);
            }
            default: {
                throw new Error(`Invalid card type ${type}`);
            }
        }
    }
}
