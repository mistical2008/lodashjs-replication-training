function difference(source: unknown[], filter: unknown[]): unknown[] {
  const result = source.slice();

  for (let i = 0, len = source.length; i < len; i++) {
    for (const fitem of filter) {
      if (theSameValue(result[i], fitem)) {
        result.splice(i, 1);
      }
    }
  }

  return result;
}

function theSameValue(sval: unknown, fval: unknown): boolean | undefined | number {
  if (typeof sval !== typeof fval) {
    return false;
  }
  if (typeof sval === 'number') {
    if (Number.isNaN(sval) && Number.isNaN(fval)) {
      return true;
    }
    if (sval === +0 && fval === -0) {
      return true;
    }
    if (sval === -0 && fval === +0) {
      return true;
    }
  }
  if (sval === fval) {
    return true;
  }
  return false;
}
// console.log(difference([1, '2', 2, [4]], [3, [4], 1, '2']));

export default difference;
