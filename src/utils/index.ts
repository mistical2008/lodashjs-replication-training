export function compareArrays<T>(callback: Function, args: T | any[], result: any[]) {
  const str: string = JSON.stringify(result)
  const resStr: string = JSON.stringify(callback.apply(null, args))

  /* eslint-disable no-undef */
  test(`should return ${str} `, () => {
    expect(resStr).toBe(str);
  });
}

