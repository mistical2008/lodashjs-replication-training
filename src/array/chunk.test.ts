import chunk from './chunk'
import {compareArrays} from '../utils/index'

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

const array4: any[] = [];
const arrayChuncked4: any[] = [];

// eslint-disable-next-line no-undef
describe('chunk():', () => {
  compareArrays(chunk, [array, arrayChuncked[0].length], arrayChuncked)
  compareArrays(chunk, [array2, arrayChuncked2[0].length], arrayChuncked2)
  compareArrays(chunk, [array3, arrayChuncked3[0].length], arrayChuncked3)
  compareArrays(chunk, [array4], arrayChuncked4)
}
)
