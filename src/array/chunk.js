function chunk(array, size = 1) {
  if (size === null || array.length === 0) return [];

  const chunckedLen = Math.ceil(array.length / size)
  const chunked = Array(chunckedLen);
  let chunckedIndex = 0;
  let arrayIndex = 0;

  while (chunckedIndex < chunckedLen) {
    chunked[chunckedIndex++] = array.slice(arrayIndex, arrayIndex += size)
  }

  return chunked;
}

module.exports = chunk;

