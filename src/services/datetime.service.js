const shortDateTimeFormatter = new Intl.DateTimeFormat('en-GB', {
  dateStyle: 'short'
});

export const getShortDateTime = (datetime) => {
  return shortDateTimeFormatter.format(datetime);
};

const longDateTimeFormatter = new Intl.DateTimeFormat('en-GB', {
  dateStyle: 'full',
  timeStyle: 'long'
});

export const getLongDateTime = (datetime) => {
  return longDateTimeFormatter.format(datetime);
};
