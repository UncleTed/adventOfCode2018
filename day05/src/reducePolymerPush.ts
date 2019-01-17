export class ReducePolymer {
    reduction: string[];

    constructor() {
        this.reduction = [];
    }
    
    
    oppositePolarity(a: string, b: string) : boolean {
        return Math.abs(a.charCodeAt(0) - b.charCodeAt(0)) == 32;
    }


    reduceUnits(polymer: string) : string[] {
    
        for(var i =0; i<polymer.length;i++) {
            if(this.reduction.length ==0) {
                this.reduction.push(polymer[i]);
            }
            else if( this.oppositePolarity(polymer[i], this.reduction[this.reduction.length-1]) ) {
                this.reduction.pop();
            }
            else {
                this.reduction.push(polymer[i]);
            }

        }

        return this.reduction;
    }
}