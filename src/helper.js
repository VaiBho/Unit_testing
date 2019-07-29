export const add = (a = 0, b = 0) => {
  const sum = parseFloat(a, 10) + parseFloat(b, 10);
  return !isNaN(sum) ? sum : 0;
};

export const getData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      // res(111);
      rej(12);
    }, 3000);
  });
};
