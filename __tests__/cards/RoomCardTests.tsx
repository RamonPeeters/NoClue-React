import RoomCard from '../../src/cards/RoomCard';

it('throws an error because the id is invalid', () => {
    expect(() => RoomCard.byId(-1)).toThrowError();
});

it('gets the hall room card', () => {
    expect(RoomCard.byId(0)).toEqual(RoomCard.HALL);
});

it('gets the lounge room card', () => {
    expect(RoomCard.byId(1)).toEqual(RoomCard.LOUNGE);
});

it('gets the dining room room card', () => {
    expect(RoomCard.byId(2)).toEqual(RoomCard.DINING_ROOM);
});

it('gets the kitchen room card', () => {
    expect(RoomCard.byId(3)).toEqual(RoomCard.KITCHEN);
});

it('gets the ballroom room card', () => {
    expect(RoomCard.byId(4)).toEqual(RoomCard.BALLROOM);
});

it('gets the conservatory room card', () => {
    expect(RoomCard.byId(5)).toEqual(RoomCard.CONSERVATORY);
});

it('gets the billiard room room card', () => {
    expect(RoomCard.byId(6)).toEqual(RoomCard.BILLIARD_ROOM);
});

it('gets the library room card', () => {
    expect(RoomCard.byId(7)).toEqual(RoomCard.LIBRARY);
});

it('gets the study room card', () => {
    expect(RoomCard.byId(8)).toEqual(RoomCard.STUDY);
});
