import {ReadFile} from './readFile';

let boxIds: string[];
let matching: string[];
boxIds = [];
matching = [];

function difference(boxId1: string, boxId2: string) {
    let length = boxId1.length;
    let numberOfDifferentCharacters = 0;

    for(var i = 0; i < length; i++) {
        if(boxId1.charAt(i) != boxId2.charAt(i)) {
            numberOfDifferentCharacters++;
        }
    }
    return numberOfDifferentCharacters == 1;
}

function subtraction(left: string, right: string) {
    let result = '';
    for(var i = 0; i< left.length; i++) {
        if(left.charAt(i)==right.charAt(i))
            result += left.charAt(i);
    }
    return result;
}

function findOne(boxId: string, theRestOfTheIds: string[]) {
    if(theRestOfTheIds.length == 0 ) {
        return['',''];
    }
    let found= '';
    for(var id of theRestOfTheIds) {
        if (difference(boxId, id)) {
            found = id;
        }
    }
    if(found) {
        matching= [boxId, found];
    }
    else {
        findOne(theRestOfTheIds.shift() || '', theRestOfTheIds);
    }
}

new ReadFile().readInputFile((line)=> {
    boxIds.push(line);
}, () => {
    findOne(boxIds.shift()|| '', boxIds);
    console.log(subtraction(matching[0], matching[1]))
});

