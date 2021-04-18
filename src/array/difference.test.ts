import difference from './difference';
import { compareArrays } from '../utils/index';

describe('difference(source[], filter[])', () => {
  const src: any[] = [1, 2];
  const filter: any[] = [1, 3, 5];
  compareArrays(difference, [src, filter], [2]);

  const src2 = [1, '2'];
  const filter2 = [2, '2'];
  compareArrays(difference, [src2, filter2], [1]);

  const src3: any[] = [1, 2];
  const filter3: any[] = [];
  compareArrays(difference, [src3, filter3], [1, 2]);

  const src4: any[] = [1, 2];
  const filter4: any[] = [1, 2];
  compareArrays(difference, [src4, filter4], []);
});
