
import 'mocha';
import chai = require('chai');
import {Location} from '../src/location';
let expect = chai.expect;

describe('location', () => {
    let a = new Location(1,1, 'A');
    let b = new Location(1,6, 'B');
    let c = new Location(8,3,'C');
    let d = new Location(3,4,'D');

   it('A should be infinite', () => {
       expect(a.isInfiniteComparedTo([b,c,d])).to.be.true;
   });

   it('should be infinite to only one other', () => {
       expect(b.isInfiniteComparedTo([d])).to.be.true;
       expect(d.isInfiniteComparedTo([b])).to.be.true;
   });

   it('should be infinite if there are no others', () => {
       expect(c.isInfiniteComparedTo([])).to.be.true;
   });
   it('B should be infinite', () => {
       expect(b.isInfiniteComparedTo([a,c,d])).to.be.true;
   });

   it('D should NOT be infinite', () => {
       expect(d.isInfiniteComparedTo([c,b,a])).to.be.false;
   });


});