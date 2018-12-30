import { ReadFile } from './readFile';

interface Dictionary<T> {
    [Key: string]: T;
}

class Twice {
    frequency: Dictionary<number> = {};
}
let frequencies = new Array();


function onLine(line: string) {
    let number = Number(line);
    frequencies.push(number);
}

function onClose() {
    let found =  false;
    let twice = new Twice();
    let currentFrequency = 0;
    while(!found) {
        for(let freq of frequencies) {
            currentFrequency += freq;
            if(twice[currentFrequency]) {
                console.log('found it: ', currentFrequency);
                found = true;
                break;
            }
            else {
                twice[currentFrequency] = true;
            }
        }
    }
}

new ReadFile().readInputFile(onLine, onClose);