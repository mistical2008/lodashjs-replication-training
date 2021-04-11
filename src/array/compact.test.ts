import compact from './compact'
import {compareArrays} from "../utils"

// Define func arguments type
type Params = Parameters<typeof compact>

const array = [2, false, "6", "", 12, NaN, 8, undefined, null, 33, "0", 0, "hello", "i'm not falsey"]
// const array = "hello"
const arrayCompact = [2, "6", 12, 8, 33, "0", "hello", "i'm not falsey"]

const array2 = [2, 3, 6, 10, 12, 40, 8, 5, 9, 28, 10, 12, 40, 8, 5, 9, 33]
const arrayCompact2 = [2, 3, 6, 10, 12, 40, 8, 5, 9, 28, 10, 12, 40, 8, 5, 9, 33]

const array3 = [2, 3, 6, 0, 10, 12, 40, 8, 5, 9, 33]
const arrayCompact3 = [2, 3, 6, 10, 12, 40, 8, 5, 9, 33]

const array4 = [false, undefined, null, "", NaN, 0];
const arrayCompact4: unknown[] = [];

// eslint-disable-next-line no-undef
describe('compact():', () => {
  compareArrays(compact, [array] as Params, arrayCompact)
  compareArrays(compact, [array2] as Params, arrayCompact2)
  compareArrays(compact, [array3] as Params, arrayCompact3)
  compareArrays(compact, [array4] as Params, arrayCompact4)
}
)
