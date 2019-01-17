import {Location} from './location';

export class Grid {
    private locations: number[][];
    constructor(width: number, height: number) {
        this.locations = [];
        for(var w =0;w++; w< width  ){
            this.locations[w] = [];
            for(var h =0; h++; h < height) {
                this.locations[w][h] = -1;
            }
        }
    }

    getHeight() {
        return this.locations.length;
    }
    getWidth() {
        return this.locations[0].length;
    }

}