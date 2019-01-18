
export class Grid {
    private locations: string[][];
    constructor(public width: number, public height: number) {
        this.locations = [];
        for(var h =1; h <= height; h++) {
            this.locations[h] = [];
            for(var w =1; w<= width;w++  ){
                this.locations[h][w] = 'z';
            }
        }
    }

    addDistance(x: number, y:number, owner: string) {
        this.locations[x][y] = owner;
    }
    getLocations() {
        return this.locations;
    }
}