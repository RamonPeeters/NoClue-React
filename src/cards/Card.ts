import { ImageURISource } from "react-native";
import CardType from "./CardType";

export default abstract class Card {
    private readonly cardType: CardType;
    private readonly cardValue: number;
    private readonly image: ImageURISource;
    private readonly name: string;

    protected constructor(cardType: CardType, cardValue: number, image: ImageURISource, name: string) {
        this.cardType = cardType;
        this.cardValue = cardValue;
        this.image = image;
        this.name = name;
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

    public getName(): string {
        return this.name;
    }
}
