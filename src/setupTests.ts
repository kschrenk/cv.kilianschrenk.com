import '@testing-library/jest-dom';
import MatchMediaMock from 'jest-matchmedia-mock';

let matchMedia: any;

beforeAll(() => {
    matchMedia = new MatchMediaMock();
});
 
afterEach(() => {
    matchMedia.clear();
});

