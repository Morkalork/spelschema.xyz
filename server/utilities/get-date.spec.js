const { getDate, swedetishMonths } = require('./get-date');

describe('getDate', () => {
  it('should handle an empty string', () => {
    const result = getDate();
    expect(result).toBe(null);
  });

  it('should be able to parse a date of the current month', () => {
    const d = new Date();
    const data = `1 ${swedetishMonths[d.getMonth()]}`;
    const result = getDate(data);
    expect(result).not.toBe(null);
    expect(result.getDate()).toBe(1);
    expect(result.getMonth()).toBe(d.getMonth());
    expect(result.getFullYear()).toBe(d.getFullYear());
  });

  it('should handle dates that are more than a year old', () => {
    const d = new Date();
    const data = `31 December`;
    const result = getDate(data);
    expect(result).not.toBe(null);
    expect(result.getDate()).toBe(31);
    expect(result.getMonth()).toBe(11);
    expect(result.getFullYear()).toBe(d.getFullYear() - 1);
  });
});
