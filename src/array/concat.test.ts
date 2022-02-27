import concat from './concat';
import { compareArrays } from '../utils/index';

// Define func arguments type
type Params = Parameters<typeof concat>

const array = [1, 2];
const append = [2, 3, [6], '10', [[12], 40], 8, 5, 9, 33];
const arrayMerged = [1, 2, 2, 3, [6], '10', [[12], 40], 8, 5, 9, 33];

const array2 = [[[2, 3], 6, 10], 12, 40, 8, [[5, 9]], 28, [[[10, 12, 40], 8], 5], 9, 33];
const append2 = [88, '2'];
const arrayMerged2 = [[[2, 3], 6, 10], 12, 40, 8, [[5, 9]], 28, [[[10, 12, 40], 8], 5], 9, 33, 88, '2'];

const array3 = [[2, 3, 6], [10, 12, 40], [8, 5, 9], [33]];
const arrayMerged3 = [[2, 3, 6], [10, 12, 40], [8, 5, 9], [33]];

const array4: unknown[] = [];
const arrayMerged4: unknown[] = [];

// eslint-disable-next-line no-undef
describe('concat():', () => {
  compareArrays(concat, [array, ...append] as Params, arrayMerged);
  compareArrays(concat, [array2, ...append2] as Params, arrayMerged2);
  compareArrays(concat, [array3] as Params, arrayMerged3);
  compareArrays(concat, [array4] as Params, arrayMerged4);
});
