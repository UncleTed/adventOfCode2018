import {ReadFile} from './readFile';
import {Grid} from './grid';
import {Location} from './location';
import {Utils} from './utils';

let destinations: Location[];
let grid: Grid;
let utils = new Utils();

destinations = [];

function findMinimumDistance(gridLocation: Location) {
    let min: number = 1000000;
    let owner = 'none';
    for(var l = 0; l < destinations.length; l++ ) {

        if(gridLocation.x == destinations[l].x && gridLocation.y == destinations[l].y) {
            return destinations[l].name;
        } 
    
        let distance = utils.distance(destinations[l], gridLocation);
         if (distance < min) {
            min = distance;
            owner = destinations[l].name.toLowerCase();
        }

    }
    return owner;
}

let alphabet = utils.generateAlphabet();

function online(input: string) {
    let xy = input.split(',');
    destinations.push(new Location(Number(xy[0]),Number(xy[1]),alphabet.next().value));
}

function printGrid() {
    let out = '';
    for(var y=0;y<grid.height;y++) {
        for(var x=0; x<grid.width;x++) {
            out += grid.getValue(x,y)+' ';
        }
        out += '\n';
    }
    console.log(out);
}



function onclose() {
    grid = new Grid(10,10);
    for(var x = 0;  x < grid.width;x++) {
        for(var y = 0; y < grid.height; y++) {
            let owner = findMinimumDistance( new Location(x,y,''));
            grid.addOwner(x,y,owner);
        }
    };
    printGrid();

}



new ReadFile().readInputFile(online, onclose);