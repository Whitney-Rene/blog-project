import moment from 'moment';

export const apiUrl = 'http://localhost:1012';

export function formatTime (rawDate) {
    const dateObject = moment(rawDate);
    const formattedDate = dateObject.format('MMMM D, YYYY');
    return formattedDate;
}