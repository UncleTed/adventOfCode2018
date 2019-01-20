import {Location} from './location';
export class Utils {
    distance(first: Location, second: Location) : number {
        return Math.abs(first.y - second.y) + Math.abs(first.x - second.x);
    };

    * generateAlphabet() {
        var i: number = 'A'.charCodeAt(0) ;
        while(true) {
            yield String.fromCharCode(i++);
        }
    }
}