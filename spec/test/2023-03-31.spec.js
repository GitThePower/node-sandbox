const { binarySearch } = require('../../src/2023-03-31');

describe('binary search', () => {
  it('should get the desired number in list where the number exists', () => {
    const nums = [-1,0,3,5,9,12];
    const target = 9;
    const locationIdx = 4;

    const result = binarySearch(nums, target);
    expect(result).toEqual(locationIdx);
  });

  it('should return -1 when the desired number is not in the list', () => {
    const nums = [-1,0,3,5,9,12];
    const target = 2;
    const locationIdx = -1;

    const result = binarySearch(nums, target);
    expect(result).toEqual(locationIdx);
  });
});
