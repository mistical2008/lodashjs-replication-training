import chunk from './chunk'
import {compareArrays} from '../utils/index'

// Define func arguments type
type Params = Parameters<typeof chunk>

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

const array4: unknown[] = [];
const arrayChuncked4: unknown[] = [];

// eslint-disable-next-line no-undef
describe('chunk():', () => {
  compareArrays(chunk, [array, arrayChuncked[0].length] as Params, arrayChuncked)
  compareArrays(chunk, [array2, arrayChuncked2[0].length] as Params, arrayChuncked2)
  compareArrays(chunk, [array3, arrayChuncked3[0].length] as Params, arrayChuncked3)
  compareArrays(chunk, [array4] as Params, arrayChuncked4)
}
)
