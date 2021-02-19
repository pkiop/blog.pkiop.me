export const reduceStringTime = (time: string) => {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  const res = `${year} / ${month} / ${day} | ${hour} : ${min} : ${sec} `;
  return res;
};
