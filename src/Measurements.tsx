// TODO: add support for switching to Imperial
const mode = 'Metric';

export function getDistance(value: number | string) {
  if (typeof value === 'string') {
    value = parseInt(value, 10) / 100;
  }
  if (mode === 'Metric') {
    return `${value}m`;
  }
  if (mode === 'Imperial') {
    return `${(value / 3) * 10}ft`;
  }
}
