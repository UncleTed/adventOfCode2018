import { Grid } from "../src/grid";
import chai = require('chai');
let expect = chai.expect;

describe('grid', ()=> {
    it('should have 12 rows and 10 columns', () => {
        let grid = new Grid(10,12);
        expect(10).to.equal(grid.width);
        expect(12).to.equal(grid.height);
    });

    it('should actually have height 12 and width 10', () => {
        let grid = new Grid(10,12);
        expect(10).to.be.equal(grid.getLocations().length);
        expect(12).to.be.equal(grid.getLocations()[0].length);
    });

    it('should iterate through the array columns (x) first, then rows(y)', () => {
        let grid = new Grid(5,7);
        for(var x = 0; x < 5; x++) {
            for(var y=0; y < 7; y++) {
                grid.addOwner(x,y,x+','+y);
            };
        };

        let actualLocations = grid.getLocations();

        for(var x = 0; x< 5; x++) {
            for (var y = 0; y< 7; y++) {
                expect(grid.getValue(x,y)).to.equal(x+','+y);
            }
        }
    });
})