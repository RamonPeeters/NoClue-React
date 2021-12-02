export default abstract class BoardCell {
    public abstract getBackgroundColour(): string;
    public abstract highlight(): void;
    public abstract isAccessible(): boolean;
}