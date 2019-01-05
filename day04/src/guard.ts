
interface Dictionary {
    [Key: string]: number;
}

export class Guard {
    id: string;
    totalMinutesSlept: number;
    asleepAt: Date;
    minutesAfterMidnightWhenSleeping: Dictionary;

    constructor(id: string) {
        this.id = id;
        this.totalMinutesSlept = 0;
        this.asleepAt = new Date('0');
        this.minutesAfterMidnightWhenSleeping = {};
    }

    fallAsleep(alseep : Date) {
        this.asleepAt = alseep;

    }
    
    wakeUp(wakey: Date) {
        let mintuesAsleep = (wakey.getTime() - this.asleepAt.getTime()) / 1000 / 60 ;
        this.totalMinutesSlept += mintuesAsleep;
        for (var m = this.asleepAt.getUTCMinutes(); m < wakey.getUTCMinutes(); m++ ) {
            if(!this.minutesAfterMidnightWhenSleeping[m]) {
                this.minutesAfterMidnightWhenSleeping[m] =1;
            }
            else {
                this.minutesAfterMidnightWhenSleeping[m] += 1;
            }
        }
    }

    sleptHowLong():number {
        return this.totalMinutesSlept;
    }

    mostLikelyToBeAsleepOn() {
        let minute = '0';
        let max = 0;
        for(var key in Object.keys(this.minutesAfterMidnightWhenSleeping)) {
            if(this.minutesAfterMidnightWhenSleeping[key] > max) {
                minute = key;
                max = this.minutesAfterMidnightWhenSleeping[key];
            }
        }
        return minute;
    }
}