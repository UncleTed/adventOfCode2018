
export class Grid {
    private locations: string[][];
    constructor(public width: number, public height: number) {
        this.locations = [];
        for(var h =0; h < height; h++) {
            this.locations[h] = [];
            for(var w =0; w< width;w++  ){
                this.locations[h][w] = 'z';
            }
        }
    }

    addOwner(x: number, y:number, owner: string) {
        this.locations[x][y] = owner;
    }
    getLocations() {
        return this.locations;
    }
}