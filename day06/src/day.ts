import {ReadFile} from './readFile';
import {Grid} from './grid';
import {Location} from './location';

let locations: Location[];

let grid = new Grid(10, 10);
locations = [];

function* generateAlphabet() {
    var i: number = 'A'.charCodeAt(0) ;
    while(true) {
        yield String.fromCharCode(i++);
    }
}

let alphabet = generateAlphabet();
function online(input: string) {
    let xy = input.split(',');
    locations.push(new Location(Number(xy[0]),Number(xy[1]),alphabet.next().value));
}

function onclose() {
    console.table(locations);
}


new ReadFile().readInputFile(online, onclose);