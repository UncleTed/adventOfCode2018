import {Location} from './location';

export class Grid {
    private locations: Location[];
    constructor() {
        this.locations = [];
    }

    placeLocationOnGrid(location: Location) {
        this.locations.forEach( l => {
            if(l.x < location.x) {
            }
        });
    }


}