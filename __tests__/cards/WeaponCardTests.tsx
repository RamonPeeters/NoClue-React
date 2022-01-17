import WeaponCard from '../../src/cards/WeaponCard';

it('throws an error because the id is invalid', () => {
    expect(() => WeaponCard.byId(-1)).toThrowError();
});

it('gets the revolver weapon card', () => {
    expect(WeaponCard.byId(0)).toEqual(WeaponCard.REVOLVER);
});

it('gets the dagger weapon card', () => {
    expect(WeaponCard.byId(1)).toEqual(WeaponCard.DAGGER);
});

it('gets the lead pipe weapon card', () => {
    expect(WeaponCard.byId(2)).toEqual(WeaponCard.LEAD_PIPE);
});

it('gets the rope weapon card', () => {
    expect(WeaponCard.byId(3)).toEqual(WeaponCard.ROPE);
});

it('gets the candlestick weapon card', () => {
    expect(WeaponCard.byId(4)).toEqual(WeaponCard.CANDLESTICK);
});

it('gets the wrench weapon card', () => {
    expect(WeaponCard.byId(5)).toEqual(WeaponCard.WRENCH);
});
