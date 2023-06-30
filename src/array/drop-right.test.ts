import { compareArrays } from '../utils';
import dropRight from './drop-right';

describe('drop', () => {
  describe('drop n-elems', () => {
    const as = [1, 2, 3, 4, 5, 6];
    const n = 2;

    compareArrays(dropRight, [as, n], [1, 2, 3, 4]);
  });

  describe('no drop on zero', () => {
    const as = [1, 2, 3, 4, 5, 6];
    const n = 0;

    compareArrays(dropRight, [as, n], as);
  });
});
