import intersection from './intersection';

describe('intersection', () => {
  describe('has intersection in one', () => {
    const as1 = [1, 2, 3];
    const as2 = [3, 4, 5];

    const res = intersection(as1)(as2);

    it('should be intersect with', () => {
      expect(res).toStrictEqual([3]);
    });
  });

  describe('has intersection in multiple', () => {
    const as1 = [1, 2, 3, 4];
    const as2 = [3, 4, 5];

    const res = intersection(as1)(as2);

    it('should be intersect with', () => {
      expect(res).toStrictEqual([3, 4]);
    });
  });

  describe('no intersection', () => {
    const as1 = [1, 2, 3];
    const as2 = [4, 5];

    const res = intersection(as1)(as2);

    it('should return empty array', () => {
      expect(res).toStrictEqual([]);
    });
  });

  describe('empty arrays', () => {
    const as1 = [];
    const as2 = [];

    const res = intersection(as1)(as2);

    it('just returns empty array', () => {
      expect(res).toStrictEqual([]);
    });
  });
});
