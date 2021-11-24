import CardType from "./CardType";

export default class Card {
    private readonly cardType: CardType;
    private readonly cardValue: number;

    public constructor(cardType: CardType, cardValue: number) {
        this.cardType = cardType;
        this.cardValue = cardValue;
    }

    public getCardType(): CardType {
        return this.cardType;
    }

    public getCardValue(): number {
        return this.cardValue;
    }
}
