function compareArrays(callback, args, result) {
  const str = JSON.stringify(result);
  const resStr = JSON.stringify(callback.apply(null, args));

  /* eslint-disable no-undef */
  test(`should return ${str} `, () => {
    expect(resStr).toBe(str);
  });
}
module.exports.compareArrays = compareArrays;

