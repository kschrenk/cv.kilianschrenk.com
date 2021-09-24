class CustomDate {
    day: string;
    month: string;
    year: string;    

    constructor(Date: Date) {
        this.day = this.dayToString(Date.getDate());
        this.month = this.monthToString(Date.getMonth());
        this.year = this.yearToString(Date.getUTCFullYear());
    }

    dayToString(day:number): string {
        return day.toString();
    }

    monthToString(month:number): string {
        if(month < 10) {
            return `0${month + 1}`;
        } 
        
        return `${month + 1}`;
    }

    yearToString(year: number): string {
        return `${year}`;
    }

    toString(): string {
        return this.year + '-' + this.month + '-' + this.day 
    }
}

export default CustomDate;