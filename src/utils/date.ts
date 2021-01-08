/**
 *
 * all method refer to: https://www.30secondsofcode.org/js/t/date/p/1
 */

/**
 * formatDuration(34325055574);
 * // '397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds'
 * @param ms
 */
export const formatDuration = (ms: number) => {
  if (ms < 0) ms = -ms
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000,
  }
  return Object.entries(time)
    .filter(val => val[1] !== 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
    .join(', ')
}

/**
 *
 * EXAMPLES:
 * addWeekDays(new Date('Oct 09, 2020'), 5); // 'Oct 16, 2020'
 * addWeekDays(new Date('Oct 12, 2020'), 5); // 'Oct 19, 2020'
 *
 * @param startDate
 * @param count
 */
export const addWeekDays = (startDate: Date, count: number) =>
  Array.from({ length: count }).reduce((date: Date) => {
    date = new Date(date.setDate(date.getDate() + 1))
    if (date.getDay() % 6 === 0) date = new Date(date.setDate(date.getDate() + (date.getDay() / 6 + 1)))
    return date
  }, startDate)

/**
 *
 * EXAMPLES:
 * addDaysToDate('2020-10-15', 10); // '2020-10-25'
 * addDaysToDate('2020-10-15', -10); // '2020-10-05'
 *
 * @param date
 * @param n
 */
export const addDaysToDate = (date: Date, n: number) => {
  const d = new Date(date)
  d.setDate(d.getDate() + n)
  return d.toISOString().split('T')[0]
}

/**
 * quarterOfYear(new Date('07/10/2018')); // [ 3, 2018 ]
 * @param date
 */
export const quarterOfYear = (date = new Date()) => [Math.ceil((date.getMonth() + 1) / 3), date.getFullYear()]

export const minDate = (...dates) => new Date(Math.min(...dates))

/**
 *
 * EXAMPLES
 * const dates = [
    new Date(2017, 4, 13),
    new Date(2018, 2, 12),
    new Date(2016, 0, 10),
    new Date(2016, 0, 9)
  ];
 * @param dates
 */
export const maxDate = (...dates) => new Date(Math.max(...dates))

/**
 *
 * isDateValid('December 17, 1995 03:24:00'); // true
 * isDateValid('1995-12-17T03:24:00'); // true
 * isDateValid('1995-12-17 T03:24:00'); // false
 * isDateValid('Duck'); // false
 * isDateValid(1995, 11, 17); // true
 * isDateValid(1995, 11, 17, 'Duck'); // false
 * isDateValid({}); // false
 *
 * @param val
 */
export const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf())
