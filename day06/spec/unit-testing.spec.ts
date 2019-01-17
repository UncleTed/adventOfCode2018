
import 'mocha';
import chai = require('chai');
let expect = chai.expect;


function* alphabet() {
    var i: number = 'A'.charCodeAt(0) ;
    while(true) {
        yield String.fromCharCode(i++);
    }
}


describe('unit testing framework works', () => {
    it('expect should work', ()=>{
        let words = ['one', 'two', 'three'];
        expect(words.length).to.be.equal(3);
    });
});

describe('alphabet generator', () => {
    it('should generate alphabet letters', () => {
        var foo = alphabet();
        expect(foo.next().value).to.equal('A');
        expect(foo.next().value).to.equal('B');
        expect(foo.next().value).to.equal('C');
        expect(foo.next().value).to.equal('D');
    });
});
