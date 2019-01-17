export class ReducePolymer {

    reduction: string;
    constructor() {
        this.reduction = '';
    }
     reduceUnits(polymer: string, i: number) : string {
     
        if(i == polymer.length) {
            return polymer;
        }
      

        
            for(var i=0;i<polymer.length -1; i++) {

            
                if(this.oppositePolarity(polymer[i], polymer[i+1])) {
                    let left = polymer.substring(0,i);
                    let right = polymer.substring(i+2);
                    return this.reduceUnits(left+right,i);
                }
            }
      return 'boo';
    }


 oppositePolarity(a: string, b: string) : boolean {
    return Math.abs(a.charCodeAt(0) - b.charCodeAt(0)) == 32;
}
    
}