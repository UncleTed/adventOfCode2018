
import { ShiftLog} from './day';
import {Barracks} from './Barracks';
import {Guard} from './guard';

export class SleepDetector {
    private static singleton: SleepDetector;

    private constructor() {

    }

    public static  SINGLETON() {
        return this.singleton || (this.singleton = new this());
    }

    fellAsleep(logMessage: ShiftLog) {
        if(logMessage.message.indexOf('falls asleep') > -1) {
            Barracks.SINGLETON().getCurrentGuard().fallAsleep(logMessage.timestamp);
        }
    }
    wokeUp(logMessage: ShiftLog) {
        if(logMessage.message.indexOf('wakes up') > -1) {
            Barracks.SINGLETON().getCurrentGuard().wakeUp(logMessage.timestamp);
        }
    }
}