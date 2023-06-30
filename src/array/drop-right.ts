// @ts-ignore
const dropRight = <A extends any[], B extends number>(as: A, b: B) => {
  if (b === 0) return as;
  return as.slice(0, b * -1);
};

export default dropRight;
