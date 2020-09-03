const swedetishMonths = [
  'januari',
  'februari',
  'mars',
  'april',
  'maj',
  'juni',
  'juli',
  'augusti',
  'september',
  'oktober',
  'november',
  'december',
];

const getDate = (data) => {
  if (!data) {
    return null;
  }

  const today = new Date();
  const [day, month] = data.split(' ');
  const monthIndex = swedetishMonths.indexOf(month.toLowerCase());
  const newDate = new Date(today.getFullYear(), monthIndex, parseInt(day));
  if (newDate.getMonth() > today.getMonth()) {
    newDate.setFullYear(newDate.getFullYear() - 1);
  }
  return newDate;
};

module.exports = {
  getDate,
  swedetishMonths,
};
