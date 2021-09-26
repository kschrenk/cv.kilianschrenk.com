import {calculateArrayLength, isLast} from './functions';
import {cvObj} from '../App';

it('calculates the correct length of array with strings', () => {
    const list = ['string1', 'string2', 'string3'];
    expect(calculateArrayLength(list)).toEqual(3);
})

it('calculates the correct length of array with objects', () => {
    const categoryContentObj = [...cvObj[0]['content']];
    expect(calculateArrayLength(categoryContentObj)).toEqual(4);
})

it('returns cero when array is empty', () => {
    expect(calculateArrayLength([])).toBe(0);
})

it('returns true when last item', () => {
    expect(isLast(4,3)).toBeTruthy();
})

it('returns false when index unequal length', () => {
    expect(isLast(1,3)).toBeFalsy();
})