import { compareArrays } from '../utils';
import drop from './drop';

describe('drop', () => {
  describe('drop n-elems', () => {
    const as = [1, 2, 3, 4, 5, 6];
    const n = 2;

    compareArrays(drop, [as, n], [3, 4, 5, 6]);
  });

  describe('no drop on zero', () => {
    const as = [1, 2, 3, 4, 5, 6];
    const n = 0;

    compareArrays(drop, [as, n], as);
  });
});
