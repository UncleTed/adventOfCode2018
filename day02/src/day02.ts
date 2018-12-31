import { ReadFile} from './readFile';

interface Dictionary {
    [Key: string]: number;
}

class Counter {
    howMany: number;
    dictionary : Dictionary = {};
    constructor( howMany: number) {
        this.howMany = howMany;
    }

    hasDesiredAmount(boxId: string) : boolean {
        let found = false;
        for(var char of boxId) {
            if(this.dictionary[char]) {
                this.dictionary[char] +=1;
            }
            else {
                this.dictionary[char] = 1;
            }
        }
        Object.keys(this.dictionary).forEach((key) => {
            if(this.dictionary[key] == this.howMany) {
                found = true;

            }
        });
        console.log('counter for ' , boxId , ' is ', this.dictionary);
        return found;
    }

}

class Checksum {
    twos: number;
    threes: number;
    constructor() {
        this.twos = 0;
        this.threes = 0;
    }
 
    countLetters(boxId: string) {
        if(new Counter(2).hasDesiredAmount(boxId)) {
            this.twos++;
        }
        if(new Counter(3).hasDesiredAmount(boxId)) {
            this.threes++;
        }
    }
}
let checksum = new Checksum();
new ReadFile().readInputFile((line) => {
    console.log(line);
    checksum.countLetters(line);
}, ()=>{
    console.log('checksum is ', checksum.twos, ' * ', checksum.threes ,' = ', checksum.twos * checksum.threes );
});

