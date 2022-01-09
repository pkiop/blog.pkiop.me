export const getLocaleStringYMD = () => {
  return new Date()
    .toLocaleString()
    .split(',')[0]
    .split('/')
    .map((d) => d.padStart(2, '0'))
    .reduce((acc, d, idx) => {
      if (idx === 0) return acc + d;
      if (idx === 1) return acc + '-' + d;
      return d + '-' + acc;
    }, '');
};

export const getLocaleDate = () => {
  return new Date().toLocaleString();
};
