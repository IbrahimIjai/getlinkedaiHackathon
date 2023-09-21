
import moment from 'moment';

export function useFormatDate(unixTimestamp:number) {
    return moment.unix(unixTimestamp).format("MMMM D, YYYY")
}
