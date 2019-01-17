import {Location} from './location';

export class Taxicab {
    distance(first: Location, second: Location) : number {
        return Math.abs(first.y - second.y) + Math.abs(first.x - second.x);
    }
}