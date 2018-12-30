import * as fs from'fs';
import * as readline from 'readline';
export class ReadFile {
    constructor() {
        
    }

    readInputFile(eachLine, onClose) {
        let reader = readline.createInterface({
            input: fs.createReadStream('./input')
        });
        reader.on('line', eachLine);
        reader.on('close', onClose);
    }
}