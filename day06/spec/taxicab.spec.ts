
import 'mocha';
import chai = require('chai');
import {Location} from '../src/location';
import {Taxicab} from '../src/taxicab';
let expect = chai.expect;

describe('taxicab-distance', () => {

    it('distance between while on same x', ()=> {
        let a = new Location(10,20,'A');
        let b = new Location(10, 10,'B');
        expect(10).to.equal(new Taxicab().distance(a,b));
    });

    it('should not return a negative distance while on same x', () => {
        let bottom = new Location(100,100,'A');
        let top = new Location(100,200,'B');
        expect(100).to.equal(new Taxicab().distance(bottom, top));
    });

    it('should compute distance while on same y', ()=>{
        let left = new Location(0,56,'A');
        let right = new Location(22,56,'B');
        expect(22).to.equal(new Taxicab().distance(right, left));
        expect(22).to.equal(new Taxicab().distance(left, right));
    });

    it('distance when not in same x or in same y', () => {
        let one = new Location(2,2,'A');
        let other = new Location(5,11,'B');
        expect(12).to.equal(new Taxicab().distance(one,other));
        expect(12).to.equal(new Taxicab().distance(other,one));
    });

    it('should be zero', () => {
        let one = new Location(4,5,'A');
        expect(0).to.equal(new Taxicab().distance(one,one));
    });
    
});