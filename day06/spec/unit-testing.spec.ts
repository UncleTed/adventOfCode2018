
import 'mocha';
import chai = require('chai');
let expect = chai.expect;

describe('unit testing framework works', () => {
    it('expect should work', ()=>{
        let words = ['one', 'two', 'three'];
        expect(words.length).to.be.equal(3);
    });
});
