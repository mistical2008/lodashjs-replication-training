/* eslint-disable import/prefer-default-export */
export function compareArrays(
  callback: CallableFunction,
  args: unknown[],
  result: unknown[],
): void {
  const str: string = JSON.stringify(result);
  const resStr: string = JSON.stringify(callback(...args));

  /* eslint-disable no-undef */
  test(`should return ${str} `, () => {
    expect(resStr).toBe(str);
  });
}
