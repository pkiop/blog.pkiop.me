export const getYMD = (input: Date) => {
  const year = input.getFullYear();
  const month = input.getMonth();
  const date = input.getDate();
  return `${year}. ${month + 1}. ${date}`;
};

export default {};
