export class Location {
    isFinite: boolean;
    constructor(public x: number, public y: number) {
        this.isFinite = false;
    }

    isInfiniteComparedTo(other: Location[]) :boolean {
        if (other.length < 2) {
            return true;
        }
        let nobodyToTheWest = other.every(o=> {
            return this.x < o.x;
        });
        let nobodyToTheNorth = other.every(o=> {
            return this.y > o.y
        });
        let nobodyToTheSouth = other.every(o=> {
            return this.y < o.y;
        });
        let nobodyToTheEast = other.every(o=> {
            return this.x > o.x;
        });
        return  nobodyToTheWest || nobodyToTheNorth || nobodyToTheEast || nobodyToTheSouth;
    }
    
}