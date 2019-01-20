
import 'mocha';
import { Location } from '../src/location';
import { Utils } from '../src/utils';
import chai = require('chai');
let expect = chai.expect;

describe('utils', () => {
    let utils = new Utils();
    describe('taxicab-distance', () => {

        it('distance between while on same x', ()=> {
            let a = new Location(10,20,'A');
            let b = new Location(10, 10,'B');
            expect(10).to.equal(utils.distance(a,b));
        });

        it('should not return a negative distance while on same x', () => {
            let bottom = new Location(100,100,'A');
            let top = new Location(100,200,'B');
            expect(100).to.equal(utils.distance(bottom, top));
        });

        it('should compute distance while on same y', ()=>{
            let left = new Location(0,56,'A');
            let right = new Location(22,56,'B');
            expect(22).to.equal(utils.distance(right, left));
            expect(22).to.equal(utils.distance(left, right));
        });

        it('distance when not in same x or in same y', () => {
            let one = new Location(2,2,'A');
            let other = new Location(5,11,'B');
            expect(12).to.equal(utils.distance(one,other));
            expect(12).to.equal(utils.distance(other,one));
        });

        it('should be zero', () => {
            let one = new Location(4,5,'A');
            expect(0).to.equal(utils.distance(one,one));
        });
        
    });

    describe('alphabet generator', () => {
        it('should generate alphabet letters', () => {
            var foo = utils.generateAlphabet();
            expect(foo.next().value).to.equal('A');
            expect(foo.next().value).to.equal('B');
            expect(foo.next().value).to.equal('C');
            expect(foo.next().value).to.equal('D');
        });
    });
});