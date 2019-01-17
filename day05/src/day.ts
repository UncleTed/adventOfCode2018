import {ReadFile} from './readFile';
import {ReducePolymer} from './reducePolymerPush'

let polymer = '';

function online(input: string) {
    polymer = input;
}

function onclose() {
    let answer = new ReducePolymer().reduceUnits(polymer);
    console.log('answer is ',answer, ' length: ', answer.length);
}


new ReadFile().readInputFile(online, onclose);