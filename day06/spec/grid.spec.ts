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
})