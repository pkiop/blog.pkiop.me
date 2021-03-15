export const reduceStringTime = (time: string) => {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  const res = { year, month, day, hour, min, sec };
  return res;
};

export const getNextDay = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate() + 1;
  return new Date(`${year}-${month}-${date}`);
};
