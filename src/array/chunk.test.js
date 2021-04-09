const chunk = require('./chunk')

const array = [2, 3, 6, 10, 12, 40, 8, 5, 9, 33]
const arrayChuncked = [[2, 3, 6], [10, 12, 40], [8, 5, 9], [33]]

const array2 = [2, 3, 6, 10, 12, 40, 8, 5, 9, 28, 10, 12, 40, 8, 5, 9, 33]
const arrayChuncked2 = [
  [2, 3, 6, 10],
  [12, 40, 8, 5],
  [9, 28, 10, 12],
  [40, 8, 5, 9],
  [33]
]

const array3 = [2, 3, 6, 10, 12, 40, 8, 5, 9, 33]
const arrayChuncked3 = [[2, 3], [6, 10], [12, 40], [8, 5], [9, 33]]

const array4 = [];
const arrayChuncked4 = [];

function chunkTest(array, chuncked, size = null) {
  const strChunked = JSON.stringify(chuncked)
  const strChunkedFromFunc = JSON.stringify(chunk(array, size));
  /* eslint-disable no-undef */
  test(`should return ${strChunked} `, () => {
    expect(strChunkedFromFunc).toBe(strChunked)
  })
}

// eslint-disable-next-line no-undef
describe('chunk():', () => {
  chunkTest(array, arrayChuncked, arrayChuncked[0].length)
  chunkTest(array2, arrayChuncked2, arrayChuncked2[0].length)
  chunkTest(array3, arrayChuncked3, arrayChuncked3[0].length)
  chunkTest(array4, arrayChuncked4)
}
)
