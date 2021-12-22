export default class DiceSet {
    private readonly firstRoll: number;
    private readonly secondRoll: number;

    public constructor(firstRoll: number, secondRoll: number) {
        this.firstRoll = firstRoll;
        this.secondRoll = secondRoll;
    }

    public getFirstRoll(): number {
        return this.firstRoll;
    }

    public getSecondRoll(): number {
        return this.secondRoll;
    }
}
