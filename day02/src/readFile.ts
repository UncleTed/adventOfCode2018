import * as fs from'fs';
import * as readline from 'readline';
export class ReadFile {
    constructor() {
        
    }

    readInputFile(eachLine: (input: string) => void, onClose: () => void) {
        let reader = readline.createInterface({
            input: fs.createReadStream('./input')
        });
        reader.on('line', eachLine);
        reader.on('close', onClose);
    }
}