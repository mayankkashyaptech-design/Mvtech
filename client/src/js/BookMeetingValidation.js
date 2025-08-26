export default function BookMeetingValidation(data) {
    let NewError = {};

    if (!data.name) {
        NewError.name = "name is required!!";
    }

    if (!data.preferred_date) {
        NewError.preferred_date = "date is required!!";
    } else {
        // Convert input date (expected in "yyyy-mm-dd" format) to Date
        const inputDate = new Date(data.preferred_date);

        // Get today's date with time cleared
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (inputDate < today) {
            NewError.preferred_date = "date for book meeting must not be in the past!";
        }
    }

    if (data.message) {
        let wordCount = countWords(data.message);
        if (wordCount < 25) {
            NewError.message = "message must be at least 25 words long";
        }
    }

    return {
        error: NewError,
        length: Object.keys(NewError).length
    };
}

// Only needed if your date input is "dd/mm/yy"
function parseDate(dateStr) {
    const [day, month, year] = dateStr.split('/');
    const fullYear = year.length === 2 ? 2000 + parseInt(year) : parseInt(year);
    return new Date(fullYear, parseInt(month) - 1, parseInt(day)); // month is 0-based
}

function countWords(text) {
    const words = text.trim().split(' ');
    let count = 0;

    for (let word of words) {
        if (word !== '') count++;
    }

    return count;
}
