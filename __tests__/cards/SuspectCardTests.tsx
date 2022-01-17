import SuspectCard from '../../src/cards/SuspectCard';

it('throws an error because the id is invalid', () => {
    expect(() => SuspectCard.byId(-1)).toThrowError();
});

it('gets the red suspect card', () => {
    expect(SuspectCard.byId(0)).toEqual(SuspectCard.RED);
});

it('gets the yellow suspect card', () => {
    expect(SuspectCard.byId(1)).toEqual(SuspectCard.YELLOW);
});

it('gets the green suspect card', () => {
    expect(SuspectCard.byId(2)).toEqual(SuspectCard.GREEN);
});

it('gets the cyan suspect card', () => {
    expect(SuspectCard.byId(3)).toEqual(SuspectCard.CYAN);
});

it('gets the purple suspect card', () => {
    expect(SuspectCard.byId(4)).toEqual(SuspectCard.PURPLE);
});

it('gets the white suspect card', () => {
    expect(SuspectCard.byId(5)).toEqual(SuspectCard.WHITE);
});
