import {ReadFile} from './readFile';
import {Grid} from './grid';
import {Location} from './location';
import {Taxicab} from './taxicab';

let destinations: Location[];
let grid: Grid;
let taxicab = new Taxicab();


grid = new Grid(10, 10);
destinations = [];

function* generateAlphabet() {
    var i: number = 'A'.charCodeAt(0) ;
    while(true) {
        yield String.fromCharCode(i++);
    }
}

function findMinimumDistance(gridLocation: Location) {
    let min: number = 1000000;
    let owner = 'none';
    for(var l = 0; l < destinations.length; l++ ) {

        if(gridLocation.x == destinations[l].x && gridLocation.y == destinations[l].y) {
            return destinations[l].name;
        } else {
            let distance = taxicab.distance(destinations[l], gridLocation);
            if (distance < min) {
                min = distance;
                owner = destinations[l].name.toLowerCase();
            }
        }
    }
    return owner;
}

let alphabet = generateAlphabet();

function online(input: string) {
    let xy = input.split(',');
    destinations.push(new Location(Number(xy[0]),Number(xy[1]),alphabet.next().value));
}

function onclose() {
    for(var x = 0;  x < grid.width;x++) {
        for(var y = 0; y < grid.height; y++) {
            let owner = findMinimumDistance( new Location(x,y,''));
            grid.addOwner(x,y,owner);
        }
    }
    console.table(grid.getLocations());
}


new ReadFile().readInputFile(online, onclose);