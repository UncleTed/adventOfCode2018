import {ReadFile} from './readFile';
import {Barracks} from './Barracks';
import {SleepDetector} from './SleepDetector';
import {Guard} from './guard';

export class ShiftLog {
    timestamp: Date;
    message: string;
    constructor(timestamp: Date, message: string) {
        this.timestamp = timestamp;
        this.message = message;
    }
}

let logmessages: ShiftLog[];
let sortedLogmessages : ShiftLog[];
let listOfGuards : Guard[];
logmessages = [];
sortedLogmessages = [];
listOfGuards = [];

function online(line: string) {
    let date = new Date(line.substr(1, 16)+'Z');
    let message = line.split(']')[1];
    logmessages.push(new ShiftLog(date, message));
}

function onclose() {
    sortedLogmessages =  logmessages.sort((a: ShiftLog, b: ShiftLog): number => {
       if(a.timestamp < b.timestamp) {
           return -1;
       }
       else if( a.timestamp >  b.timestamp) {
           return 1;
       }
       else {
           return 0;
       }
    });

    sortedLogmessages.forEach(shiftLog => {
        Barracks.SINGLETON().findOrCreate(shiftLog);
        SleepDetector.SINGLETON().fellAsleep(shiftLog);
        SleepDetector.SINGLETON().wokeUp(shiftLog);
    });

    
    console.log('most sleepy ', Barracks.SINGLETON().mostSleepyGuard().id);
    console.log('minute ', Barracks.SINGLETON().mostSleepyGuard().mostLikelyToBeAsleepOn());
}

new ReadFile().readInputFile(online, onclose);
