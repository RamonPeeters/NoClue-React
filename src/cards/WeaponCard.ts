import { ImageURISource } from "react-native";
import Card from "./Card";
import CardType from "./CardType";

export default class WeaponCard extends Card {
    private static readonly WEAPONS: WeaponCard[] = [];

    public static readonly REVOLVER: WeaponCard = new WeaponCard(0, "Revolver", require('../assets/cards/weapons/revolver.png'));
    public static readonly DAGGER: WeaponCard = new WeaponCard(1, "Dagger", require('../assets/cards/weapons/dagger.png'));
    public static readonly LEAD_PIPE: WeaponCard = new WeaponCard(2, "Lead Pipe", require('../assets/cards/weapons/lead_pipe.png'));
    public static readonly ROPE: WeaponCard = new WeaponCard(3, "Rope", require('../assets/cards/weapons/rope.png'));
    public static readonly CANDLESTICK: WeaponCard = new WeaponCard(4, "Candlestick", require('../assets/cards/weapons/candlestick.png'));
    public static readonly WRENCH: WeaponCard = new WeaponCard(5, "Wrench", require('../assets/cards/weapons/wrench.png'));

    private constructor(value: number, name: string, image: ImageURISource) {
        super(CardType.WEAPON, value, image, name);
        WeaponCard.WEAPONS.push(this);
    }

    public static getValues(): Card[] {
        return WeaponCard.WEAPONS;
    }
}
