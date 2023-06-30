type IntersectionFn = <A>(xs1: A[] | []) => (xs2: A[] | []) => A[] | [];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const intersection: IntersectionFn = (xs1) => (xs2) => {
  const arr1 = [...xs1];
  const arr2 = [...xs2].sort();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return arr1.reduce((prev, item1) => {
    const found = arr2.find((item2) => item1 === item2);

    if (found) return [...prev, found];
    return prev;
  }, []);
};

export default intersection;
