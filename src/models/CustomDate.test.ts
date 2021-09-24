import CustomDate from './CustomDate'; 

it('returns the correct date string', () => {
    const now = new CustomDate(new Date('December 25, 1995 23:15:30'));
    expect(now.toString()).toEqual('1995-12-25');
})