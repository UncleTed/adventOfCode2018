
export class Grid {
    private locations: string[][];
    constructor(public width: number, public height: number) {
        this.locations = [];
        for(var w =0; w< width;w++  ){
            this.locations[w] = [];
            for(var h =0; h < height; h++) {
                this.locations[w][h] = ' ';
            }
        }
    }

    addOwner(x: number, y:number, owner: string) {
        this.locations[x][y] = owner;
    }
    getLocations() {
        return this.locations;
    }
    getValue(x:number, y:number) : string {
        return this.locations[x][y];
    }
}