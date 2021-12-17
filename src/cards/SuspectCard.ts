import { ImageURISource } from "react-native";
import Card from "./Card";
import CardType from "./CardType";

export default class SuspectCard extends Card {
    private static readonly SUSPECTS: SuspectCard[] = [];

    public static readonly RED: SuspectCard = new SuspectCard(0, "Red", require('../assets/cards/suspects/red.png'));
    public static readonly YELLOW: SuspectCard = new SuspectCard(1, "Yellow", require('../assets/cards/suspects/yellow.png'));
    public static readonly GREEN: SuspectCard = new SuspectCard(2, "Green", require('../assets/cards/suspects/green.png'));
    public static readonly CYAN: SuspectCard = new SuspectCard(3, "Cyan", require('../assets/cards/suspects/cyan.png'));
    public static readonly PURPLE: SuspectCard = new SuspectCard(4, "Purple", require('../assets/cards/suspects/purple.png'));
    public static readonly WHITE: SuspectCard = new SuspectCard(5, "White", require('../assets/cards/suspects/white.png'));

    private constructor(value: number, name: string, image: ImageURISource) {
        super(CardType.SUSPECT, value, image, name);
        SuspectCard.SUSPECTS.push(this);
    }

    public static getValues(): Card[] {
        return SuspectCard.SUSPECTS;
    }

    public static byId(id: number): SuspectCard {
        for (let i: number = 0; i < SuspectCard.SUSPECTS.length; i++) {
            let card: SuspectCard = SuspectCard.SUSPECTS[i];
            if (card.getCardValue() == id) {
                return card;
            }
        }
        throw new Error("Invalid id for suspect card: " + id);
    }
}
