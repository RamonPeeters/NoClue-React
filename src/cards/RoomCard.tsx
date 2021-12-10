import { ImageURISource } from "react-native";
import Card from "./Card";
import CardType from "./CardType";

export default class RoomCard extends Card {
    private static readonly ROOMS: RoomCard[] = [];

    public static readonly HALL: RoomCard = new RoomCard(0, require('../assets/cards/rooms/hall.png'));
    public static readonly LOUNGE: RoomCard = new RoomCard(1, require('../assets/cards/rooms/lounge.png'));
    public static readonly DINING_ROOM: RoomCard = new RoomCard(2, require('../assets/cards/rooms/dining_room.png'));
    public static readonly KITCHEN: RoomCard = new RoomCard(3, require('../assets/cards/rooms/kitchen.png'));
    public static readonly BALLROOM: RoomCard = new RoomCard(4, require('../assets/cards/rooms/ballroom.png'));
    public static readonly CONSERVATORY: RoomCard = new RoomCard(5, require('../assets/cards/rooms/conservatory.png'));
    public static readonly BILLIARD_ROOM: RoomCard = new RoomCard(6, require('../assets/cards/rooms/billiard_room.png'));
    public static readonly LIBRARY: RoomCard = new RoomCard(7, require('../assets/cards/rooms/library.png'));
    public static readonly STUDY: RoomCard = new RoomCard(8, require('../assets/cards/rooms/study.png'));

    private constructor(value: number, image: ImageURISource) {
        super(CardType.WEAPON, value, image);
        RoomCard.ROOMS.push(this);
    }

    public static getValues(): Card[] {
        return RoomCard.ROOMS;
    }

    public static byId(id: number): RoomCard {
        for (let i: number = 0; i < RoomCard.ROOMS.length; i++) {
            let card: RoomCard = RoomCard.ROOMS[i];
            if (card.getCardValue() == id) {
                return card;
            }
        }
        throw new Error("Invalid id for room card: " + id);
    }
}
