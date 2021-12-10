import { ImageURISource } from "react-native";
import CardType from "./CardType";
import RoomCard from "./RoomCard";
import SuspectCard from "./SuspectCard";
import WeaponCard from "./WeaponCard";

export default abstract class Card {
    private readonly cardType: CardType;
    private readonly cardValue: number;
    private readonly image: ImageURISource;

    protected constructor(cardType: CardType, cardValue: number, image: ImageURISource) {
        this.cardType = cardType;
        this.cardValue = cardValue;
        this.image = image;
    }

    public getCardType(): CardType {
        return this.cardType;
    }

    public getCardValue(): number {
        return this.cardValue;
    }

    public getImageSource(): ImageURISource {
        return this.image;
    }
}
