const { DateTime } = require('luxon');

class timeZone {
    // Day of the month
    day() {
        const day = DateTime.local().setZone('Africa/Lagos').day.toString().padStart(2, '0');
        return (day).toString();
    };

    // Week day
    weekday() {
        return (new Date()).getDay()
    }

    // Previous day
    yesday() {
        const yesterday = DateTime.local().setZone('Africa/Lagos').minus({ days: 1 }).day.toString().padStart(2, '0');
        return yesterday;
    };

    // Current Month
    month() {
        const month = DateTime.local().setZone('Africa/Lagos').month.toString().padStart(2, '0');
        return (month).toString();
    };

    // Current Year
    year() {
        const year = DateTime.local().setZone('Africa/Lagos').year;
        return (year).toString();
    };

    // Current Date
    date() {
        const date = Date.now();
        return (date).toString();
    };

    // Current Time
    time() {
        const time = DateTime.local().setZone('Africa/Lagos').toFormat('HH:mm');
        return (time).toString();
    }

    // Day of the week
    dayOfWeek(dayNumber) {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      
        if (dayNumber >= 0 && dayNumber < daysOfWeek.length) {
          return daysOfWeek[dayNumber];
        }

        return "Invalid day number";
    }

    // UTC time with +/-2 validation --->>> My Func
    getCurrentUTC() {
        const currentUTC = new Date();
      
        // Validation range (+/-2 hours)
        const validationRangeInHours = 2;
      
        // Calculate the lower and upper bounds of the validation range
        const lowerBound = new Date(currentUTC.getTime() - validationRangeInHours * 60 * 60 * 1000);
        const upperBound = new Date(currentUTC.getTime() + validationRangeInHours * 60 * 60 * 1000);
      
        // Get the current UTC time within the validation range and format it as needed
        const currentUTCWithinRange = new Date(Math.min(Math.max(currentUTC, lowerBound), upperBound));
        const formattedUTC = currentUTCWithinRange.toISOString();
      
        // Remove milliseconds from the formatted timestamp
        const formattedUTCWithoutMilliseconds = formattedUTC.replace(/\.\d{3}Z$/, 'Z');
      
        return formattedUTCWithoutMilliseconds;
    }

    // With Luxon
    getCurrentUtcWithLuxon() {
        const utcTime = DateTime.utc();
        return utcTime.toISO({ includeMillis: true });
    }
}

module.exports = new timeZone()