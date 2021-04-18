function chunk(array: unknown[], size = 1): Array<[]> {
  if (size === null || array.length === 0) return [];

  const chunckedLen = Math.ceil(array.length / size);
  const chunked = Array(chunckedLen);
  let chunckedIndex = 0;
  let arrayIndex = 0;

  while (chunckedIndex < chunckedLen) {
    chunked[chunckedIndex++] = array.slice(arrayIndex, (arrayIndex += size));
  }

  return chunked;
}

export default chunk;
