/**
 * Independent time operation tool to facilitate subsequent switch to dayjs
 */
import dayjs, { Dayjs } from 'dayjs';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const DATE_FORMAT = 'YYYY-MM-DD ';

export function formatToDateTime(
  date: dayjs.ConfigType = undefined,
  format = DATE_TIME_FORMAT,
): string {
  return dayjs(date).format(format);
}

export function formatToDate(date: dayjs.ConfigType = undefined, format = DATE_FORMAT): string {
  return dayjs(date).format(format);
}

export function _isADayjsObject(data) {
  return data instanceof Dayjs;
}

export const dateUtil = dayjs;
