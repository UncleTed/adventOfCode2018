import {ReadFile} from './readFile';
import {Grid} from './grid';
import {Location} from './location';
import {Taxicab} from './taxicab';

let locations: Location[];
let grid: Grid;
let taxicab = new Taxicab();


grid = new Grid(10, 10);
locations = [];

function* generateAlphabet() {
    var i: number = 'A'.charCodeAt(0) ;
    while(true) {
        yield String.fromCharCode(i++);
    }
}

function findMinimumDistance(gridLocation: Location) {
    let min: number = 1000000;
    console.log('min ', min);
    let owner = 'none';
    for(var l = 0; l < locations.length; l++ ) {

        let distance = taxicab.distance(locations[l], gridLocation);
        if (distance < min) {
            min = distance;
            owner = locations[l].name;
        }
    }
    return owner;
}

let alphabet = generateAlphabet();

function online(input: string) {
    let xy = input.split(',');
    locations.push(new Location(Number(xy[0]),Number(xy[1]),alphabet.next().value));
}

function onclose() {
    for(var x = 1;  x <= grid.width;x++) {
        for(var y = 1; y <= grid.height; y++) {
            let owner = findMinimumDistance( new Location(x,y,''));
            grid.addDistance(x,y,owner);
        }
    }
    console.table(grid.getLocations());
}


new ReadFile().readInputFile(online, onclose);