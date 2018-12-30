
import {ReadFile} from './readFile';

let currentFrequency = 0;

function oneLine(line: string) {
    let number = Number(line);
    currentFrequency += number;
}

function onClose() {
    console.log("current frequency ", currentFrequency);
}

new ReadFile().readInputFile(oneLine, onClose);