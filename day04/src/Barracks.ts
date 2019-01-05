import { ShiftLog} from './day'
import {Guard} from './guard';

export class Barracks {
    private static singleton: Barracks;
    private guards : Guard[];
    private onDuty: Guard;

    private constructor() {
        this.guards = [];
        this.onDuty = new Guard('empty');
    }

    public static SINGLETON() {
        return this.singleton || (this.singleton = new this());
    }

    findOrCreate(logMessage: ShiftLog) {
        let guardId = logMessage.message.split('begins')[0];
        if(logMessage.message.indexOf('begins shift') > -1) {
           
            let found = this.guards.filter(g=>{
                return g.id === guardId;
            });
            if(found.length > 0) {
                this.onDuty = found[0];
            } else {
                let guard = new Guard(guardId);
                this.onDuty = guard;
                this.guards.push(guard);
            }
        }
    }
    getCurrentGuard(): Guard {
        return this.onDuty;
    }

    mostSleepyGuard() : Guard {
      return  this.guards.sort((a,b) => {
        if(a.totalMinutesSlept > b.totalMinutesSlept) {
            return -1;
        }
        else if( a.totalMinutesSlept <  b.totalMinutesSlept) {
            return 1;
        }
        else {
            return 0;
        }
      })[0];
    }
}

