import CategoryContentObj from '../models/CategoryContentObj';

export function calculateArrayLength(array: string[] | CategoryContentObj[]): number {
    return array.length
}

export function isLast(length: number, index: number): boolean {
    return (length - 1) === index;
}